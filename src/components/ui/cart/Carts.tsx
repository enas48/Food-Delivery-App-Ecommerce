import React from 'react'
import {
    List,
    Card,
    Drawer,
    Button,
    Typography,
    IconButton,
} from "@material-tailwind/react";
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
    return (

        <Drawer
            placement="right"
            open={showCart}
            onClose={toggleCart}
            className="p-4"
        >
            <div className="mb-6 flex items-center justify-between">
                <IconButton
                    variant="text"
                    color="blue-gray"
                    className='ml-auto'
                    onClick={toggleCart}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
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
            <List>
                {cartProducts.length === 0 ? <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-16 h-16 m-auto mb-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                    </svg>
                    <h6 className='text-center'>No items added to the cart</h6>
                </div> : cartProducts.map((item, i) => <CartItem item={item} key={item.id} />)}
            </List>
            <div className="flex gap-2 justify-between items-center p-2 ">
                <Typography>
                    Subtotal: <span className='font-bold'>$200</span>
                </Typography>
                <Button size="sm" className='bg-[#FB9C16]'>Checkout</Button>
            </div>
        </Drawer>
    )
}
