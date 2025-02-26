
import React from 'react'
import { Container } from '../components/Container'
import { IoIosArrowForward } from "react-icons/io";
import Flex from '../components/Flex';
import Button from '../components/Button';
import Image from '../components/Image';
import mapImage from '../assets/Map.png'

const Contact = () => {
  return (
   <section>
    <Container>
    <div className='pl-[157px] pt-[124px] pb-[125px]'>
      <h2 className='font-dm text-[49px] font-[700] text-secondary'>Contacts</h2>
      <Flex className='items-center gap-x-2 cursor-pointer'>
        <span className='font-dm text-[12px] font-[400] text-primary'> Home</span>
        <IoIosArrowForward className=' text-[12px] font-[400] text-primary' />
        <span className='font-dm text-[12px] font-[400] text-primary'>Contacts</span>
          
      </Flex>
      </div>

      <div className='pl-[157px] pb-[30px]'>
        <h2 className='font-dm font-[700] text-[39px] text-secondary'>Fill up a Form</h2>
        <div className='pt-[42px] '>
          <form action="">
            <div className='w-1/2 pb-[23px]'>
              <Flex className='flex-col'>
              <label htmlFor="" className='text-[16px] font-dm font-[700] text-secondary pb-[10px]'>Name</label>
              <input type="text" placeholder='Your name here' className='text-[14px] font-dm font-[400] text-primary border-b border-[#F0F0F0] pb-[16px] outline-none' />
              </Flex>
            </div>


            <div className='w-1/2 pb-[23px]'>
              <Flex className='flex-col'>
              <label htmlFor="" className='text-[16px] font-dm font-[700] text-secondary pb-[10px]'>Email</label>
              <input type="email" placeholder='Your email here' className='text-[14px] font-dm font-[400] text-primary border-b border-[#F0F0F0] pb-[16px] outline-none' />
              </Flex>
            </div>

            <div className='w-1/2 pb-[23px]'>
              <Flex className='flex-col'>
              <label htmlFor="" className='text-[16px] font-dm font-[700] text-secondary pb-[10px]'>Message</label>
             <textarea className=' w-[780px] h-[138px] resize-none border-b border-[#F0F0F0] outline-none font-dm font-[400] text-[14px] text-primary' placeholder='Your message here'></textarea>
              </Flex>
            </div>
          </form>
        </div>
      </div>

      <div className='pl-[157px] pb-[140px]'>
        <Button text='Post' className='text-center'/>
      </div>

      <div className='pl-[157px] pb-[140px] w-[1600px] h-[572px]'>
        <Image src={mapImage} className='w-full'/>
      </div>
    </Container>
   </section>
  )
}

export default Contact