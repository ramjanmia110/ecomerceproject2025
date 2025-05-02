import React from 'react'
import { Container } from '../components/Container'
import CommonHeading from '../components/CommonHeading'
import Flex from '../components/Flex'
import { IoIosArrowForward } from 'react-icons/io'
import { RxCross2 } from 'react-icons/rx'
import { HiMinusSm } from 'react-icons/hi'
import { LuPlus } from 'react-icons/lu'
import Button from '../components/Button'

const Cart = () => {
  return (
   <section className='mb-[300px]'>
    <Container>
      <div className='mt-[64px] ml-[63px]'>
      <CommonHeading text='Cart'/>
      <Flex className='items-center gap-x-1'>
      <span className='text-primary text-[12px] font-dm cursor-pointer'> Home</span>
      <IoIosArrowForward className='text-primary text-[12px] font-dm cursor-pointer'/>
      <span className='text-primary text-[12px] font-dm cursor-pointer'>Cart</span>
      </Flex>
      </div>

      <div className='mt-[80px]'>
        <ul className='flex justify-evenly items-center bg-[#F5F5F3] py-[28px]'>
          <li className='text-secondary text-[16px] font-dm'>Action</li>
          <li className='text-secondary text-[16px] font-dm'>Image</li>
          <li className='text-secondary text-[16px] font-dm'>Product</li>
          <li className='text-secondary text-[16px] font-dm'>Price</li>
          <li className='text-secondary text-[16px] font-dm'>Quantity</li>
          <li className='text-secondary text-[16px] font-dm'>Sub-Total</li>
        </ul>
      </div>
      <div>
        <ul className='bg-[FFFFFF] flex justify-evenly items-center  border border-[#F5F5F3] p-4'>
          <li className='text-secondary text-[16px] font-dm cursor-pointer'><RxCross2 /></li>
          <li className='ml-[35px]'>Image</li>
          <li className='text-secondary text-[16px] font-dm ml-[20px]'>product</li>
          <li className='text-secondary text-[16px] font-dm'>$44.00</li>
          <li className='flex items-center justify-center gap-x-4 border border-[#F0F0F0] w-[100px] h-[36px]'>
          <HiMinusSm className='text-[#767676] text-[16px] cursor-pointer' />
          <span className='text-[#767676] text-[16px]' >2</span>
          <LuPlus className='text-[#767676] text-[16px] cursor-pointer'  />
          </li>
          <li className='text-secondary text-[16px] font-dm cursor-pointer'>$140.50</li>
        </ul>
      </div>

      <div>
        <h3 className='text-[16px] font-dm text-secondary capitalize text-right my-[24px]'>Cart totals</h3>
 <div className='relative'>
<table className='w-[644px] border border-[#F0F0F0] absolute top-0 right-0'>
  <tbody>
    <tr>
      <td className='border border-[#F0F0F0] p-2 text-center text-secondary'>Subtotal</td>
      <td className='border border-[#F0F0F0] text-center text-primary'>389.99 $</td>
    </tr>

    <tr>
      <td className='border border-[#F0F0F0] p-2 text-center text-secondary'>Total</td>
      <td className='border border-[#F0F0F0] text-center text-primary'>389.99 $</td>
    </tr>
  </tbody>
</table>

<Button text='Proceed to Checkout' className='px-[10px] text-center absolute top-[111px] right-0'/>
 </div>

 
      </div>
    </Container>
   </section>
  )
}

export default Cart