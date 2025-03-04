import React, { useState } from 'react'
import { Container } from '../components/Container'
import Flex from '../components/Flex'
import Catagory from '../components/Catagory'
import { IoMdArrowDropup } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";

const Shop = () => {
  const [show,setShow] =useState(false)
  const [cloth,setCloth] =useState(false)

  const showCloth =()=>{
    setCloth(!cloth)
  }
  const showProduct =()=>{
   setShow(!show)
  }

  const [color,setColor] =useState(false)

  const colorShow =()=>{
    setColor(!color)
  }
  return (
   <section>
    <Container>
    <div className=' pt-[124px] pb-[125px]'>
      <h2 className='font-dm text-[49px] font-[700] text-secondary'>Products</h2>
      <Flex className='items-center gap-x-2 cursor-pointer'>
        <span className='font-dm text-[12px] font-[400] text-primary'> Home</span>
     
        
        
        <span className='font-dm text-[12px] font-[400] text-primary'>Products</span>
          
      </Flex>
      </div> 
      <Flex>
      <div className='w-[30%]'>
        <h2 className='font-dm text-[20px] font-[700] text-secondary'>Shop by Category</h2>
        <div onClick={showProduct} className=' mr-[21px] mt-[35px] border-b border-[#F0F0F0] pb-[41px]'>
          <Catagory text='Phone accessories' type={show ? "minusIcon":"plusIcon"}/>
          {
            show &&   <div className='bg-green-100 p-4 m-2'>
            <Catagory text='iPhone 16 Plus 256GB'/>
            <Catagory text='iPhone 16 Plus 128GB'/>
            <Catagory text='iPhone 16 Pro Max 256GB'/>
            <Catagory text='iPhone 16 Pro Max 128GB'/>
            </div>
          }
       
        </div>

        <div className='mr-[21px] mt-[20px] border-b border-[#F0F0F0] pb-[49px]'>
        <Catagory text='Auto and Parts'/>
        </div>

        <div onClick={showCloth} className='mr-[21px] mt-[20px] border-b border-[#F0F0F0] pb-[49px]'>
        <Catagory text='Clothing' type={cloth ? "minusIcon":"plusIcon"}/>
        {cloth &&   <div className='bg-green-100 p-4 m-4 '>
        <Catagory text=' Sailor'/>
        <Catagory text=' Aarong'/>
        <Catagory text=' Anjan’s'/>
        <Catagory text=' Kay Kraft'/>
        </div> }
      
        </div>

        <div className='mr-[21px] mt-[20px] border-b border-[#F0F0F0] pb-[49px]'>
        <Catagory text='Cleaning supplies'/>
        </div>

        <div className='mr-[21px] mt-[20px] border-b border-[#F0F0F0] pb-[49px]'>
        <Catagory text='Pet products'/>
        </div>

        <div onClick={colorShow} className='pt-[35px] pb-[35px] mr-[21px]'>
        <Flex className='items-center justify-between'>
        <h2 className='font-dm text-[20px] font-[700] text-secondary'>Shop by Color</h2>
        
        { color?<IoMdArrowDropdown className='text-[20px] text-secondary'   /> 
       :<IoMdArrowDropup className='text-[20px] text-secondary' />
}
       
        </Flex>
            {color &&  <div>
       <div className='pt-[35px] border-b border-[#F0F0F0] pb-[19px]'>
          <Flex className='items-center gap-x-[10px]'>
          <div className='w-[11px] h-[11px] bg-secondary rounded-full'></div>
          <span className='text-[16px] font-dm text-primary'>Color 1</span>
          </Flex>
        </div>

        <div className='pt-[35px] border-b border-[#F0F0F0] pb-[19px]'>
          <Flex className='items-center gap-x-[10px]'>
          <div className='w-[11px] h-[11px] bg-[#FF8686] rounded-full'></div>
          <span className='text-[16px] font-dm text-primary'>Color 2</span>
          </Flex>
        </div>

        <div className='pt-[35px] border-b border-[#F0F0F0] pb-[19px]'>
          <Flex className='items-center gap-x-[10px]'>
          <div className='w-[11px] h-[11px] bg-[#7ED321] rounded-full'></div>
          <span className='text-[16px] font-dm text-text'>Color 3</span>
          </Flex>
        </div>

        <div className='pt-[35px] border-b border-[#F0F0F0] pb-[19px]'>
          <Flex className='items-center gap-x-[10px]'>
          <div className='w-[11px] h-[11px] bg-[#B6B6B6] rounded-full'></div>
          <span className='text-[16px] font-dm text-primary'>Color 4</span>
          </Flex>
        </div>

        <div className='pt-[35px] border-b border-[#F0F0F0] pb-[19px]'>
          <Flex className='items-center gap-x-[10px]'>
          <div className='w-[11px] h-[11px] bg-[#FF8686] rounded-full'></div>
          <span className='text-[16px] font-dm text-primary'>Color 5</span>
          </Flex>
        </div>
       </div> }
      
      </div>
      </div>

     
      <div className='w-[70%] bg-black'>dddd</div>
      </Flex>
    </Container>
   </section>
  )
}

export default Shop