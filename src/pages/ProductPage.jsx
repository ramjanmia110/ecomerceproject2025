import React from 'react'
import { Container } from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import imageOne from '../assets/Image_1.png'
import imagtwo2 from '../assets/image_02.png'
import imageThree3 from '../assets/image_03.png'
import imageFour4 from '../assets/Image_04.png'
import CommonHeading from '../components/CommonHeading'
import { FaStar } from "react-icons/fa";
import Button from '../components/Button'


const ProductPage = () => {
  return (
   <>
   <section className='pt-[150px] pb-12'>
    <Container>
    <Flex className='flex-wrap gap-10 '>
      <Image c src={imageOne}/>
      <Image src={imagtwo2}/>
      <Image src={imageThree3}/>
      <Image src={imageFour4}/>
    </Flex>

    <div className='w-1/2 pt-[49px]'>
      <CommonHeading text='Product'/>
      <Flex className='items-center gap-x-[25px] pt-[15px]'>
        <Flex className='items-center gap-1'>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        </Flex>
        <span className='font-dm text-[14px] text-primary font-[400]'>1 Review</span>
      </Flex>
    </div>

    <div className='pt-[24px] border-b border-[#F0F0F0] w-1/2 pb-[24px]'>
      <Flex className='items-center gap-x-[22px]'>
        <span className='font-dm font-[400] text-[16px] text-primary'>$88.00</span>
        <span className='font-dm text-[20px] font-[700] text-secondary'>$44.00</span>
      </Flex>
    </div>

    <div className='pt-[24px] border-b border-[#F0F0F0] w-1/2 pb-[24px]'>
    <Flex className='items-center gap-x-[53px]'>
    <h4>COLOR:</h4>
    <Flex className='items-center gap-x-[15px]'>
      <div className='w-[20px] h-[20px] bg-[#000000] rounded-full '></div>
      <div className='w-[20px] h-[20px] bg-[#FF8686] rounded-full '></div>
      <div className='w-[20px] h-[20px] bg-[#7ED321] rounded-full '></div>
      <div className='w-[20px] h-[20px] bg-[#B6B6B6] rounded-full '></div>
      <div className='w-[20px] h-[20px] bg-[#15CBA5] rounded-full '></div>

    </Flex>
    </Flex>

    <div className='pt-[36px] pb-[37px]'>
      <Flex className='items-center gap-x-[76px]'>
        <h4 className='font-dm font-[700] text-[16px] text-secondary'>SIZE:</h4>
        <select name="" id="" className='w-[139px] h-[36px] p-2 bg-white border border-primary'>
          <option value="s">S</option>
          <option value="m">M</option>
          <option value="l">L</option>
          <option value="xl">XL</option>
          <option value="xll">XLL</option>
        </select>

      </Flex>
    </div>

    <div className='pb-[30px]'>
      <Flex className='items-center gap-x-[29px]'>
        <h4 className='font-dm font-[700] text-[16px] text-secondary'>QUANTITY:</h4>
        <Flex className='items-center w-[139px] h-[36px] border border-primary justify-evenly cursor-pointer'>
          <span className='font-dm font-[400] text-[16px] text-primary'>-</span>
          <span className='font-dm font-[400] text-[16px] text-primary'>1</span>
          <span className='font-dm font-[400] text-[16px] text-primary'>+</span>
        </Flex>
      </Flex>
    </div>
    </div>


    <div className='pt-[24px] border-b border-[#F0F0F0] w-1/2 pb-[24px]'>
      <Flex className='items-center gap-x-[27px]'>
        <span className='font-dm font-[700] text-[16px] text-secondary'>STATUS:</span>
        <span className='font-dm text-[16px] font-[400] text-primary'>In stock</span>
      </Flex>
    </div>
  
   <div className='pt-[24px] border-b border-[#F0F0F0] w-1/2 pb-[24px]'>
      <Flex className='items-center gap-x-[22px]'>
         <Button text='Add to Wish List' className='bg-blue-500'/>
         <Button text='Add to Cart'/>
      </Flex>
    </div>

    <div className='pt-[24px] border-b border-[#F0F0F0] w-1/2 pb-[24px]'>
      <Flex className='items-center justify-between'>
         <span className='font-dm font-[700] text-[16px] text-secondary'>FEATURES & DETAILS</span>
         <span>+</span>
      </Flex>
    </div>

    <div className='pt-[24px] border-b border-[#F0F0F0] w-1/2 pb-[24px]'>
      <Flex className='items-center justify-between'>
         <span className='font-dm font-[700] text-[16px] text-secondary'>SHIPPING & RETURNS</span>
         <span>+</span>
      </Flex>
    </div>

    <div className='pt-[24px] w-1/2 pb-[123px]'>
      <p className='font-dm text-[16px] font-[400] leading-[30px] text-primary'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>

    <div className='pt-[24px] border-b border-[#F0F0F0]  pb-[24px]'>
      <Flex className='items-center gap-x-[62px]'>
        <span className='font-dm font-[400] text-[20px] text-primary'>Description</span>
        <span className='font-dm font-[400] text-[20px] text-secondary'>Reviews (1)</span>
      </Flex>
      <p className='font-dm font-[400] text-[14px] text-primary pt-[42px]'>1 review for Product</p>
    </div>

    <div className='pt-[24px] border-b border-[#F0F0F0]  pb-[24px]'>
      <Flex className='items-center gap-x-[37px]'>
        <span className='font-dm font-[400] text-[16px] text-secondary'>John Ford</span>
        <Flex>
        <FaStar className='text-[#FFD881]' />
        <FaStar className='text-[#FFD881]'  />
        <FaStar className='text-[#FFD881]'  />
        <FaStar className='text-[#FFD881]'  />
        <FaStar className='text-[#FFD881]'  />
        </Flex>
      </Flex>
      <p className='font-dm font-[400] text-[16px] text-primary leading-[30px] pt-[14px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
      </p>
    </div>

    <div className='pt-[24px] w-1/2 pb-[123px]'>
      <p className='font-dm text-[20px] font-[700] leading-[30px] text-secondary pt-[53px] pb-[48px]'>Add a Review</p>
    </div>

    <form action="">
    <div className='pt-[24px] border-b border-[#F0F0F0] w-1/2 pb-[24px]'>
      <Flex className='flex-col gap-y-[10px]'>
       <label htmlFor="" className='font-dm font-[700] text-[16px] text-secondary'>Name</label>
       <input type="text" placeholder='Your name here' className='text-[14px] font-dm font-[400] text-primary border-none outline-none' />
      </Flex>
    </div>

    <div className='pt-[24px] border-b border-[#F0F0F0] w-1/2 pb-[24px]'>
      <Flex className='flex-col gap-y-[10px]'>
       <label htmlFor="" className='font-dm font-[700] text-[16px] text-secondary'>Email</label>
       <input type="email" placeholder='Your email here' className='text-[14px] font-dm font-[400] text-primary border-none outline-none' />
      </Flex>
    </div>

    <div className='pt-[24px] border-b border-[#F0F0F0] w-1/2 pb-[24px]'>
      <Flex className='flex-col gap-y-[10px]'>
       <label htmlFor="" className='font-dm font-[700] text-[16px] text-secondary'>Review</label>
       <input type="text" placeholder='Your email here' className='text-[14px] font-dm font-[400] text-primary border-none outline-none' />
      </Flex>
    </div>
    </form>

    <div className='pt-[45px]'>
      <Button text='Post' className='text-center'/>
    </div>
   </Container>
   </section>


   </>
  )
}

export default ProductPage