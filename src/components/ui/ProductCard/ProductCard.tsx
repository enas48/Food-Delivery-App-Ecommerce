import React from 'react'
import { Link } from 'react-router-dom'
import { Product } from '../../../types/Product'
import { useDispatch } from 'react-redux'
import { cartActions } from '../../../store/shopping-cart/cartSlice'

export default function ProductCard(props: { item: Product }) {
    const { id,
        title,
        imageUrl,
        price
    } = props.item
    const dispatch = useDispatch();
    const addToCart = () => {
        dispatch(cartActions.addItem({
            id, title, imageUrl, price
        }))
    }
    return (
        <div className='shadow-md p-3 rounded m-2 items-center flex flex-col gap-3 '>
            <div className='transition ease-in-out delay-100 hover:-translate-y-2 hover:scale-105  duration-300'>
                <Link to={`/foods/${id}`}>  <img src={imageUrl} className='h-[4rem]' alt='product-img' /></Link>
            </div>
            <h5 className='font-medium'>
                <Link to={`/foods/${id}`}>{title}</Link>
            </h5>

            <div className='flex justify-between items-center gap-6 flex-wrap'>
                <span className='font-bold'>${price}</span>
                <button className='bg-[#FB9C16] text-white text-nowrap rounded p-2   m-2' onClick={addToCart}>Add to Cart</button>
            </div>



        </div>
    )
}
