import React, { useState, useEffect, useMemo } from 'react'
import Helmet from '../components/Helmet/Helmet'
import CommenSection from '../components/ui/commen-section/CommenSection'
import { Product } from '../types/Product'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { cartActions } from '../store/shopping-cart/cartSlice'
import Review from '../components/ui/Review/Review'
import ProductCard from '../components/ui/ProductCard/ProductCard'
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

const products: Product[] = [
  {
    id: 1,
    title: 'Burger1',
    imageUrl: `${require('../assets/images/products/burger.png')}`,
    images: [`${require('../assets/images/products/burger.png')}`, `${require('../assets/images/products/burger3.png')}`, `${require('../assets/images/products/burger4.png')}`],
    price: '2.5',
    category: 'Burger'
  },
  {
    id: 2,
    title: 'Burger2',
    images: [`${require('../assets/images/products/burger2.png')}`, `${require('../assets/images/products/burger3.png')}`, `${require('../assets/images/products/burger4.png')}`],
    imageUrl: `${require('../assets/images/products/burger2.png')}`,
    price: '1.5',
    category: 'Burger'
  },
  {
    id: 3,
    title: 'Burger3',
    images: [`${require('../assets/images/products/burger3.png')}`, `${require('../assets/images/products/burger2.png')}`, `${require('../assets/images/products/burger4.png')}`],
    imageUrl: `${require('../assets/images/products/burger3.png')}`,
    price: '2',
    category: 'Burger'
  },
  {
    id: 4,
    title: 'Burger4',
    images: [`${require('../assets/images/products/burger4.png')}`, `${require('../assets/images/products/burger3.png')}`, `${require('../assets/images/products/burger2.png')}`],
    imageUrl: `${require('../assets/images/products/burger4.png')}`,
    price: '4',
    category: 'Burger'
  },
  {
    id: 5,
    title: 'Burger5',
    images: [`${require('../assets/images/products/burger5.png')}`, `${require('../assets/images/products/burger3.png')}`, `${require('../assets/images/products/burger4.png')}`],
    imageUrl: `${require('../assets/images/products/burger5.png')}`,
    price: '3.4',
    category: 'Burger'
  },
  {
    id: 6,
    title: 'Pizza1',
    images: [`${require('../assets/images/products/pizza.png')}`, `${require('../assets/images/products/pizza2.png')}`, `${require('../assets/images/products/pizza3.png')}`],
    imageUrl: `${require('../assets/images/products/pizza.png')}`,
    price: '5.5',
    category: 'Pizza'
  },
  {
    id: 7,
    title: 'Pizza2',
    images: [`${require('../assets/images/products/pizza2.png')}`, `${require('../assets/images/products/pizza.png')}`, `${require('../assets/images/products/pizza3.png')}`],
    imageUrl: `${require('../assets/images/products/pizza2.png')}`,
    price: '3.5',
    category: 'Pizza'
  },
  {
    id: 8,
    title: 'Pizza3',
    images: [`${require('../assets/images/products/pizza3.png')}`, `${require('../assets/images/products/pizza2.png')}`, `${require('../assets/images/products/pizza.png')}`],
    imageUrl: `${require('../assets/images/products/pizza3.png')}`,
    price: '4',
    category: 'Pizza'
  },
  {
    id: 9,
    title: 'Pizza4',
    images: [`${require('../assets/images/products/pizza4.png')}`, `${require('../assets/images/products/pizza2.png')}`, `${require('../assets/images/products/pizza3.png')}`],
    imageUrl: `${require('../assets/images/products/pizza4.png')}`,
    price: '3.5',
    category: 'Pizza'
  },
  {
    id: 10,
    title: 'Pizza5',
    images: [`${require('../assets/images/products/pizza5.png')}`, `${require('../assets/images/products/pizza2.png')}`, `${require('../assets/images/products/pizza3.png')}`],
    imageUrl: `${require('../assets/images/products/pizza5.png')}`,
    price: '4',
    category: 'Pizza'
  },
  {
    id: 11,
    title: 'Bread1',
    images: [`${require('../assets/images/products/bread.png')}`, `${require('../assets/images/products/bread2.png')}`, `${require('../assets/images/products/bread3.png')}`],
    imageUrl: `${require('../assets/images/products/bread.png')}`,
    price: '1.5',
    category: 'Bread'
  },
  {
    id: 12,
    title: 'Bread2',
    images: [`${require('../assets/images/products/bread2.png')}`, `${require('../assets/images/products/bread.png')}`, `${require('../assets/images/products/bread3.png')}`],
    imageUrl: `${require('../assets/images/products/bread2.png')}`,
    price: '2.5',
    category: 'Bread'
  },
  {
    id: 13,
    title: 'Bread3',
    images: [`${require('../assets/images/products/bread3.png')}`, `${require('../assets/images/products/bread2.png')}`, `${require('../assets/images/products/bread.png')}`],
    imageUrl: `${require('../assets/images/products/bread3.png')}`,
    price: '4.5',
    category: 'Bread'
  },
  {
    id: 14,
    title: 'Bread4',
    images: [`${require('../assets/images/products/bread4.png')}`, `${require('../assets/images/products/bread2.png')}`, `${require('../assets/images/products/bread3.png')}`],
    imageUrl: `${require('../assets/images/products/bread4.png')}`,
    price: '0.5',
    category: 'Bread'
  },
  {
    id: 15,
    title: 'Bread5',
    images: [`${require('../assets/images/products/bread5.png')}`, `${require('../assets/images/products/bread2.png')}`, `${require('../assets/images/products/bread3.png')}`],
    imageUrl: `${require('../assets/images/products/bread5.png')}`,
    price: '1',
    category: 'Bread'
  }
]
const FoodDetails = () => {
  const [product, setProduct] = useState<Product | null>(null);
  const [reviewImage, setReviewImage] = useState(product?.imageUrl)
  const [relatedProduct, setRelatedProduct] = useState<Product[] | []>([]);
  const [activeTab, setActiveTab] = useState("description");

  const tabData = [
    {
      label: "Description",
      value: "description",
      desc: `It really matters and then like it really doesn't matter.
      What matters is the people who are sparked by it. And the people 
      who are like offended by it, it doesn't matter.`,
    },
    {
      label: "Review",
      value: "review",
      desc: <Review />,
    }
  ];
  let { id }: any = useParams();
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(cartActions.addItem(product))
  }
  let relatedProducts = useMemo(() => products.filter(p => product?.category === p.category), [product]);
  useEffect(() => {
    window.scrollTo(0,0);
    const item = products.filter(product => product.id == id)[0];
    setProduct(item)
    setReviewImage(item.imageUrl)
    // let relatedProducts = products.filter(p => product?.category === p.category);
    setRelatedProduct(relatedProducts)

  }, [product, id])


  return (
    <Helmet title='Product Details'>
      <>
        <CommenSection title={product?.title} />
        <div className='mx-auto max-w-screen-xl px-6 py-6 '>
          <div className="flex flex-row flex-wrap gap-12 content-center md:content-start mb-5">
            <div className="flex w-max flex-col ">
              {product?.images?.map((item, i) => <img key={i} className='w-24 md:w-32 h-max md:h-max p-2 cursor-pointer transition ease-in-out delay-150 hover:scale-110 hover:-translate-y-1' src={item} onClick={() => setReviewImage(item)} alt='' />)}
            </div>

            <div className="flex-auto  self-center  w-32 p-2 justify-center flex">
              <img className='w-64 h-max ' src={reviewImage} alt='' />

            </div>

            <div className="flex-auto w-full md:w-64 ">
              <h2 className='text-3xl mb-3'>{product?.title}</h2>
              <p className='mb-3'>Price:      <span className='font-bold text-xl ' >${product?.price}</span></p>
              <p className='mb-3 font-semibold'>Category: <span className='bg-[#fff8eb] p-2 rounded'>{product?.category}</span></p>
              <button className='bg-[#FB9C16] text-white text-nowrap rounded p-2   mt-2' onClick={addToCart}>Add to Cart</button>
            </div >
          </div>

          <Tabs value={activeTab} className='mb-5'>
            <TabsHeader
              className="rounded-none border-b border-blue-gray-50 bg-transparent p-0 pr-96"
              indicatorProps={{
                className:
                  "bg-transparent border-b-2 border-[#FB9C16] shadow-none rounded-none",
              }}
            >
              {tabData.map(({ label, value }) => (
                <Tab
                  key={value}
                  value={value}
                  onClick={() => setActiveTab(value)}
                  className={activeTab === value ? "text-[#FB9C16] w-max " : "w-max "}
                >
                  {label}
                </Tab>
              ))}
            </TabsHeader>
            <TabsBody>
              {tabData.map(({ value, desc }) => (
                <TabPanel key={value} value={value}>
                  {desc}
                </TabPanel>
              ))}
            </TabsBody>
          </Tabs>
          <div>
            <h2 className='text-3xl mb-4 font-bold'>You might also like</h2>
            <div className='flex flex-wrap gap-3 justify-center justify-items-center'>

              {relatedProduct.map((item) => {
                return (
                  <ProductCard item={item} key={item.id} />
                )
              }
              )}
            </div>
          </div>

        </div>
      </>
    </Helmet>
  )
}

export default FoodDetails
