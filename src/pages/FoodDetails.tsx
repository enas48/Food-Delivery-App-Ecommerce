import React, { useState, useEffect } from 'react'
import Helmet from '../components/Helmet/Helmet'
import CommenSection from '../components/ui/commen-section/CommenSection'
import { Product } from '../types/Product'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { cartActions } from '../store/shopping-cart/cartSlice'

const products: Product[] = [
  {
    id: 1,
    title: 'Burger1',
    imageUrl: `${require('../assets/images/products/burger.png')}`,
    price: '2.5',
    category: 'Burger'
  },
  {
    id: 2,
    title: 'Burger2',
    imageUrl: `${require('../assets/images/products/burger2.png')}`,
    price: '1.5',
    category: 'Burger'
  },
  {
    id: 3,
    title: 'Burger3',
    imageUrl: `${require('../assets/images/products/burger3.png')}`,
    price: '2',
    category: 'Burger'
  },
  {
    id: 4,
    title: 'Burger4',
    imageUrl: `${require('../assets/images/products/burger4.png')}`,
    price: '4',
    category: 'Burger'
  },
  {
    id: 5,
    title: 'Burger5',
    imageUrl: `${require('../assets/images/products/burger5.png')}`,
    price: '3.4',
    category: 'Burger'
  },
  {
    id: 6,
    title: 'Pizza1',
    imageUrl: `${require('../assets/images/products/pizza.png')}`,
    price: '5.5',
    category: 'Pizza'
  },
  {
    id: 7,
    title: 'Pizza2',
    imageUrl: `${require('../assets/images/products/pizza2.png')}`,
    price: '3.5',
    category: 'Pizza'
  },
  {
    id: 8,
    title: 'Pizza3',
    imageUrl: `${require('../assets/images/products/pizza3.png')}`,
    price: '4',
    category: 'Pizza'
  },
  {
    id: 9,
    title: 'Pizza4',
    imageUrl: `${require('../assets/images/products/pizza4.png')}`,
    price: '3.5',
    category: 'Pizza'
  },
  {
    id: 10,
    title: 'Pizza5',
    imageUrl: `${require('../assets/images/products/pizza5.png')}`,
    price: '4',
    category: 'Pizza'
  },
  {
    id: 11,
    title: 'Bread1',
    imageUrl: `${require('../assets/images/products/bread.png')}`,
    price: '1.5',
    category: 'Bread'
  },
  {
    id: 12,
    title: 'Bread2',
    imageUrl: `${require('../assets/images/products/bread2.png')}`,
    price: '2.5',
    category: 'Bread'
  },
  {
    id: 13,
    title: 'Bread3',
    imageUrl: `${require('../assets/images/products/bread3.png')}`,
    price: '4.5',
    category: 'Bread'
  },
  {
    id: 14,
    title: 'Bread4',
    imageUrl: `${require('../assets/images/products/bread4.png')}`,
    price: '0.5',
    category: 'Bread'
  },
  {
    id: 15,
    title: 'Bread5',
    imageUrl: `${require('../assets/images/products/bread5.png')}`,
    price: '1',
    category: 'Bread'
  }
]
const FoodDetails = () => {
  const [product, setProduct] = useState<Product | null>(null);
  let { id }: any = useParams();
  const dispatch = useDispatch();
  const addToCart = () => {
      dispatch(cartActions.addItem(product))
  }
  useEffect(() => {
    const item = products.filter(product => product.id == id)[0];
    setProduct(item)
  })

  return (
    <Helmet title='Product Details'>
      <>
        <CommenSection title="Product Details" />
        <div className='mx-auto max-w-screen-xl px-6 py-3 '>
          <div className="flex gap-8">
            <div className="flex flex-col ">
              <img className='w-32 h-32 p-2' src={product?.imageUrl} alt='' />
              <img className='w-32 h-32 p-2' src={product?.imageUrl} alt='' />
              <img className='w-32 h-32 p-2' src={product?.imageUrl} alt='' />

            </div>

            <div className="flex-auto w-32 p-2 justify-center flex">
              <img className='w-64 h-64' src={product?.imageUrl} alt='' />

            </div>

            <div className="flex-auto w-64 ">
              <h2 className='text-3xl mb-3'>{product?.title}</h2>
              <p className='mb-3'>Price:      <span className='font-bold text-xl ' >${product?.price}</span></p>
              <p className='mb-3 font-semibold'>Category: <span className='bg-[#fff8eb] p-2 rounded'>{product?.category}</span></p>
              <button className='bg-[#FB9C16] text-white text-nowrap rounded p-2   mt-2' onClick={addToCart}>Add to Cart</button>
            </div >
          </div>

        </div>
      </>
    </Helmet>
  )
}

export default FoodDetails
