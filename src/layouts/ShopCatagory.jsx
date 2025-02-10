
import React from 'react'
import { Container } from '../components/Container'
import Flex from '../components/Flex'
import { FaBarsStaggered } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import { IoPerson } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";

const ShopCatagory = () => {
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
                            <IoPerson className='w-[15px] text-secondary cursor-pointer' />
                            <IoMdArrowDropdown className='w-[15px] text-secondary cursor-pointer' />
                            </span>
                            <FaShoppingCart className='w-[15px] text-secondary cursor-pointer' />
                </Flex>
            </div>
           </Flex>
           </Container>
        </section>
    </div>
  )
}

export default ShopCatagory