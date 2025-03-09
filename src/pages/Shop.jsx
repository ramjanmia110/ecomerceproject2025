import React, { useEffect, useState } from 'react'
import { Container } from '../components/Container'
import Flex from '../components/Flex'
import Catagory from '../components/Catagory'
import { IoMdArrowDropup } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import Pagination from '../components/Pagination';
import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import { BsFillFilterSquareFill } from "react-icons/bs";

const Shop = () => {
  const [show, setShow] = useState(false)
  const [cloth, setCloth] = useState(false)
  const [price, setPrice] = useState(false)
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [priceRanges, setPriceRanges] = useState([]); 
  const [selectedPriceRange, setSelectedPriceRange] = useState(null);
  const [showCount, setShowCount] = useState(5);

 

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((res) =>{
        setProducts(res.products)

      const prices = res.products.map((item)=>item.price);
      const minprice =Math.min(...prices);
      const maxPrice =Math.max(...prices);

      const ranges =[
        {label:`$${minprice} -$${minprice + 20}`, min:minprice,max:minprice + 20},
        {label:`$${minprice + 21} -$${minprice + 40}`, min:minprice + 21,max:minprice + 40},
        {label:`$${minprice + 41} -$${minprice + 60}`, min:minprice + 41,max:minprice + 60},
        {label:`$${minprice + 61} -$${maxPrice}`, min:minprice + 61,max:maxPrice}
      ]

      setPriceRanges(ranges)
      } 
        )
      .catch((error) => console.error("Error fetching data:", error));
  }, []); 


  


 
  const filteredProduct = products.filter((item) => {
    const categoryMatch = selectedCategory ? item.category === selectedCategory : true;
    const priceMatch = selectedPriceRange ? 
      item.price >= selectedPriceRange.min && item.price <= selectedPriceRange.max
      : true;
    return categoryMatch && priceMatch;
  });

 
 const handleCategoryClick = (category) => {
    setSelectedCategory(category); 
    setSelectedPriceRange(null);  
  };
 

  const handlePriceRangeClick = (range) => {
    setSelectedPriceRange(range); 
    setSelectedCategory(null);  
  };

  const handleShowCountChange = (e) => {
    setShowCount(Number(e.target.value)); 
  };

  const showCloth = () => {
    setCloth(!cloth)
  }

  const showProduct = () => {
    setShow(!show)
  }

  const [color, setColor] = useState(false)

  const colorShow = () => {
    setColor(!color)
  }

  const priceShow = () => {
    setPrice(!price)
  }

  return (
   <section>
    <Container>
      <div className='pt-[124px] pb-[125px]'>
        <h2 className='font-dm text-[49px] font-[700] text-secondary'>Products</h2>
        <Flex className='items-center gap-x-2 cursor-pointer'>
          <span className='font-dm text-[12px] font-[400] text-primary'> Home</span>
          <span className='font-dm text-[12px] font-[400] text-primary'>Products</span>
        </Flex>
      </div> 
      
      <Flex>
        <div className='w-[20%] mr-[40px]'>
          <h2 className='font-dm text-[20px] font-[700] text-secondary'>Shop by Category</h2>
          
          <div className='mr-[21px] mt-[35px] border-b border-[#F0F0F0] pb-[41px]'>
            <span onClick={showProduct}>
              <Catagory text='Electronics & Gadgets' type={show ? "minusIcon" : "plusIcon"}/>
            </span>
            
            {show &&   
              <div className='bg-slate-50 p-4 m-2 border border-[#F0F0F0] cursor-pointer'>
                {
                  products.filter((value, index, array) =>
                    index === array.findIndex((t) => t.category === value.category) 
                  ).map((product, index) => (
                    <Catagory 
                      onClick={()=>handleCategoryClick(product.category)} 
                      className='w-[100%] border border-orange-200 px-4 py-2 mt-2 bg-white rounded-[6px] hover:text-orange-400 hover:bg-orange-100' 
                      key={index} 
                      text={product.category}
                    />
                  ))
                }
              </div>
            }
          </div>

          <div className='mr-[21px] mt-[20px] border-b border-[#F0F0F0] pb-[49px]'>
            <Catagory text='Auto and Parts'/>
          </div>

          <div className='mr-[21px] mt-[20px] border-b border-[#F0F0F0] pb-[49px]'>
            <span onClick={showCloth}>
              <Catagory text='Clothing' type={cloth ? "minusIcon" : "plusIcon"}/>
            </span>
            {cloth && <div className='bg-slate-50 p-4 m-2 border border-[#F0F0F0] cursor-pointer'>

              {
                    products.filter((value, index, array) =>
                      index === array.findIndex((t) => t.category === value.category) 
                    ).map((product, index) => (
                     

                      <Catagory onClick={() => handleCategoryClick(product.category)} key={index}  text={product.category} className='w-[100%] border border-orange-200 px-4 py-2 mt-2 bg-white rounded-[6px] hover:text-orange-400'/>
                    ))
                  }
            
            </div>}
          </div>

          <div className='mr-[21px] mt-[20px] border-b border-[#F0F0F0] pb-[49px]'>
            <Catagory text='Cleaning supplies'/>
          </div>

          <div className='mr-[21px] mt-[20px] border-b border-[#F0F0F0] pb-[49px]'>
            <Catagory text='Pet products'/>
          </div>

          <div className='pt-[35px] pb-[35px] mr-[21px]'>
            <Flex className='items-center justify-between'>
              <h2 className='font-dm text-[20px] font-[700] text-secondary'>Shop by Color</h2>
              <span onClick={colorShow}>
                {color ? <IoMdArrowDropdown className='text-[20px] text-secondary'/> : <IoMdArrowDropup className='text-[20px] text-secondary' />}
              </span>
            </Flex>
            {color &&  <div>
              <div className='pt-[35px] border-b border-[#F0F0F0] pb-[19px]'>
                <Flex className='items-center gap-x-[10px]'>
                  <div className='w-[11px] h-[11px] bg-secondary rounded-full'></div>
                  <span className='text-[16px] font-dm text-primary'>Color 1</span>
                </Flex>
              </div>
              {/* More colors can go here */}
            </div>}
          </div>

          <div className='pt-[35px] pb-[35px] mr-[21px]'>
            <Flex className='items-center justify-between'>
              <h2 className='font-dm text-[20px] font-[700] text-secondary'>Shop by Price</h2>
              <span onClick={priceShow}>
                {price ? <IoMdArrowDropdown className='text-[20px] text-secondary'/> : <IoMdArrowDropup className='text-[20px] text-secondary' />}
              </span>
            </Flex>
            {price &&  <div>
              
              <div className='pt-[35px]'>
               <Flex className='flex-col gap-y-4'>
               {
                 priceRanges.map((items, index) => (
                  <span onClick={()=>handlePriceRangeClick(items)} key={index} className='text-[16px] font-dm font-[400] text-primary border-b border-[#F0F0F0] pb-[19px] cursor-pointer hover:bg-orange-400 hover:text-white hover:p-4 hover:rounded-[6px] hover:duration-300'>
                    {items.label}
                  </span>
                ))

                }
               </Flex>
                
              </div>
              {/* Other price ranges can go here */}
            </div>}
          </div>
        </div>

       

        <div className='w-[75%] '>
           {/* manubar section*/}
        <div className='pb-[60px]' >
        <Flex className=' items-center'>
          <div>
          <Flex className='items-center gap-x[20px]'>
            <span className='w-[36px] h-[36px] cursor-pointer'><BsFillFilterSquareFill /></span>
            <span className='w-[36px] h-[36px] cursor-pointer'><HiAdjustmentsHorizontal /></span>
          </Flex>
          </div>

         <div className='pb-[40px]' >
         <Flex className='items-center gap-x-[14px]'>
            <span className='font-dm text-[16px] font-[400] text-primary ml-[500px]'>Sort by:</span>
            <span><select name="" id="" className='font-dm text-[16px] font-[400] leading-[30px] text-primary py-[10px] pl-[21px] pr-[152px]'>
              <option>Featured</option>
              </select></span>
          </Flex>
         </div>

          <div className='pb-[40px]'>
          <Flex className='items-center gap-x-[14px]'>
            <span className='font-dm text-[16px] font-[400] text-primary ml-[40px]'>Show::</span>
            <span><select value={showCount} onChange={handleShowCountChange} name="" id="" className='font-dm text-[16px] font-[400] leading-[30px] text-primary py-[10px] pl-[21px] pr-[98px]'>
              <option value={36}>36</option>
              <option value={30}>30</option>
              <option value={25}>25</option>
              <option value={20}>20</option>
              <option value={15}>15</option>
              <option value={10}>10</option>
              <option value={5}>5</option>
              </select></span>
          </Flex>
          </div>
        </Flex>
        </div>
          
          {/* Pagination component */}
          <div className=' flex'>
          <Pagination itemsPerPage={showCount} data={filteredProduct}/>
          </div>
        </div>
      </Flex>
    </Container>
   </section>
  );
}

export default Shop;


