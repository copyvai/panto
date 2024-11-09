import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaShopify, FaBars } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";


const navItems = [
  {path:'/', leval:'Home'},
  {path:'/shop', leval:'Shop'},
  {path:'/contact', leval:'Contact'},
  {path:'/about', leval:'About Us'}
]
 const NavItems = ({toggleMenu}) => {
  return (
  <ul className='flex flex-col md:flex-row items-center md:space-x-8 gap-8'>
    {navItems.map((item, index)=>(
      <li key={index} onClick={toggleMenu}>
        <NavLink to={item.path}
       className={({ isActive}) =>
        isActive
          ? "font-bold text-primary"
          : "hover:text-primary"
      }>{item.leval}</NavLink>
      </li>
    ))}
  </ul>
  )
}

const Navbar = () => {
  const [isMenuOpen, setiIsMenuOpen]=useState(false) //for mobail

     // for mobail
  const toggleMenu =()=>{
           setiIsMenuOpen(prev => !prev)
  }
  return (
   <header className='fixed top-0 right-0 z-50 w-full transition duration-300 ease-in-out text-white'>
     <nav className='max-w-screen-2xl container mx-auto flex justify-between items-center py-6 px-4'>
        {/* logo */}
        <Link className='text-xl font-bold' to={'/'}>Panto</Link>
           
           {/* hembar menu for mobail */}
           <div onClick={toggleMenu} className='md:hidden cursor-pointer'>
             {isMenuOpen? null : <FaBars /> }
           </div>

        {/*desktop menu items */}
        <div className='hidden md:flex'>
          <NavItems />
        </div>

        {/* mobail menu item */}
        <div className={`fixed top-0 left-0 w-full h-screen bg-black bg-opacity-50 text-white flex flex-col justify-center items-center space-x-4 transition-transform transform ${isMenuOpen?'translate-x-0':'-translate-x-full'} md:hidden`}>
          <div className='absolute top-7 right-5 ' onClick={toggleMenu}>
             <FaTimes />
          </div>
          <div>
             <NavItems toggleMenu={toggleMenu}/>
          </div>
        </div>

        {/* card icon */}
        <div className='hidden md:block cursor-pointer relative'>
            <FaShopify className='text-xl'/>
          <p className='absolute top-0 right-0 bg-primary text-white w-3 h-3 rounded-full flex items-center justify-center '>0</p>
        </div>

     </nav>
   </header>
  )
}

export default Navbar