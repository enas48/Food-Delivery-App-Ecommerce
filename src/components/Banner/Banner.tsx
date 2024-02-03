import React from 'react'
import { Button } from "@material-tailwind/react";
import { useNavigate } from 'react-router-dom';
import banner from '../../assets/images/banner.svg'
export default function Banner() {
    const navigate = useNavigate();
    return (
        <div className="container mx-auto">
            <div className="grid gap-9 lg:content-center lg:grid-cols-2   ">
                <div>
                    <h5 className='text-xl  mb-3'>Easy way to make an order</h5>
                    <h1 className='text-3xl  lg:text-[2.5rem] font-bold mb-4 leading-normal'><span className='text-[#FB9C16]'>HUNGRY?</span> just wait <br />food at <span className='text-[#FB9C16] '>your&nbsp;door</span></h1>
                    <p className='leading-relaxed mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus at voluptate voluptas nam distinctio quo, dolore molestiae, qui rerum ullam sint facere voluptatum veniam vitae libero magni, voluptates quasi aperiam.</p>
                    <div className="flex gap-3 p-1 mb-4">
                        <Button className="rounded flex items-center h-[2.8rem] bg-[#FB9C16]"><span>
                            Order now
                        </span><i className="ri-arrow-drop-right-line text-lg"></i>
                        </Button>

                        <Button onClick={() => navigate('/foods')} className="rounded cursor-pointer bg-white h-[2.8rem] text-[#FB9C16] border border-[#FB9C16] hover:border-[#fb9c16c9]">See all foods</Button>


                    </div>
                    <br />
                    <div className='flex items-center gap-4 flex-wrap'>
                        <p className='flex items-center gap-2'>
                            <span className='px-2 py-1   text-lg rounded-full bg-[#FB9C16] '><i className="ri-car-line"></i></span> <span>No shipping charge</span>
                        </p>
                        <p className='flex items-center gap-2'>
                            <span className='px-2 py-1   text-lg rounded-full bg-[#FB9C16] '><i className="ri-shield-check-line"></i></span> <span>100% secure checkout</span>
                        </p>
                    </div>
                </div>
                <div>
                    <img src={banner} alt="avatar" />
                </div>

            </div>


        </div>
    )
}
