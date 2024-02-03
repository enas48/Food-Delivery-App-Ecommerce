import React, { useEffect } from 'react'
import { useState } from 'react'
import { Category } from '../../types/Category'
import { Product } from '../../types/Product'
import ProductCard from '../ui/ProductCard/ProductCard'

interface Props {
    type?: String
}
export default function ProductsList({ type = 'all' }: Props) {
    const categories: Category[] = [
        {
            title: 'Burger',
            img: `${require('../../assets/images/products/burger.png')}`
        },
        {
            title: 'Pizza',
            img: `${require('../../assets/images/products/pizza.png')}`
        },
        {
            title: 'Bread',
            img: `${require('../../assets/images/products/bread.png')}`
        }
    ]
    const products: Product[] = [
        {
            id: 1,
            title: 'Burger1',
            imageUrl: `${require('../../assets/images/products/burger.png')}`,
            price: '2.5',
            category: 'Burger'
        },
        {
            id: 2,
            title: 'Burger2',
            imageUrl: `${require('../../assets/images/products/burger2.png')}`,
            price: '1.5',
            category: 'Burger'
        },
        {
            id: 3,
            title: 'Burger3',
            imageUrl: `${require('../../assets/images/products/burger3.png')}`,
            price: '2',
            category: 'Burger'
        },
        {
            id: 4,
            title: 'Burger4',
            imageUrl: `${require('../../assets/images/products/burger4.png')}`,
            price: '4',
            category: 'Burger'
        },
        {
            id: 5,
            title: 'Burger5',
            imageUrl: `${require('../../assets/images/products/burger5.png')}`,
            price: '3.4',
            category: 'Burger'
        },
        {
            id:6,
            title: 'Pizza1',
            imageUrl: `${require('../../assets/images/products/pizza.png')}`,
            price: '5.5',
            category: 'Pizza'
        },
        {
            id: 7,
            title: 'Pizza2',
            imageUrl: `${require('../../assets/images/products/pizza2.png')}`,
            price: '3.5',
            category: 'Pizza'
        },
        {
            id: 8,
            title: 'Pizza3',
            imageUrl: `${require('../../assets/images/products/pizza3.png')}`,
            price: '4',
            category: 'Pizza'
        },
        {
            id: 9,
            title: 'Pizza4',
            imageUrl: `${require('../../assets/images/products/pizza4.png')}`,
            price: '3.5',
            category: 'Pizza'
        },
        {
            id: 10,
            title: 'Pizza5',
            imageUrl: `${require('../../assets/images/products/pizza5.png')}`,
            price: '4',
            category: 'Pizza'
        },
        {
            id: 11,
            title: 'Bread1',
            imageUrl: `${require('../../assets/images/products/bread.png')}`,
            price: '1.5',
            category: 'Bread'
        },
        {
            id: 12,
            title: 'Bread2',
            imageUrl: `${require('../../assets/images/products/bread2.png')}`,
            price: '2.5',
            category: 'Bread'
        },
        {
            id: 13,
            title: 'Bread3',
            imageUrl: `${require('../../assets/images/products/bread3.png')}`,
            price: '4.5',
            category: 'Bread'
        },
        {
            id: 14,
            title: 'Bread4',
            imageUrl: `${require('../../assets/images/products/bread4.png')}`,
            price: '0.5',
            category: 'Bread'
        },
        {
            id: 15,
            title: 'Bread5',
            imageUrl: `${require('../../assets/images/products/bread5.png')}`,
            price: '1',
            category: 'Bread'
        }
    ]
    const [category, setCategory] = useState<string>('All');
    const [allProducts, setAllProducts] = useState<Product[]>(products);
    const [pizza, setPizza] = useState<Product[]>([]);

    useEffect(() => {
        const filteredPizza = products.filter(item => item.category === 'Pizza');
        const slicePizza = filteredPizza.slice(0, 4);
        setPizza(slicePizza);
    }, [])

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
        <>
            {(type === 'Pizza') ? (<div>
                <h2 className='text-2xl mt-4 font-bold text-center w-full'>Hot Pizza</h2>
                <br />
                <div className='flex flex-wrap gap-3 justify-center justify-items-center'>

                    {pizza.map((item) => {
                        return (
                            <ProductCard item={item} key={item.id} />
                        )
                    }
                    )}
                </div>
            </div>) : (<div>
                <h2 className='text-2xl mt-4 font-bold text-center w-full'>Popular Foods</h2>
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
            </div>)}

        </>

    )
}
