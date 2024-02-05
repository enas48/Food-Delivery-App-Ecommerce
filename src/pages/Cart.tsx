import React, { useState, useEffect, useMemo } from 'react'
import Helmet from '../components/Helmet/Helmet'
import CommenSection from '../components/ui/commen-section/CommenSection'
import { useSelector, useDispatch } from 'react-redux';
import { CartItemType } from '../types/CartItem';
import { cartActions } from '../store/shopping-cart/cartSlice';
import { Card, Typography, IconButton, Avatar, Button } from "@material-tailwind/react";
import { TrashIcon, ShoppingCartIcon } from "@heroicons/react/24/solid";
import { Link } from 'react-router-dom';
export interface CartState {
  cart: {
    cartItems: CartItemType[];
    totalQuantity: number;
    totalAmount: number;
  }
}

const Cart = () => {
  const cartProducts = useSelector((state: CartState) => state.cart.cartItems)
  const totalAmount = useSelector((state: CartState) => state.cart.totalAmount);
  const dispatch = useDispatch();
  const removeItem = (id: any) => {
    dispatch(cartActions.removeItem({
      id
    }))
  }
  const TABLE_HEAD = ["Image", "Product Title", "Price", "Quantity", "total Price", "Delete"];

  return (
    <Helmet title='Cart'>
      <>
        <CommenSection title="Your Cart" />
        <div className='mx-auto max-w-screen-xl px-6 py-6 '>


          <Card className="h-full w-full overflow-auto p-3 mb-5">
            {cartProducts.length === 0 ? <><h3 className='text-center  mb-2'>Your cart is empty</h3> <ShoppingCartIcon className='w-8 h-8 mx-auto' /></> :
              <table className="w-full min-w-max table-auto text-left">
                <thead>
                  <tr>
                    {TABLE_HEAD.map((head) => (
                      <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal leading-none opacity-70"
                        >
                          {head}
                        </Typography>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {cartProducts.map(({ id, title, price, imageUrl, quantity, totalPrice }, index) => {
                    const isLast = index === cartProducts.length - 1;
                    const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

                    return (
                      <tr key={id}>
                        <td className={classes}>
                          <Avatar src={imageUrl} alt="avatar" variant="square" />
                        </td>
                        <td className={`${classes} bg-blue-gray-50/50`}>
                          <Typography variant="small" color="blue-gray" className="font-normal">
                            {title}
                          </Typography>
                        </td>
                        <td className={`${classes} bg-blue-gray-50/50`}>
                          <Typography variant="small" color="blue-gray" className="font-normal">
                            ${price}
                          </Typography>
                        </td>
                        <td className={`${classes} bg-blue-gray-50/50`}>
                          <Typography variant="small" color="blue-gray" className="font-normal">
                            {quantity}
                          </Typography>
                        </td>
                        <td className={`${classes} bg-blue-gray-50/50`}>
                          <Typography variant="small" color="blue-gray" className="font-normal">
                            ${totalPrice}
                          </Typography>
                        </td>
                        <td className={`${classes} bg-blue-gray-50/50`}>
                          <IconButton variant="text" color="red" onClick={() => removeItem(id)}>
                            <TrashIcon className='w-5 h-5' />
                          </IconButton>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            }
          </Card>

          <div>
            <Typography className='mb-3' >
              Subtotal: <span className='font-bold'>${totalAmount}</span>
            </Typography>
            <Typography className='mb-3' >
              Taxes and shipping will calculate at checkout
            </Typography>
            <Button size="sm" className='bg-[#FB9C16] mr-4'>
              <Link to='/foods'>
                Continue Shopping
              </Link>
            </Button>
            <Button size="sm" className='bg-[#FB9C16]'>Procceced to Checkout</Button>
          </div>
        </div>
      </>
    </Helmet>
  )
}

export default Cart
