import React from 'react'
import {
    ListItem,
    ListItemSuffix,
    IconButton,
    Button,
    ButtonGroup,
    Avatar
} from "@material-tailwind/react";
import { PlusIcon } from "@heroicons/react/24/solid";
import { MinusIcon } from "@heroicons/react/24/solid";
import { TrashIcon } from "@heroicons/react/24/solid";
import { CartItemType } from '../../../types/CartItem';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../../store/shopping-cart/cartSlice';


export default function CartItem(props: { item: CartItemType }) {
    const { id, title, price, imageUrl, quantity, totalPrice } = props.item;
    const dispatch = useDispatch();
    const incrementItem = () => {
        dispatch(cartActions.addItem({
            id, title, price, imageUrl
        }))
    }
    const decrementItem = () => {
        dispatch(cartActions.decrementItem({
            id
        }))
    }
    const removeItem = () => {
        dispatch(cartActions.removeItem({
            id
        }))
    }
    return (
        <ListItem ripple={false} className="py-1 pr-1">
            <div className='flex flex-col gap-3'>
                <div>
                    <Avatar src={imageUrl} alt="avatar" variant="square" />
                    <span className='pl-2 font-semibold'> {title}</span>
                </div>
                <div className='flex justify-between '>
                    <span>{quantity}x</span>
                    <span>${totalPrice}</span>
                </div>
                <ButtonGroup color="amber" size="sm" fullWidth ripple={true}>
                    <Button onClick={incrementItem}><PlusIcon className='w-3 h-4 text-black' /></Button>
                    <span className='px-4 bg-[#F59E0B] leading-10'>{quantity}</span>
                    <Button onClick={decrementItem}><MinusIcon className='w-3 h-4 text-black' /></Button>
                </ButtonGroup>
            </div>
            <ListItemSuffix>
                <IconButton variant="text" color="blue-gray" onClick={removeItem}>
                    <TrashIcon className='w-5 h-5 text-black' />
                </IconButton>
            </ListItemSuffix>
        </ListItem>
    )
}
