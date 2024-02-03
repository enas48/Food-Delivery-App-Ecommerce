import React, { useEffect, useState, useRef } from 'react'
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
  Badge,
} from "@material-tailwind/react";
import { cartUiActions } from '../../store/shopping-cart/cartUiSlice';
import logo from '../../assets/logo.png'


import { useLocation } from 'react-router-dom';
import { Bars3Icon, XMarkIcon, UserIcon } from "@heroicons/react/24/outline";
import { NavLink } from 'react-router-dom';
import { ShoppingBagIcon } from "@heroicons/react/24/solid";
import { useDispatch, useSelector } from 'react-redux';
import { CartItemType } from '../../types/CartItem';

function NavList() {
  const location = useLocation();
  const isActive = (item: string) => {
    return location.pathname.includes(item.toLowerCase());
  }

  const navLinks = [
    {
      display: 'Home',
      path: '/home'
    },
    {
      display: 'Foods',
      path: '/foods'
    },
    {
      display: 'Cart',
      path: '/cart'
    },
    {
      display: 'Contact',
      path: '/contact'
    },

  ]
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 " >
      {navLinks.map((item, index) => (
        <Typography
          key={index}
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 md:text-base font-medium"
        >
          <NavLink to={item.path} className={`flex items-center hover:text-[#FB9300] transition-colors ${isActive(item.display) ? 'text-[#FB9300]' : "text-[#000]"}`} >{item.display}</NavLink>
        </Typography>


      ))}

    </ul>
  );
}
export interface CartState {
  cartItems: CartItemType[];
  totalQuantity: number;
  totalAmount: number;
}
const Header = () => {
  const headerRef = useRef<any>(null)
  const [openNav, setOpenNav] = useState(false);
  const totalQuantity = useSelector((state: { cart: CartState }) => state.cart.totalQuantity);
  const dispatch = useDispatch();

  const toggleCart = () => dispatch(cartUiActions.toggle())

  /* navbar toogle in small screens*/
  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  /*header turn to fixed*/
  useEffect(() => {
    let scroll = () => window.addEventListener('scroll', () => {
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        if (headerRef.current != null) {
          headerRef.current.classList.add('header_shrink')
        }
      } else {
        if (headerRef.current != null) {
          headerRef.current.classList.remove('header_shrink')
        }
      }
    })
    scroll()
    return () => window.removeEventListener('scroll', scroll)
  })

  return (
    <div className='shadow-sm bg-white w-full z-10' ref={headerRef}>
      <Navbar className="mx-auto max-w-screen-xl px-6 py-3 rounded-none shadow-none text-[#000] w-full bg-white " >
        <div className="flex items-center justify-between ">
          <NavLink to="/home" className="mr-4 cursor-pointer py-1">
            <img src={logo} className='max-h-20' alt="avatar" />
          </NavLink>


          <div className="hidden lg:block">
            <NavList />
          </div>
          <div className="hidden lg:block" >
            <div className='flex gap-6 items-center'>
              <div onClick={toggleCart}>
                <Badge content={totalQuantity} >
                  <IconButton className='bg-transparent'>
                    <ShoppingBagIcon className="h-5 w-5 text-[#000]" />
                  </IconButton>
                </Badge>
              </div>
              <UserIcon className="h-6 w-6 text-[#000]" />
            </div>


          </div>
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6  hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <XMarkIcon className="h-6 w-6" strokeWidth={2} />
            ) : (
              <Bars3Icon className="h-6 w-6" strokeWidth={2} />
            )}
          </IconButton>
        </div>
        <Collapse open={openNav}>
          <NavList />
          <div className='flex gap-6 items-center mt-5'>
            <div onClick={toggleCart}>
              <Badge content={totalQuantity} >
                <IconButton className='bg-transparent'>
                  <ShoppingBagIcon className="h-5 w-5 text-[#000]" />
                </IconButton>
              </Badge>
            </div>
            <UserIcon className="h-6 w-6 text-[#000]" />
          </div>

        </Collapse>
      </Navbar>

    </div>
  )
}

export default Header
