import React from 'react'
import { Carousel } from "@material-tailwind/react";
import { Avatar, Typography } from "@material-tailwind/react";

export default function TestimonialSlider() {

  return (
    <Carousel className="rounded-xl custom-carsoul" navigation={({ setActiveIndex, activeIndex, length }) => (
      <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
        {new Array(length).fill("").map((_, i) => (
          <span
            key={i}
            className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${activeIndex === i ? "w-8 bg-black" : "w-4 bg-black/50"
              }`}
            onClick={() => setActiveIndex(i)}
          />
        ))}
      </div>
    )}>
      <div className="relative h-full w-full pb-8">
        <p className='leading-relaxed mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus at voluptate voluptas nam distinctio quo, dolore molestiae.</p>
        <div className="flex items-center gap-4">
          <Avatar src={process.env.PUBLIC_URL + 'assets/images/avater/avater1.png'}  alt="avatar" />
          <div>
            <Typography variant="h6">Tania Andrew</Typography>
            <Typography variant="small" color="gray" className="font-normal">
              Web Developer
            </Typography>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full  pb-8">
        <p className='leading-relaxed mb-4'> sit amet consectetur adipisicing elit. Natus at  voluptas nam distinctio quo, dolore molestiae.</p>
        <div className="flex items-center gap-4">
        <Avatar src={process.env.PUBLIC_URL + 'assets/images/avater/avater2.png'}  alt="avatar" />
          <div>
            <Typography variant="h6">Tania Andrew</Typography>
            <Typography variant="small" color="gray" className="font-normal">
              Web Developer
            </Typography>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full  pb-8">
        <p className='leading-relaxed mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. distinctio quo, dolore molestiae.</p>
        <div className="flex items-center gap-4">
        <Avatar src={process.env.PUBLIC_URL + 'assets/images/avater/avater3.png'}  alt="avatar" />
          <div>
            <Typography variant="h6">Tania Andrew</Typography>
            <Typography variant="small" color="gray" className="font-normal">
              Web Developer
            </Typography>
          </div>
        </div>
      </div>

    </Carousel>
  )
}
