import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import Flex from './Flex';
import ProductList from './ProductList';

function Items({ currentItems }) {
  return (
    <Flex className='flex-wrap gap-x-[40px] gap-y-[40px] pb-[50px]'>
      {currentItems &&
        currentItems.map((item) => (
          <div key={item.id}>
            {console.log(item)}
           <ProductList src={item.images[0]} text={item.title} price={`$${item.price}`} color={item.rating}/>
          </div>
        ))}


    </Flex>
  );
}

function Pagination({ itemsPerPage }) {
  const [data, setData] = useState([]);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((res) => setData(res.products))
      .catch((error) => console.error("Error fetching data:", error));
  }, []); 

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = data.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(data.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    setItemOffset(newOffset);
  };

  return (
    <>
    <div className='relative'>
    
   
    <Items currentItems={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel=""
        previousLabel=""
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        renderOnZeroPageCount={null}
        containerClassName="pagination flex  gap-x-[15px]"  
        activeClassName="active"
        pageLinkClassName ="border border-[#F0F0F0] px-[14px] py-[9px] text-[16px] text-primary font-[700] hover:bg-black hover:text-white duration-300"
      />


<div className='absolute bottom-0 right-0'>
<h2 className='text-[16px] font-[400] font-dm text-primary'>Products from {itemOffset + 1} to {endOffset > data.length ? data.length : endOffset} of {data.length}</h2>
</div>

    </div>
   
    </>

    
  );
}

export default Pagination;
