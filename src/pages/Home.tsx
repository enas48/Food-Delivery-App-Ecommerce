import React from 'react'
import Helmet from '../components/Helmet/Helmet'
import { ButtonGroup, Button } from "@material-tailwind/react";
const Home = () => {
  return (
    <div className='mx-auto max-w-screen-xl px-6 py-3 '>
      <Helmet title="Home">
        <section >
          <div className="container mx-auto">
            <div className="grid gap-9 lg:content-center lg:grid-cols-2   min-h-[85vh]">
              <div>
                <h5 className='text-xl  mb-3'>Easy way to make an order</h5>
                <h1 className='text-3xl  lg:text-[2.5rem] font-bold mb-4 leading-normal'><span className='text-[#FB9C16]'>HUNGRY?</span> just wait <br/>food at <span className='text-[#FB9C16] '>your&nbsp;door</span></h1>
                <p className='leading-relaxed mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus at voluptate voluptas nam distinctio quo, dolore molestiae, qui rerum ullam sint facere voluptatum veniam vitae libero magni, voluptates quasi aperiam.</p>
                <ButtonGroup className="gap-3 p-1">
      <Button className="rounded">One</Button>
      <Button className="rounded">Two</Button>
    </ButtonGroup>
              </div>
              <div>
                <img src={process.env.PUBLIC_URL + '../../assets/images/img3.svg'} alt="avatar" />
              </div>

            </div>
          </div>
        </section>
      </Helmet>

    </div>
  )
}

export default Home
