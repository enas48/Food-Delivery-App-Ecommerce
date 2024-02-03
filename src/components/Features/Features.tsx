import React from 'react'

export default function Features() {
    const featureData = [
        {
            title: 'Quick Delivery',
            imgUrl: `${require('../../assets/images/service-01.png')}`,
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            Minus: 'adipisicing'
        },
        {
            title: 'Super Dine In',
            imgUrl: `${require('../../assets/images/service-02.png')}`,
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            Minus: "Porro."
        },
        {
            title: 'Easy Pick Up',
            imgUrl: `${require('../../assets/images/service-03.png')}`,
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            Minus: "Porro."
        }
    ]
    return (
        <div className="container mx-auto">
            <div className="grid justify-center justify-items-center  text-center ">
                <div className='w-full lg:w-1/2'>
                    <h5 className='font-bold text-[#FB9C16] text-lg'>what we serve</h5>
                    <h2 className='text-2xl mt-4 font-bold'>just sit back at home</h2>
                    <h2 className='text-2xl mb-4 font-bold'>we will <span className='text-[#FB9C16]'>take care</span></h2>
                    <p className='text-base/7 mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro consequatur alias deleniti nobis, vel, rerum consequuntur numquam illo vero labore consectetur totam explicabo eveniet quisquam est enim minima.</p>
                </div>
            </div>

            <div className='grid md:grid-cols-3 gap-2 md:gap-4 justify-items-center  text-center mx-auto'>
                {featureData.map((item, i) => {
                    return (<span key={i} className='flex flex-col  w-full items-center text-center p-2 content-center  gap-2'>
                        <img className=' w-auto h-[6rem] ' src={item.imgUrl} alt='' />
                        <span className='font-bold text-lg'>{item.title}</span>
                        <p>{item.desc}</p>

                    </span>
                    )
                }
                )}


            </div>
        </div>
    )
}
