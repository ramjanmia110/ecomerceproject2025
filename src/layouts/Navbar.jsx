
import React from 'react'
import { Container } from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import LogoImage from '../assets/Logo.png'
import List from '../components/List'

export const Navbar = () => {
  return (
   <nav className='bg-[#FFFFFF] p-[31px]'>
   <Container>
    <Flex className='justify-between items-center'>
    <div className='w-4/12'>
    <Image src={LogoImage}/>
    </div>
    <div className='w-8/12'>
      <ul className='flex gap-x-[39px]'>
        <List text='Home'/>
        <List text='Shop'/>
        <List text='About'/>
        <List text='Contacts'/>
        <List text='Journal'/>
      </ul>
    </div>
    </Flex>
   </Container>
   </nav>
  )
}
