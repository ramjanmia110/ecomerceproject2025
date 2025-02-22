


import { Container } from '../components/Container'
import React from 'react'
import Flex from '../components/Flex'
import List from '../components/List'
import Image from '../components/Image'
import footerImage from '../assets/footerimage.png'
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";

const Footer = () => {
  return (
    <section className='mt-[140px] bg-[#F5F5F3] pt-[55px] pb-[59px]'>
      <Container>
      <Flex>
        <div className='w-2/12'>
         <h4 className='text-[16px] font-dm font-[700] text-secondary pb-[17px]'>MENU</h4>
         <Flex className='list-none flex-col gap-y-[6px]'>
            <List text='Home'/>
            <List text='Shop'/>
            <List text='About'/>
            <List text='Contact'/>
            <List text='Journal'/>
         </Flex>

         <Flex className='items-center gap-x-[25px] mt-[65px] cursor-pointer'>
         <FaFacebookF />
         <FaLinkedinIn />
         <CiInstagram />
         </Flex>
        </div>
        <div className='w-2/12'>
        <h4 className='text-[16px] font-dm font-[700] text-secondary pb-[17px]'>SHOP</h4>
         <Flex className='list-none flex-col gap-y-[6px]'>
            <List text='Category 1'/>
            <List text='Category 2'/>
            <List text='Category 3'/>
            <List text='Category 4'/>
            <List text='Category 5'/>
         </Flex>
        </div>
        <div className='w-2/12'>
        <h4 className='text-[16px] font-dm font-[700] text-secondary pb-[17px]'>HELP</h4>
         <Flex className='list-none flex-col gap-y-[6px]'>
            <List text='Privacy Policy'/>
            <List text='Terms & Conditions'/>
            <List text='Special E-shop'/>
            <List text='Shipping'/>
            <List text='Secure Payments'/>
         </Flex>
        </div>
        <div className='w-3/12'>
          <Flex className='flex-col gap-y-[15px]'>
            <div>
              <Flex className='flex-col gap-y-[4px]'>
              <span className='font-dm font-[700] text-[16px] text-secondary'>(052) 611-5711</span>
              <span className='font-dm font-[700] text-[16px] text-secondary'>company@domain.com</span>
              </Flex>
            </div>

            <span className='font-dm font-[400] text-[14px] text-primary'>575 Crescent Ave. Quakertown, PA 18951</span>
          </Flex>
        </div>
        <div className='w-3/12'>
         <Image src={footerImage} className='mb-[210px]'/>

         <span className='text-[14px] font-[400] font-dm text-[#6D6D6D]'>2025 Orebi Minimal eCommerce Figma Template by Adveits</span>
        </div>
      </Flex>
      </Container>
    </section>
  )
}

export default Footer