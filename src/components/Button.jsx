import React from 'react'
import button from '../assets/button-icon.png'

const Button = ({text}) => {
  return (
    <button className='flex items-center gap-5'>
         {text} <img src={button} alt="" />
   </button>
  )
}

export default Button