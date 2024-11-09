import React from 'react'

const TooltipButton = ({position='botton' , colors=['bg-violet-900','bg-red-900', 'bg-indigo-600', 'bg-fuchsia-700' ]}) => {

  const positionclass={
    botton:{
      toltip:'left-1/2 bottom-full transition -translate-x-1/2 mb-9 '
    }
  }
  return (
    <div className='relative  group'>
        <button className='p-3 bg-lime-700 rounded-full border-2 shadow-lg '>
          <div className='relative '>
                 {/* Tooltip */}
          <div className={`absolute bg-slate-400/65 p-3 hidden group-hover:flex rounded-lg space-x-4 ${positionclass[position].toltip}`}>
             {/* Colored dots */}
             {colors.map((color, index)=>(
                 <div key={index} className={`${color} size-5  rounded-full border-2`}></div>
             ))}
           

              <div className='absolute left-1/2 transform -translate-x-1/2 -bottom-2 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-purple-700 '></div>
            </div>
          </div>
        </button> 
       </div>
  )
}

export default TooltipButton