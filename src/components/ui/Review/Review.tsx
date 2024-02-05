import React, { useState } from 'react'
import {
  Input,
  Textarea,
  Rating
} from "@material-tailwind/react";
function Review() {
  const [rated, setRated] = React.useState(0);
  const [formdata, setFromData] = useState<{ name: string, email: string, review: string, rate: number }>({ name: "", email: "", review: "", rate: 0 })
  const submit = () => {
    console.log(rated)
    console.log(formdata)
  }
  const onChange = (e: any) => {
    const { name, value } = e.target;
    const newVal = value;

    setFromData({
      ...formdata,
      [name]: newVal
    });
  };

  return <div className='py-3 flex gap-8 '>
    <div className='w-full md:w-1/2'>

      <div className='flex shadow p-2 rounded flex-col mb-5'>
        <p className='font-bold'>Jhon doe</p>
        <Rating value={4} unratedColor="amber" ratedColor="amber" readonly />
        <p> greate product</p>
      </div>
      <div className='flex shadow p-2 rounded flex-col mb-5'>
        <p className='font-bold'>Jhon doe</p>
        <Rating value={5} unratedColor="amber" ratedColor="amber" readonly />
        <p> i like this burger</p>
      </div>
    </div>
    <div className="flex w-full md:w-1/2 flex-col gap-6 m-auto bg-[#fff8eb] p-5 rounded">
      <Input crossOrigin="" variant="static" className='focus:bg-transparent active:bg-transparent' name="name" value={formdata.name} type='text' label="Name" onChange={onChange} />
      <Input crossOrigin="" variant="static" className='focus:bg-transparent active:bg-transparent' name="email" value={formdata.email} type='email' label="Email" onChange={onChange} />
      <Textarea variant="static" className='focus:bg-transparent active:bg-transparent' name="review" value={formdata.review} label="Review" onChange={onChange} />
      <label className='text-gray-500 text-sm'>Rating</label>
      <Rating value={rated} onChange={(value) => { setRated(value); setFromData({ ...formdata, rate: value }) }} unratedColor="amber" ratedColor="amber" />
      <button className='bg-[#FB9C16] text-white text-nowrap rounded p-2 mt-2 w-max m-auto px-5' onClick={submit}>Submit</button>
    </div>
  </div>

}

export default Review