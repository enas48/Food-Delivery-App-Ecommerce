import React from 'react'
import {
    List,
    Drawer,
    Button,
    Typography,
    IconButton,
} from "@material-tailwind/react";
import { Link } from 'react-router-dom';
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import { useSelector, useDispatch } from 'react-redux';
import { cartUiActions } from '../../../store/shopping-cart/cartUiSlice';
import { CartItemType } from '../../../types/CartItem';
import CartItem from './CartItem';
export interface SelectCart {
    cartUi: {
        cartIsVisible: any
    }
}

export interface CartState {
    cart: {
        cartItems: CartItemType[];
        totalQuantity: number;
        totalAmount: number;
    }
}

export default function Carts() {
    const showCart = useSelector((state: SelectCart) => state.cartUi.cartIsVisible)
    const dispatch = useDispatch();
    const toggleCart = () => dispatch(cartUiActions.toggle())
    const cartProducts = useSelector((state: CartState) => state.cart.cartItems)
    const totalAmount = useSelector((state: CartState) => state.cart.totalAmount);
    return (

        <Drawer
            placement="right"
            open={showCart}
            onClose={toggleCart}
            className=" overflow-y-auto"
            overlay={false}

        >
            <div className='flex flex-col justify-between content-between h-full '>
                <List className='p-4'>
                    <div className="mb-6 flex items-center justify-between  sticky top-0 bg-white z-10">
                        <IconButton
                            variant="text"
                            color="blue-gray"
                            className='ml-auto rounded-full h-8 w-8 bg-black text-white'
                            onClick={toggleCart}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={3}
                                stroke="currentColor"
                                className="h-5 w-5"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </IconButton>
                    </div>
                    {cartProducts.length === 0 ? <div>
                        <ShoppingCartIcon className='w-12 h-12 mx-auto mb-4' />

                        <h6 className='text-center'>No items added to the cart</h6>
                    </div> : cartProducts.map((item, i) => <CartItem item={item} key={item.id} />)}
                </List>
                <div className="flex gap-2 justify-between items-center px-4 py-5 bg-[#fff8eb] sticky bottom-0">
                    <Typography >
                        Subtotal: <span className='font-bold'>${totalAmount}</span>
                    </Typography>
                    <Button size="sm" className='bg-[#FB9C16]'>  <Link to='/checkout'>Checkout</Link></Button>
                </div>
            </div>
        </Drawer>

    )
}
