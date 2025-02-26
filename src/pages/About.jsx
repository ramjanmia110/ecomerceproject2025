
import { Container } from '../components/Container'
import React from 'react'
import Flex from '../components/Flex'
import { IoIosArrowForward } from "react-icons/io";
import Image from '../components/Image';
import imageOne from '../assets/Image_1.png'
import Button from '../components/Button';
import imagetwo from '../assets/productone.jpg'

const About = () => {
  return (
    <section>
      <Container>
      <div className='pl-[157px] pt-[124px] pb-[136px]'>
      <h2 className='font-dm text-[49px] font-[700] text-secondary'>About</h2>
      <Flex className='items-center gap-x-2 cursor-pointer'>
        <span className='font-dm text-[12px] font-[400] text-primary'> Home</span>
        <IoIosArrowForward className=' text-[12px] font-[400] text-primary' />
        <span className='font-dm text-[12px] font-[400] text-primary'>About</span>
          
      </Flex>
      </div>


      <div className='mb-[128px]'>
        <Flex className='items-center justify-between'>
          <div className='w-[780px] h-[776px] relative'>
          <Image src={imagetwo} className='w-full'/>
          <Button className='absolute  bottom-[50px] left-[36%] text-center' text='Our Brands'/>
          </div>

          <div className='w-[780px] h-[776px] relative'>
          <Image src={imageOne} className='w-full'/>
          <Button className='absolute  bottom-[23px] left-[32%] text-center' text='Our Stores'/>
          </div>
      </Flex>
      </div>

      <div className='mb-[118px]'>
        <p className='font-dm text-[39px] leading-[52px] font-[400] text-secondary'>Orebi is one of the world’s leading ecommerce brands and is internationally recognized for celebrating the essence of classic Worldwide cool looking style.</p>
      </div>

      <div className='mb-[131px]'>
        <Flex className='justify-between'>
          <div className='w-[506px]'>
            <h2 className='font-dm text-[25px] font-[700] text-secondary leading-[36px] mb-[11px] '>Our Vision</h2>
            <p className='font-dm text-[16px] font-[400] text-primary leading-[30px] '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an   printer took a galley of type and scrambled it to make a type specimen book.</p>
          </div>

          <div className='w-[506px]'>
            <h2 className='font-dm text-[25px] font-[700] text-secondary leading-[36px] mb-[11px] '>Our Story</h2>
            <p className='font-dm text-[16px] font-[400] text-primary leading-[30px] '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic.</p>
          </div>

          <div className='w-[506px]'>
            <h2 className='font-dm text-[25px] font-[700] text-secondary leading-[36px] mb-[11px] '>Our Brands</h2>
            <p className='font-dm text-[16px] font-[400] text-primary leading-[30px] '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
          </div>
        </Flex>
      </div>
      </Container>
    </section>
  )
}

export default About