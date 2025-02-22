import React from 'react'
import Flex from './Flex'
import { FaHeart } from "react-icons/fa6";
import { LuRefreshCcw } from "react-icons/lu";
import { IoCart } from "react-icons/io5";


const ProductList = ({src,text,price,color}) => {
  return (
    <div className='w-[370px] h-[465px] relative group'>
       <div>
       <p className='bg-secondary text-white px-[32px] py-[9px] absolute top-0 left-0 font-dm text-[14px] font-[700] ml-[20px] mt-[20px]'>New</p>
     </div>
    <img src={src} alt="" />
     <div>
        <div className='w-[370px] h-[200px] bg-white absolute -bottom-[15%] left-0 group-hover:bottom-0 duration-300 opacity-0 group-hover:opacity-100'>
          
            <Flex className='flex-col items-end justify-end pt-[30px] pr-[30px]'>
                <Flex className='items-center gap-x-[15px] pb-[21px]'>
                    <p className='font-dm text-[16px] font-[400] text-primary'>Add to Wish List</p>
                    <FaHeart className='cursor-pointer' />
                </Flex>
                <Flex className='items-center gap-x-[15px] pb-[21px]'>
                    <p className='font-dm text-[16px] font-[400] text-primary'>Compare</p>
                    <LuRefreshCcw className='cursor-pointer' />
                </Flex>
                <Flex className='items-center gap-x-[15px]'>
                    <p className='font-dm text-[16px] font-[400] text-secondary'>Add to Cart</p>
                    <IoCart className='cursor-pointer' />
                </Flex>
            </Flex>
        </div>
        <Flex className='items-center justify-between'>
            <h4 className='font-dm font-[700] text-[20px] text-secondary'>{text}</h4>
            <p className='font-dm font-[400] text-[16px] text-primary'>{price}</p>
        </Flex>
        <span className='font-dm font-[400] text-[16px] text-primary'>{color}</span>
     </div>
    </div>
  )
}

export default ProductList