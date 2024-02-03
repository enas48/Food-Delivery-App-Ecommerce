import React from 'react'
import TestimonialSlider from '../ui/slider/TestimonialSlider'
import testimonial from '../../assets/images/testimonial.svg'
export default function Testimonial() {
  return (
    <div className="container mx-auto">
    <div className="grid gap-9 lg:content-center lg:grid-cols-2  items-center  ">
        <div>
            <h4 className='text-xl font-bold mb-3 text-[#FB9C16]'> Testimonial</h4>
            <h2 className='text-3xl font-bold mb-3 '>What our <span className='text-[#FB9C16]'>customers</span> are saying</h2>
            <p className='leading-relaxed mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus at voluptate voluptas nam distinctio quo, dolore molestiae.</p>
     
            <div className='w-full'>

            <TestimonialSlider/>
            </div>
        </div>
        <div>
            <img src={testimonial} className='w-96 mx-auto ' alt="testimonial" />
        </div>



    </div>


</div>
  )
}
