import React from 'react'

export default function Category() {
    return (
        <div className='grid grid-cols-4 gap-2 md:gap-4 justify-items-center  text-center  content-center'>

            <span className='flex flex-col md:flex-row w-full items-center text-center md:text-left p-2 content-center  bg-[#fff8eb] gap-2 transition ease-in-out delay-100 hover:-translate-y-2 hover:scale-105  duration-300 cursor-pointer'>
                <i className="fa-solid fa-burger text-center w-[3rem] h-3rem] leading-[3rem]  text-3xl md:w-[4rem] md:h-[4rem] md:leading-[4rem]  md:text-4xl bg-[#FB9C16] rounded-full"></i>
                <span>Fastfood</span>

            </span>
            <span className='flex flex-col md:flex-row w-full items-center text-center md:text-left p-2 content-center  bg-[#fff8eb] gap-2 transition ease-in-out delay-100 hover:-translate-y-2 hover:scale-105  duration-300 cursor-pointer'>
                <i className="fa-solid fa-pizza-slice text-center w-[3rem] h-3rem] leading-[3rem]  text-3xl md:w-[4rem] md:h-[4rem] md:leading-[4rem]  md:text-4xl bg-[#FB9C16]  rounded-full"></i>
                <span>Pizza</span>

            </span>
            <span className='flex flex-col md:flex-row w-full items-center text-center md:text-left p-2 content-center  bg-[#fff8eb] gap-2 transition ease-in-out delay-100 hover:-translate-y-2 hover:scale-105  duration-300 cursor-pointer'>

                <i className="fa-solid fa-bowl-rice text-center w-[3rem] h-3rem] leading-[3rem]  text-3xl md:w-[4rem] md:h-[4rem] md:leading-[4rem]  md:text-4xl bg-[#FB9C16]  rounded-full"></i>
                <span>Asian food</span>
            </span>
            <span className='flex flex-col md:flex-row w-full items-center text-center md:text-left p-2 content-center  bg-[#fff8eb] gap-2 transition ease-in-out delay-100 hover:-translate-y-2 hover:scale-105  duration-300 cursor-pointer'>

                <i className="fa-solid fa-bacon text-center w-[3rem] h-3rem] leading-[3rem]  text-3xl md:w-[4rem] md:h-[4rem] md:leading-[4rem]  md:text-4xl bg-[#FB9C16]  rounded-full"></i>
                <span>Meat</span>

            </span>
        </div>
    )
}
