import React from 'react'
import bennerImg from '../../assets/banner.png'
import { FaSearch } from "react-icons/fa";
import TooltipButton from '../../components/TooltipButton';
const Hero = () => {
  return (
    <section className='relative h-screen bg-cover bg-center  text-white' style={{backgroundImage: `url(${bennerImg})`}}>

          <div className='relative  pt-20 md:pt-36 md:w-1/2 mx-auto text-center space-y-8'>
            <h1 className='text-2xl md:text-5xl leading-tight lg:leading-snug font-medium'>Make your interior more minimalistic & modern</h1>
            <p className='md:w-1/2 mx-auto'>Turn your room with panto into a lot more minimalist and modern with ease and speed</p>

              {/* Search field with input and icon */}
            <div className='relative inline-block '>
                <input type="text" className='w-full md:w-80 py-2 px-3 rounded-full bg-white/25 placeholder:text-white focus:outline-none border border-gray-300 ' placeholder='Search furniture' />
                <div className='absolute top-1/2 right-2 text-xl bg-primary transition -translate-y-1/2 p-1 rounded-full cursor-pointer '>
                <FaSearch />
                </div>
               
            </div>
          </div>
           
       {/* Overlay with small bottom blur effect */}
          <div className='absolute inset-x-0 bottom-0 -mb-2 h-3/4 bg-gradient-to-t from-white via-transparent to-transparent blur-sm' /> 

       {/* hover button for displaying box  */}
      
       {/* <div className='absolute right-20 bottom-32 group'>
        <button className='relative p-3 bg-indigo-600 rounded-full border  '>
              <div className='hidden absolute right-1/2 bottom-full mb-4 group-hover:flex transition translate-x-1/2 bg-sky-800/30 p-3 rounded-lg space-x-4'>
                <div className='size-6 bg-purple-700 rounded-full border-2 '></div>
                <div className='size-6 bg-purple-700 rounded-full border-2 '></div>
                <div className='size-6 bg-purple-700 rounded-full border-2 '></div>
              </div>
        </button>
       </div> */}

    

       <div className='hidden md:block absolute left-24 bottom-32' >
        <TooltipButton position='botton' />
       </div>
       <div className='hidden md:block absolute right-24 bottom-32' >
        <TooltipButton position='botton' />
       </div>
       <div className='hidden md:block absolute left-1/2 bottom-32' >
        <TooltipButton position='botton' />
       </div>
      

    </section>
  )
}

export default Hero