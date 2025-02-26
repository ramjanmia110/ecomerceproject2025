import React from 'react'
import { Container } from '../components/Container'
import { IoIosArrowForward } from "react-icons/io";
import Flex from '../components/Flex';
import Button from '../components/Button';

const Login = () => {
  return (
   <section >
    <Container>
    <div className='pl-[157px] pt-[124px] pb-[125px]'>
      <h2 className='font-dm text-[49px] font-[700] text-secondary'>Login</h2>
      <Flex className='items-center gap-x-2 cursor-pointer'>
        <span className='font-dm text-[12px] font-[400] text-primary'> Home</span>
        <IoIosArrowForward className=' text-[12px] font-[400] text-primary' />
        <span className='font-dm text-[12px] font-[400] text-primary'>Login</span>
          
      </Flex>
      </div>

      <div className='pl-[157px] pt-[127px]'>
        <div className=' border-b border-[#F0F0F0] pb-[62px]'>
        <p className='font-dm font-[400] text-[16px] leading-[30px] text-primary w-[644px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
        </div>
        

      </div>

      <div className='pl-[157px] pt-[57px]'>
       <div className=' border-b border-[#F0F0F0] pb-[62px]'>
       <h2 className='font-dm text-[39px] font-[700] text-secondary pb-[42px]'>Returning Customer</h2>
        <div className='w-[50%]'>
          <form action="" >
           <Flex className='justify-between'>
           <div>
              <Flex className='flex-col gap-y-[10px] w-[200%]'>
                <label htmlFor="" className='font-dm font-[700] text-[16px] text-secondary'>Email address</label>
                <input type="email" placeholder='company@domain.com' className='font-dm text-[14px] text-primary border-b border-[#F0F0F0] pb-[16px] outline-none' />
              </Flex>
            </div>

            <div>
              <Flex className='flex-col gap-y-[10px] w-[200%]'>
                <label htmlFor="" className='font-dm font-[700] text-[16px] text-secondary'>Password</label>
                <input type="password" placeholder='Password' className='font-dm text-[14px] text-primary border-b border-[#F0F0F0] pb-[16px] outline-none' />
              </Flex>
            </div>
           </Flex>
          </form>
         <div className='pt-[29px]'>
         <Button text='Login' className='text-center' />
         </div>
        </div>
       </div>
      </div>

      <div className='pl-[157px]  pb-[62px] pt-[57px]'>
      <h2 className='font-dm text-[39px] font-[700] text-secondary pb-[42px]'>New Customer</h2>
      <p className='font-dm font-[400] text-[16px] leading-[30px] text-primary w-[644px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
      <div className='pt-[51px]'>
        <Button text='Continue' className='text-center'/>
      </div>
      </div>
    </Container>
   </section>
  )
}

export default Login