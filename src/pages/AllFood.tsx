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
const AllFood = () => {
  const [searchItem, setSearchItem] = useState('')
  const [pageNumber, setPageNumber] = useState(0);
  const searchedProducts = products.filter(item => {
    if (searchItem === '') return item
    if (item.title.toLowerCase().includes(searchItem.toLowerCase())) {
      return item
    }
  })
  const itemsPerPage = 10;
  // from an API endpoint with useEffect and useState)
  const visitedPage = pageNumber * itemsPerPage;
  const displayPage = searchedProducts.slice(visitedPage, visitedPage + itemsPerPage);
  const pageCount = Math.ceil(searchedProducts.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = ({ selected }: any) => {
    // const newOffset = (event.selected * itemsPerPage) % searchedProducts.length;
    setPageNumber(selected);
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

            {displayPage.map((item) => {
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
