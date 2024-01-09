import React from 'react'
import { Link } from 'react-router-dom'
import { Product } from '../../types/Product'
export default function ProductCard(props:{item:Product}) {
    const { id,
        title,
        imageUrl,
        price,
        category } = props.item
    return (
        <div className=''>
            <div className=''>
                <img src={imageUrl} className='w-[4rem]' alt='product-img' />
            </div>
            <div className=''>
                <h5>
                    <Link to='/'>{title}</Link>
                </h5>
                <div>
                    <span>${price}</span>
                    <button className=''>Add to Cart</button>
                </div>
                <div>

                </div>
            </div>

        </div>
    )
}
