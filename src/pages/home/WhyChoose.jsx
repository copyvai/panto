import React from 'react'
import Button from '../../components/Button'



const WhyChoose = () => {
  return (
    <section className='section-container'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-center gap-9 text-left my-24'>
            <div className='text-4xl'><h1>Why <br /> Choosing Us</h1></div>
            <div>
                <h3 className='text-2xl font-semibold mb-3'>Luxury facilities</h3>
                <p className='text-base mb-2'>The advantage of hiring a workspace with us is that givees you comfortable service and all-around facilities.</p>
               <Button text='more info'/>
            </div>
            <div>
                <h3 className='text-2xl font-semibold mb-3'>Luxury facilities</h3>
                <p className='text-base mb-2'>The advantage of hiring a workspace with us is that givees you comfortable service and all-around facilities.</p>
               <Button text='more info'/>
            </div>
            <div>
                <h3 className='text-2xl font-semibold mb-3'>Luxury facilities</h3>
                <p className='text-base mb-2'>The advantage of hiring a workspace with us is that givees you comfortable service and all-around facilities.</p>
               <Button text='more info'/>
            </div>
        </div>
    </section>
  )
}

export default WhyChoose