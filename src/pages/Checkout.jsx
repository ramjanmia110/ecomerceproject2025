

import { Container } from '../components/Container'
import React from 'react'
import Flex from '../components/Flex'
import { IoIosArrowForward } from "react-icons/io";
import CommonHeading from '../components/CommonHeading';
import Button from '../components/Button';


const Checkout = () => {
  return (
    <section className='py-[124px] pl-[157px]'>
      <div>
     <Container>
      <div>
      
        <CommonHeading text='Checkout' />
        <Flex className='items-center gap-x-2 pt-[11px]'>
          <span className='font-dm text-[12px] font-[400] text-primary cursor-pointer'>Home</span>
          <IoIosArrowForward className=' text-[12px] font-[400] text-primary' />
          <span className='font-dm text-[12px] font-[400] text-primary cursor-pointer'>Checkout</span>
        </Flex>
      </div>

      <div className='pt-[127px] pb-[119px]'>
        <p className='font-dm font-[400] text-[16px] text-primary'>Have a coupon? <span className='hover:text-secondary hover:duration-100 cursor-pointer'>Click here to enter your code</span></p>
      </div>

      <div>
       <CommonHeading text='Billing Details' />
        <form action="" className='pt-[42px]'>
         <Flex className='gap-x-[40px] pb-[24px]'>
         <div className='w-[507px]'>
           <Flex className='flex-col gap-y-[10px]'>
           <label htmlFor="" className='font-dm font-[700] text-[16px] text-secondary'>First Name *</label>
           <input type="text" placeholder='First Name' className='font-dm text-primary text-[14px] font-[400] border-b border-[#F0F0F0] pb-[16px] outline-none' />
           </Flex>
          </div>


          <div className='w-[507px]'>
           <Flex className='flex-col gap-y-[10px]'>
           <label htmlFor="" className='font-dm font-[700] text-[16px] text-secondary'>Last Name *</label>
           <input type="text" placeholder='Last Name' className='font-dm text-primary text-[14px] font-[400] border-b border-[#F0F0F0] pb-[16px] outline-none' />
           </Flex>
          </div>
         </Flex>



         <Flex className='gap-x-[40px] pb-[24px]'>
         <div className='w-[1054px]'>
           <Flex className='flex-col gap-y-[10px]'>
           <label htmlFor="" className='font-dm font-[700] text-[16px] text-secondary'>Companye Name (optional)</label>
           <input type="text" placeholder='Company Name' className='font-dm text-primary text-[14px] font-[400] border-b border-[#F0F0F0] pb-[16px] outline-none' />
           </Flex>
          </div>

      </Flex>


      <Flex className='gap-x-[40px] pb-[24px]'>
         <div className='w-[1054px]'>
           <Flex className='flex-col gap-y-[10px]'>
           <label htmlFor="" className='font-dm font-[700] text-[16px] text-secondary'>Country *</label>
           
           <select className='font-dm text-primary text-[14px] font-[400] border-b border-[#F0F0F0] pb-[16px] outline-none bg-white cursor-pointer'>
            <option value="">Please select</option>
            <option value="">Bangladesh</option>
            <option value="">India</option>
            <option value="">Pakistan</option>
            <option value="">Nepal</option>
            <option value="">Sri Lanka</option>
            <option value="">China</option>
            <option value="">Japan</option>
            <option value="">United States</option>
            <option value="">United Kingdom</option>
            <option value="">Australia</option>

           </select>
           </Flex>
          </div>

      </Flex>


      <Flex className='gap-x-[40px] pb-[24px]'>
         <div className='w-[1054px]'>
           <Flex className='flex-col gap-y-[10px]'>
           <label htmlFor="" className='font-dm font-[700] text-[16px] text-secondary'>Street Address *</label>
           <input type="text" placeholder='House number and street name' className='font-dm text-primary text-[14px] font-[400] border-b border-[#F0F0F0] pb-[16px] outline-none' />
           <input type="text" placeholder='Apartment, suite, unit etc. (optional)' className='font-dm text-primary text-[14px] font-[400] border-b border-[#F0F0F0] pb-[16px] outline-none' />
           </Flex>
          </div>

      </Flex>


      <Flex className='gap-x-[40px] pb-[24px]'>
         <div className='w-[1054px]'>
           <Flex className='flex-col gap-y-[10px]'>
           <label htmlFor="" className='font-dm font-[700] text-[16px] text-secondary'>Town/City *</label>
           <input type="text" placeholder='Town/City' className='font-dm text-primary text-[14px] font-[400] border-b border-[#F0F0F0] pb-[16px] outline-none' />
           
           </Flex>
          </div>

      </Flex>


      <Flex className='gap-x-[40px] pb-[24px]'>
         <div className='w-[1054px]'>
           <Flex className='flex-col gap-y-[10px]'>
           <label htmlFor="" className='font-dm font-[700] text-[16px] text-secondary'>County (optional)</label>
           <input type="text" placeholder='County' className='font-dm text-primary text-[14px] font-[400] border-b border-[#F0F0F0] pb-[16px] outline-none' />
           
           </Flex>
          </div>

      </Flex>


      <Flex className='gap-x-[40px] pb-[24px]'>
         <div className='w-[1054px]'>
           <Flex className='flex-col gap-y-[10px]'>
           <label htmlFor="" className='font-dm font-[700] text-[16px] text-secondary'>Post Code *</label>
           <input type="text" placeholder='Post Code' className='font-dm text-primary text-[14px] font-[400] border-b border-[#F0F0F0] pb-[16px] outline-none' />
           
           </Flex>
          </div>

      </Flex>


      <Flex className='gap-x-[40px] pb-[24px]'>
         <div className='w-[1054px]'>
           <Flex className='flex-col gap-y-[10px]'>
           <label htmlFor="" className='font-dm font-[700] text-[16px] text-secondary'>Phone *</label>
           <input type="number" placeholder='Phone' className='font-dm text-primary text-[14px] font-[400] border-b border-[#F0F0F0] pb-[16px] outline-none' />
           
           </Flex>
          </div>

      </Flex>

      <Flex className='gap-x-[40px] pb-[24px]'>
         <div className='w-[1054px]'>
           <Flex className='flex-col gap-y-[10px]'>
           <label htmlFor="" className='font-dm font-[700] text-[16px] text-secondary'>Email Address *</label>
           <input type="email" placeholder='Email' className='font-dm text-primary text-[14px] font-[400] border-b border-[#F0F0F0] pb-[16px] outline-none' />
           
           </Flex>
          </div>

      </Flex>
      
        </form>


        <div className='pt-[120px]'>
         <Flex className='flex-col gap-y-[42px]'>
         <CommonHeading text='Additional Information'/>
          <div className='border-b border-[#F0F0F0] pb-[114px] w-[1054px]'>
            <p className='font-dm font-[700] text-[16px] text-secondary pb-[10px]'>Other Notes (optional)</p>
            <span className='font-dm font-[400] text-[14px] text-primary'>Notes about your order, e.g. special notes for delivery.</span>
          </div>
         </Flex>
        </div>


        <div className='pt-[129px]'>
          <CommonHeading text='Your Order'/>

          <div className='mt-[48px]'>
          <table border="1" className='border border-[#F0F0F0] w-[644px] '>
    <tr className='border border-[#F0F0F0] '>
        <th className='border border-[#F0F0F0] pt-[17px] pl-[20px] pb-[14px] pr-[237px] font-dm text-[16px] font-[700] text-secondary'>Product</th>
        <th className='border border-[#F0F0F0] pt-[17px] pl-[237px] pb-[14px] pr-[20px] font-dm text-[16px] font-[700] text-secondary'>Total</th>
    </tr>
    <tr className='border border-[#F0F0F0]'>
        <td className='border border-[#F0F0F0] pt-[17px] pl-[20px] pb-[14px]  font-dm text-[16px] font-[700] text-secondary'>Product name x 1</td>
        <td className='border border-[#F0F0F0] pt-[17px] pl-[237px] pb-[14px] pr-[16px] font-dm text-[16px] font-[700] text-primary'>389.99 $</td>
    </tr>
    <tr  className='border border-[#F0F0F0]'>
        <td className='border border-[#F0F0F0] pt-[17px] pl-[20px] pb-[14px]  font-dm text-[16px] font-[700] text-secondary'>Subtotal</td>
        <td className='border border-[#F0F0F0] pt-[17px] pl-[237px] pb-[14px] pr-[16px] font-dm text-[16px] font-[700] text-primary'>389.99 $</td>
    </tr>
    <tr  className='border border-[#F0F0F0]'>
        <td className='border border-[#F0F0F0] pt-[17px] pl-[20px] pb-[14px]  font-dm text-[16px] font-[700] text-secondary'>Total</td>
        <td className='border border-[#F0F0F0] pt-[17px] pl-[237px] pb-[14px] pr-[16px] font-dm text-[16px] font-[700] text-primary'>389.99 $</td>
    </tr>
   
</table>
          </div>
        </div>

     <form action="">
     <div className='mt-[60px] border border-[#F0F0F0] pt-[24px] pl-[34px] w-[1053px]'>
          <Flex className='flex-col gap-y-[14px]'>
           <Flex className='items-center gap-x-1'> <input type="radio" name="option" />
           <label htmlFor="" className='font-dm font-[700] text-[16px] text-secondary'>Bank</label>

           </Flex>
           <div className='bg-[#F7F8F9] pt-[29px] pl-[26px] pb-[17px] pr-[350px] w-[985px] '>
           <p className='text-primary font-dm font-[400] text-[16px] '>Pay via Bank; you can pay with your credit card if you don’t have a Bank account.</p>
           </div>
          </Flex>



          <Flex className='flex-col gap-y-[14px] pt-[26px]'>
           <Flex className='items-center gap-x-1'> <input type="radio" name="option" />
           <label htmlFor="" className='font-dm font-[700] text-[16px] text-primary'>Bank 2</label>

           </Flex>
           <div className='bg-[#F7F8F9] pt-[29px] pl-[26px] pb-[17px] pr-[14px] w-[985px] '>
           <p className='text-primary font-dm font-[400] text-[16px] '>Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our <span className='hover:text-secondary cursor-pointer'>privacy policy.</span></p>
           </div>
          </Flex>

          <Button text='Proceed to Bank' className='mb-[30px] mt-[24px]'/>
        </div>
     </form>

       
      </div>
     </Container>
    </div>
    </section>
  )
}

export default Checkout


