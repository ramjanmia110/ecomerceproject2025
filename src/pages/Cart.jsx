import React, { useEffect, useState } from 'react'
import { Container } from '../components/Container'
import CommonHeading from '../components/CommonHeading'
import Flex from '../components/Flex'
import { IoIosArrowForward } from 'react-icons/io'
import { RxCross2 } from 'react-icons/rx'
import { HiMinusSm } from 'react-icons/hi'
import { LuPlus } from 'react-icons/lu'
import Button from '../components/Button'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, deleteProduct, increment } from '../slice/addToCard'

const Cart = () => {
const dispitch =useDispatch()
const cartData = useSelector(state => state.cardNumber.initialValue);

  const dataDecrement=((item)=>{
    dispitch(decrement(item))
  })

   const dataIncrement=((item)=>{
      dispitch(increment(item))
    })


    const [total,setTotal] =useState(0)
    
      useEffect(() => {
        let total = 0;
        cartData.forEach((item) => {
          const price = parseFloat(item.price?.toString().replace(/[^\d.]/g, '')) || 0;
          const quantity = Number(item.quantity) || 0;
          total += price * quantity;
        });
      
        
        setTotal(total.toFixed(2));
      }, [cartData]);
  
const deleteItem =((item)=>{
    dispitch(deleteProduct(item))
  })

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
      <ul className="grid grid-cols-6 items-center bg-[#F5F5F3] py-[28px] text-center">
  <li className="text-secondary text-[16px] font-dm">Action</li>
  <li className="text-secondary text-[16px] font-dm">Image</li>
  <li className="text-secondary text-[16px] font-dm">Product</li>
  <li className="text-secondary text-[16px] font-dm">Price</li>
  <li className="text-secondary text-[16px] font-dm">Quantity</li>
  <li className="text-secondary text-[16px] font-dm">Sub-Total</li>
</ul>
      </div>
      <div>
      {
        cartData.map((item,index)=>(
          <ul
          key={index}
          className="bg-white grid grid-cols-6 items-center border border-[#F5F5F3] p-4 gap-4"
        >
          <li className="text-secondary text-[16px] font-dm cursor-pointer text-center ml-[100px]">
            <RxCross2 onClick={()=>deleteItem(item)}/>
          </li>
          <li className="text-secondary text-[16px] font-dm text-center ml-[90px]">
          <img src={item.image} alt={item.title} className='w-[50px] h-[50px] object-cover rounded' />
          </li>
          <li className="text-secondary text-[16px] font-dm text-center">{item.title}</li>
          <li className="text-secondary text-[16px] font-dm text-center">{item.price}</li>
          <li className="flex items-center justify-center gap-x-4 border border-[#F0F0F0] w-[100px] h-[36px] mx-auto">
            <HiMinusSm onClick={()=>dataDecrement(item)} className="text-[#767676] text-[16px] cursor-pointer" />
            <span className="text-[#767676] text-[16px]">{item.quantity}</span>
            <LuPlus onClick={()=>dataIncrement(item)} className="text-[#767676] text-[16px] cursor-pointer" />
          </li>
          <li className="text-secondary text-[16px] font-dm text-center">
          ${(parseFloat(item.price?.toString().replace(/[^\d.]/g, '')) * Number(item.quantity)).toFixed(2)}
          </li>
          
        </ul>
        ))

      
      }
      </div>

      <div>
        <h3 className='text-[16px] font-dm text-secondary capitalize text-right my-[24px]'>Cart totals</h3>
 <div className='relative'>
<table className='w-[644px] border border-[#F0F0F0] absolute top-0 right-0'>
<tbody>
  <tr>
    <td className="border border-[#F0F0F0] p-2 text-center text-secondary font-dm">Subtotal</td>
    <td className="border border-[#F0F0F0] text-center text-primary font-dm">
      ${total}
    </td>
  </tr>
  <tr>
    <td className="border border-[#F0F0F0] p-2 text-center text-secondary font-dm">Total</td>
    <td className="border border-[#F0F0F0] text-center text-primary font-dm">
      ${total}
    </td>
  </tr>
</tbody>
</table>

<Button text='Proceed to Checkout' className='px-[8px] text-center absolute top-[111px] right-0'/>
 </div>

 
      </div>
    </Container>
   </section>
  )
}

export default Cart