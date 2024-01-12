import React from 'react'

export default function Testimonial() {
  return (
    <div className="container mx-auto">
    <div className="grid gap-9 lg:content-center lg:grid-cols-2   ">
        <div>
            <h4 className='text-xl font-bold mb-3 text-[#FB9C16]'> Testimonial</h4>
            <h2 className='text-3xl font-bold mb-3 '>What our <span className='text-[#FB9C16]'>customers</span> are saying</h2>
            <p className='leading-relaxed mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus at voluptate voluptas nam distinctio quo, dolore molestiae.</p>
        
        </div>
        <div>
            <img src={process.env.PUBLIC_URL + 'assets/images/testimonial.svg'} className='w-96 mx-auto ' alt="avatar" />
        </div>


    </div>


</div>
  )
}
