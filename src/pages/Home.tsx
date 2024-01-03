import React from 'react'
import Helmet from '../components/Helmet/Helmet'
import { ButtonGroup, Button } from "@material-tailwind/react";
import { NavLink } from 'react-router-dom';
import Category from '../components/ui-category/Category';

const Home = () => {
  return (
    <div className='mx-auto max-w-screen-xl px-6 py-3 '>
      <Helmet title="Home">
        <section >
          <div className="container mx-auto">
            <div className="grid gap-9 lg:content-center lg:grid-cols-2   min-h-[85vh]">
              <div>
                <h5 className='text-xl  mb-3'>Easy way to make an order</h5>
                <h1 className='text-3xl  lg:text-[2.5rem] font-bold mb-4 leading-normal'><span className='text-[#FB9C16]'>HUNGRY?</span> just wait <br />food at <span className='text-[#FB9C16] '>your&nbsp;door</span></h1>
                <p className='leading-relaxed mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus at voluptate voluptas nam distinctio quo, dolore molestiae, qui rerum ullam sint facere voluptatum veniam vitae libero magni, voluptates quasi aperiam.</p>
                <ButtonGroup className="gap-3 p-1 mb-4">
                  <Button className="rounded flex items-center h-[2.8rem] bg-[#FB9C16]"><span>
                    Order now
                  </span><i className="ri-arrow-drop-right-line text-lg"></i>
                  </Button>
                  <NavLink to="/foods" className="border-none cursor-pointer">
                    <Button className="rounded bg-white h-[2.8rem] text-[#FB9C16] border-2 border-[#FB9C16] hover:border-[#fb9c16c9]">See all foods</Button>
                  </NavLink>

                </ButtonGroup>
                <br/>
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
                <img src={process.env.PUBLIC_URL + '../../assets/images/img3.svg'} alt="avatar" />
              </div>
              <Category/>

            </div>
          </div>
        </section>
      </Helmet>

    </div>
  )
}

export default Home
