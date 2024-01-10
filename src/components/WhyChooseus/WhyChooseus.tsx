import React from 'react'

export default function WhyChooseus() {
    return (
        <div className="container mx-auto">
            <div className="grid gap-9 lg:content-center lg:grid-cols-2   ">
                <div>
                    <img src={process.env.PUBLIC_URL + 'assets/images/img2.svg'} className='w-96 mx-auto ' alt="avatar" />
                </div>
                <div>
                    <h2 className='text-3xl font-bold mb-3 '>Why <span className='text-[#FB9C16]'>Tasty Treat?</span></h2>
                    <p className='leading-relaxed mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus at voluptate voluptas nam distinctio quo, dolore molestiae, qui rerum ullam sint facere voluptatum veniam vitae libero magni, voluptates quasi aperiam.</p>
                    <ul className="my-2 p-0 ">
                        <li className=" y-1.5  flex gap-2 my-3">
                            <i className="fa-regular fa-circle-check mt-1 text-[#FB9C16]"></i>
                            <div>
                                <h4 className='font-semibold mb-1'>Fresh and tasty</h4>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores libero</p>
                            </div>

                        </li>
                        <li className=" y-1.5 flex gap-2 my-3">
                            <i className="fa-regular fa-circle-check mt-1 text-[#FB9C16]"></i>
                            <div>
                                <h4 className='font-semibold mb-1'>Quality support</h4>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>
                            </div>

                        </li>
                        <li className=" y-1.5  flex gap-2 my-3">
                            <i className="fa-regular fa-circle-check mt-1 text-[#FB9C16]"></i>
                            <div>
                                <h4 className='font-semibold mb-1'>Orders from any location</h4>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores</p>
                            </div>

                        </li>

                    </ul>
                </div>


            </div>


        </div>
    )
}
