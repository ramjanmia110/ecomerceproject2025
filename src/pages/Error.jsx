import { Container } from '../components/Container'
import React from 'react'
import Image from '../components/Image'
import errorImage from '../assets/404.png'
import { IoSearchOutline } from "react-icons/io5";
import Button from '../components/Button';

const Error = () => {
  return (
    <section>
      <Container>
        <div className='mt-[81px] ml-[157px]'>
          <Image src={errorImage}/>
          <p className='font-dm text-[16px] text-primary font-[400] w-[644px] leading-[30px] pt-[49px]'>The page you were looking for couldn't be found. The page could be removed or you misspelled the word while searching for it. Maybe try a search?</p>

          <div className=' w-[643px] bg-[#F0F0F0] mt-[50px] relative'>
            <input type="text" placeholder='Type to search' className='w-full  font-dm font-[400] text-[16px] pt-[21px] pl-[21px] pb-[20px]  border border-[#F0F0F0] outline-none'/>
            <IoSearchOutline className='absolute top-[25px] right-[25px]' />
          </div>

          <Button text='Back to Home' className='mt-[60px]'/>
        </div>
      </Container>
    </section>
  )
}

export default Error