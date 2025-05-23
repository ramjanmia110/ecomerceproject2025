
import React, { useEffect, useState } from 'react'
import { Container } from '../components/Container'
import Flex from '../components/Flex'
import { FaBarsStaggered, FaMinus, FaPlus } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import { IoPerson } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from 'react-redux';
import { decrement, deleteProduct, increment } from '../slice/addToCard';

const ShopCatagory = () => {
  const cartData =useSelector(sate=>sate.cardNumber.initialValue)
  const dispitch =useDispatch()
  const [isCartOpen, setIsCartOpen] =useState(false)

  const cartResult =(()=>{
    setIsCartOpen(!isCartOpen)
    
  })

  const dataIncrement=((item)=>{
    dispitch(increment(item))
  })

  const dataDecrement=((item)=>{
    dispitch(decrement(item))
  })

  const totalItems = cartData.reduce((acc, item) => acc + item.quantity, 0);
  const deleteItem =((item)=>{
    dispitch(deleteProduct(item))
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
                            {/* <FaShoppingCart onClick={cartResult} className='w-[15px] text-secondary cursor-pointer relative group' /> */}
                            <div className="relative">
  <FaShoppingCart onClick={cartResult} className='w-[15px] text-secondary cursor-pointer relative group' />
  {
    totalItems > 0 && (
      <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
        {totalItems}
      </span>
    )
  }
</div>
                </Flex>

               {

                 isCartOpen &&
                 <div className={`bg-[#f7f8f9] w-[600px] h-[480px] ml-10 mt-10 border-t-[10px] border-cyan-500 shadow-indigo-500/40 rounded-[16px] border-b-[5px] border-cyan-400 absolute top-[157px] right-0 z-30 ease-in duration-300  ${isCartOpen ? 'right-[70px]' : 'right-[-100%]'}`}>
                 <div className='flex items-center'>
                 <RxCross2 onClick={cartResult} className='text-[24px] ml-4 text-orange-500 cursor-pointer'/>
                 <h2 className='mx-auto text-[24px] my-2 border-b-2 border-blue-400 rounded-[16px] p-1 text-orange-600 font-[600] uppercase font-sans'>Cart Result</h2>
                 </div>
                 <ul className='flex justify-evenly border-b-4 border-orange-400 p-4  text-[20px] rounded-b-[16px] bg-slate-50 text-orange-500 font-[700] font-dm'>
                   <li>Action</li>
                   <li>Product Name</li>
                   <li>price</li>
                   <li>Quantity</li>
                   <li>Sub-Total</li>
                 </ul>

              <div className='flex flex-col items-center overflow-auto h-[320px]'>
              {
                 cartData.length>0 ? cartData.map((item, index) => (
                    
                  <ul key={index} className='flex justify-evenly gap-x-3 items-center border-b-2 border-orange-300 p-4 '>
                     <li>
                    <button  className="relative w-4 h-4 group text-[10px]" onClick={()=>deleteItem(item)}>
                    <span className="absolute top-1/2 left-0 w-full h-[2px] bg-orange-500 group-hover:bg-red-500 rotate-45 transform origin-center transition-all duration-300"></span>
                    <span className="absolute top-1/2 left-0 w-full h-[2px] bg-orange-500 group-hover:bg-red-500 -rotate-45 transform origin-center transition-all duration-300"></span>
                   </button>
                    </li>
                    {/* <li className='w-[80px] h-[80px] flex justify-center items-center'>
                      {item.image ? (
                        <img src={item.image} alt={item.title} className='w-[50px] h-[50px] object-cover rounded' />
                      ) : (
                        <p>No Image</p>
                      )}
                     
                    </li> */}
                   
                    <li className='text-center w-[150px] font-dm text-blue-600'>{item.title}</li>
                    <li className='text-center w-[80px] font-dm text-[17px] text-orange-600'>{item.price}</li>
                  
                   <div className='flex items-center justify-center border border-orange-400 rounded-[6px] bg-white p-2 w-[16%]'>
                   <FaMinus onClick={()=>dataDecrement(item)} className='text-[20px] text-orange-400 cursor-pointer' />
                   <li className='text-center w-[80px] text-orange-500 text-[18px] font-[700]'>{item.quantity}</li>
                   <FaPlus onClick={()=>dataIncrement(item)}  className='text-[18px] text-orange-400 cursor-pointer' />    
                   </div>
                  
                
                   
                    <li className='text-center w-[80px] font-dm text-[18px] text-orange-600'>
                    ${(parseFloat(item.price?.toString().replace(/[^\d.]/g, '')) * Number(item.quantity)).toFixed(2)}
                    </li>
                             
                   
                    
                  </ul>
                )) :<div className='mt-[80px]'><h1 className='text-[30px] text-center font-mono text-orange-500 mt-2'>Product Emty</h1><span className='text-[16px] font-dm text-red-600'>Please Order Any Type Of Product</span></div>
               
                 }
                 {
                  cartData.length > 0 && 
                  <h1 className='font-dm text-[24px] inline-block border border-orange-500 mt-4 ml-[370px] px-4 py-1 rounded-[6px] text-orange-600'>Total : ${total}</h1>
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