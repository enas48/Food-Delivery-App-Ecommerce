import React, { useEffect } from 'react'
import { useState } from 'react'
import { Category } from '../../types/Category'
import { Product } from '../../types/Product'
import ProductCard from '../ProductCard/ProductCard'
export default function ProductsList() {
    const categories: Category[] = [
        {
            title: 'Burger',
            img: `${process.env.PUBLIC_URL + 'assets/images/burger.png'}`
        },
        {
            title: 'Pizza',
            img: `${process.env.PUBLIC_URL + 'assets/images/pizza.png'}`
        },
        {
            title: 'Bread',
            img: `${process.env.PUBLIC_URL + 'assets/images/bread.png'}`
        }
    ]
    const products: Product[] = [
        {
            id: 1,
            title: 'Burger1',
            imageUrl: `${process.env.PUBLIC_URL + 'assets/images/burger.png'}`,
            price: '2.5',
            category: 'Burger'
        },
        {
            id: 2,
            title: 'Burger2',
            imageUrl: `${process.env.PUBLIC_URL + 'assets/images/burger2.png'}`,
            price: '1.5',
            category: 'Burger'
        },
        {
            id: 3,
            title: 'Burger3',
            imageUrl: `${process.env.PUBLIC_URL + 'assets/images/burger3.png'}`,
            price: '2',
            category: 'Burger'
        },
        //  {
        //     id: 4,
        //     title: 'Burger4',
        //     imageUrl: `${process.env.PUBLIC_URL + 'assets/images/burger4.png'}`,
        //     price: '4',
        //     category: 'Burger'
        // },

        {
            id: 5,
            title: 'Pizza1',
            imageUrl: `${process.env.PUBLIC_URL + 'assets/images/pizza.png'}`,
            price: '5.5',
            category: 'Pizza'
        },
        {
            id: 6,
            title: 'Pizza2',
            imageUrl: `${process.env.PUBLIC_URL + 'assets/images/pizza2.png'}`,
            price: '3.5',
            category: 'Pizza'
        },
        {
            id: 7,
            title: 'Pizza3',
            imageUrl: `${process.env.PUBLIC_URL + 'assets/images/pizza3.png'}`,
            price: '4',
            category: 'Pizza'
        },
        {
            id: 8,
            title: 'Bread1',
            imageUrl: `${process.env.PUBLIC_URL + 'assets/images/bread.png'}`,
            price: '1.5',
            category: 'Bread'
        },
        {
            id: 9,
            title: 'Bread2',
            imageUrl: `${process.env.PUBLIC_URL + 'assets/images/bread2.png'}`,
            price: '2.5',
            category: 'Bread'
        },
        {
            id: 10,
            title: 'Bread3',
            imageUrl: `${process.env.PUBLIC_URL + 'assets/images/bread3.png'}`,
            price: '4.5',
            category: 'Bread'
        },
        {
            id: 11,
            title: 'Bread4',
            imageUrl: `${process.env.PUBLIC_URL + 'assets/images/bread4.png'}`,
            price: '0.5',
            category: 'Bread'
        }
    ]
    const [category, setCategory] = useState('All');
    const [allProducts, setAllProducts] = useState(products);

    useEffect(() => {
        if (category === 'All') {
            setAllProducts(products)
        } else {
            const filteredProducts = products.filter(item => item.category === category);
            setAllProducts(filteredProducts)

        }
    }, [category])


    const activeCategory = (e: any): void => {
        e.preventDefault();
        setCategory(e.target.name)
    }
    return (
        <div>
            <h2 className='text-2xl mt-4 font-bold'>Popular Foods</h2>
            <br />
            <div className='flex  flex-wrap font-bold gap-3 md:gap-6 justify-center  text-center mx-auto bg-[#FB9C16] p-3'>
                <button onClick={(e) => activeCategory(e)} name='All' className={`p-2 rounded ${category === 'All' && 'bg-[#fff8eb] text-[#FB9C16]'}`}>All</button>
                {categories.map((item, i) => {
                    return (
                        <button onClick={(e) => activeCategory(e)} name={item?.title} key={i} className={`flex gap-1 items-center p-2 rounded ${category === item?.title && 'bg-[#fff8eb] text-[#FB9C16]'}`}>
                            <img className='pointer-events-none h-[1.5rem] ' src={item?.img} alt='' />
                            <span className='pointer-events-none '>{item?.title}</span>
                        </button>
                    )
                }
                )}
            </div>
            <br />
            <div className='flex flex-wrap gap-3 justify-center justify-items-center'>

                {allProducts.map((item) => {
                    return (
                        <ProductCard item={item} key={item.id} />
                    )
                }
                )}
            </div>
        </div>
    )
}
