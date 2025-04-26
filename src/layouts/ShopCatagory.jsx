
import React, { useState } from 'react'
import { Container } from '../components/Container'
import Flex from '../components/Flex'
import { FaBarsStaggered } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import { IoPerson } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { RxCross2 } from "react-icons/rx";
import { useSelector } from 'react-redux';

const ShopCatagory = () => {
  const cartData =useSelector(sate=>sate.cardNumber.initialValue)
  const [isCartOpen, setIsCartOpen] =useState(false)

  const cartResult =(()=>{
    setIsCartOpen(!isCartOpen)
  })
  return (
    <div>
        <section className='bg-third py-[25px]'>
           <Container>
           <Flex className='items-center'>
           <div className='w-[30%]'>
            
            <Flex className='items-center gap-x-[4px] justify-center'>
            <FaBarsStaggered className='cursor-pointer'/>
            <p className='text-[14px] font-[400] text-secondary'>Shop by Category</p>
            </Flex>
           </div>
            <div className='w-[40%]'>
                <div className='w-full bg-white relative '>
                    <input className='px-[16px] py-5 border-0 w-full' type="text" placeholder='Search Products' />
                    <IoIosSearch className='w-[16px] text-secondary absolute top-[27px] right-[22px]' />
                </div>
            </div>
            <div className='w-[30%]'>
                <Flex className='justify-center items-center gap-x-10'>
                    
                       
                            <span className='flex gap-x-[5px]'>
                           <Link to='login'> <IoPerson className='w-[15px] text-secondary cursor-pointer' /></Link>
                            <IoMdArrowDropdown className='w-[15px] text-secondary cursor-pointer' />
                            </span>
                            <FaShoppingCart onClick={cartResult} className='w-[15px] text-secondary cursor-pointer relative group' />
                </Flex>

               {

                 isCartOpen &&
                 <div className={`bg-blue-100 w-[600px] h-[690px] ml-10 mt-10 border-t-[10px] border-cyan-500 shadow-indigo-500/40 rounded-[16px] border-b-[5px] border-cyan-400 absolute top-[135px] right-0 z-30 ease-in duration-300  ${isCartOpen ? 'right-[20px]' : 'right-[-100%]'}`}>
                 <div className='flex items-center'>
                 <RxCross2 onClick={cartResult} className='text-[24px] ml-4 text-orange-500 cursor-pointer'/>
                 <h2 className='mx-auto text-[24px] my-2 border-b-2 border-blue-400 rounded-[16px] p-1 text-orange-600 font-[600] uppercase font-sans'>Cart Result</h2>
                 </div>
                 <ul className='flex justify-evenly border-b-4 border-orange-400 p-4  text-[20px] rounded-b-[16px] bg-slate-50 text-orange-500 font-[700] font-dm'>
                   <li>Image</li>
                   <li>Product Name</li>
                   <li>price</li>
                   <li>Quantity</li>
                   <li>Sub-Total</li>
                 </ul>

              <div className='overflow-auto h-[500px]'>
              {
                  cartData.map((item, index) => (
                    
                    <ul key={index} className='flex justify-evenly items-center border-b-2 border-orange-300 p-4 '>
                      <li className='w-[80px] h-[80px] flex justify-center items-center'>
                        {item.image ? (
                          <img src={item.image} alt={item.title} className='w-[50px] h-[50px] object-cover rounded' />
                        ) : (
                          <p>No Image</p>
                        )}
                       
                      </li>
                      <li className='text-center w-[150px]'>{item.title}</li>
                      <li className='text-center w-[80px]'>{item.price}</li>
                      <li className='text-center w-[80px]'>{item.quantity}</li>
                      <li className='text-center w-[80px]'>{item.price *item.quantity}</li>
                      
                    </ul>
                  ))
                 }
              </div>

                </div>
              
                 
               }

            </div>
           </Flex>
           </Container>
        </section>
    </div>
  )
}

export default ShopCatagory