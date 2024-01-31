import React, { useState } from 'react'
import Helmet from '../components/Helmet/Helmet'
import CommenSection from '../components/ui/commen-section/CommenSection'
import { Input, Select, Option } from "@material-tailwind/react";
import { Product } from '../types/Product'
import ProductCard from '../components/ui/ProductCard/ProductCard';
import ReactPaginate from 'react-paginate';

const products: Product[] = [
  {
    id: 1,
    title: 'Burger1',
    imageUrl: `${process.env.PUBLIC_URL + 'assets/images/products/burger.png'}`,
    price: '2.5',
    category: 'Burger'
  },
  {
    id: 2,
    title: 'Burger2',
    imageUrl: `${process.env.PUBLIC_URL + 'assets/images/products/burger2.png'}`,
    price: '1.5',
    category: 'Burger'
  },
  {
    id: 3,
    title: 'Burger3',
    imageUrl: `${process.env.PUBLIC_URL + 'assets/images/products/burger3.png'}`,
    price: '2',
    category: 'Burger'
  },
  {
    id: 4,
    title: 'Burger4',
    imageUrl: `${process.env.PUBLIC_URL + 'assets/images/products/burger4.png'}`,
    price: '4',
    category: 'Burger'
  },
  {
    id: 12,
    title: 'Burger5',
    imageUrl: `${process.env.PUBLIC_URL + 'assets/images/products/burger5.png'}`,
    price: '3.4',
    category: 'Burger'
  },
  {
    id: 5,
    title: 'Pizza1',
    imageUrl: `${process.env.PUBLIC_URL + 'assets/images/products/pizza.png'}`,
    price: '5.5',
    category: 'Pizza'
  },
  {
    id: 6,
    title: 'Pizza2',
    imageUrl: `${process.env.PUBLIC_URL + 'assets/images/products/pizza2.png'}`,
    price: '3.5',
    category: 'Pizza'
  },
  {
    id: 7,
    title: 'Pizza3',
    imageUrl: `${process.env.PUBLIC_URL + 'assets/images/products/pizza3.png'}`,
    price: '4',
    category: 'Pizza'
  },
  {
    id: 13,
    title: 'Pizza4',
    imageUrl: `${process.env.PUBLIC_URL + 'assets/images/products/pizza4.png'}`,
    price: '3.5',
    category: 'Pizza'
  },
  {
    id: 14,
    title: 'Pizza5',
    imageUrl: `${process.env.PUBLIC_URL + 'assets/images/products/pizza5.png'}`,
    price: '4',
    category: 'Pizza'
  },
  {
    id: 8,
    title: 'Bread1',
    imageUrl: `${process.env.PUBLIC_URL + 'assets/images/products/bread.png'}`,
    price: '1.5',
    category: 'Bread'
  },
  {
    id: 9,
    title: 'Bread2',
    imageUrl: `${process.env.PUBLIC_URL + 'assets/images/products/bread2.png'}`,
    price: '2.5',
    category: 'Bread'
  },
  {
    id: 10,
    title: 'Bread3',
    imageUrl: `${process.env.PUBLIC_URL + 'assets/images/products/bread3.png'}`,
    price: '4.5',
    category: 'Bread'
  },
  {
    id: 11,
    title: 'Bread4',
    imageUrl: `${process.env.PUBLIC_URL + 'assets/images/products/bread4.png'}`,
    price: '0.5',
    category: 'Bread'
  },
  {
    id: 15,
    title: 'Bread5',
    imageUrl: `${process.env.PUBLIC_URL + 'assets/images/products/bread5.png'}`,
    price: '1',
    category: 'Bread'
  }
]
const AllFood = () => {
  const [searchItem, setSearchItem] = useState('')
  const [itemOffset, setItemOffset] = useState(0);
  const searchedProducts = products.filter(item => {
    if (searchItem === '') return item
    if (item.title.toLowerCase().includes(searchItem.toLowerCase())) {
      return item
    }
  })
  const itemsPerPage = 10;
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = searchedProducts.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(searchedProducts.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % searchedProducts.length;
    setItemOffset(newOffset);
  };
  return (
    <Helmet title='All Foods'>
      <>
        <CommenSection title="All Foods" />
        <div className='mx-auto max-w-screen-xl px-6 py-3 '>
          <div className="grid grid-cols-2 gap-4 my-6">
            <div className="w-72">
              <Input value={searchItem} onChange={(e) => setSearchItem(e.target.value)} crossOrigin="" placeholder="I'm looking for ...." label='' icon={<i className="fas fa-search" />} />
            </div>
            <div className="w-72">
              <Select label="Filter by" value='Default'>
                <Option value='Default'>Default</Option>
                <Option value='ascending'>Alphabetically, A-Z</Option>
                <Option value='descending'>Alphabetically, Z-A</Option>
                <Option value='high-price'>High Price</Option>
                <Option value='low-price'>Low Price</Option>
              </Select>
            </div>
          </div>
          <div className='flex flex-wrap gap-3 justify-center justify-items-center'>

            {currentItems.map((item) => {
              return (
                <ProductCard item={item} key={item.id} />
              )
            }
            )}
          </div>
          <ReactPaginate
            breakLabel="..."
            nextLabel=" &raquo;"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel="&laquo;"
            renderOnZeroPageCount={null}
            containerClassName='paginetion-btns'
          />
        </div>
      </>
    </Helmet>
  )
}

export default AllFood
