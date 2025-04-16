
import React from 'react'
import { Container } from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import LogoImage from '../assets/Logo.png'
import List from '../components/List'
import { Link } from 'react-router-dom'


export const Navbar = () => {
  return (
   <>

<nav className='bg-[#FFFFFF] p-[31px]'>
   <Container>
    <Flex className='justify-between items-center'>
    <div className='w-4/12'>
    <Image src={LogoImage}/>
    </div>
    <div className='w-8/12'>
      <ul className='flex gap-x-[39px]'>
        <Link to='/'><List text='Home'/></Link>
        <Link to='shop'><List text='Shop'/></Link>
        <Link to='about'><List text='About'/></Link>
        <Link to='contact'><List text='Contacts'/></Link>
       <Link to='products'> <List text='Products'/></Link>
      </ul>
    </div>
    </Flex>
   </Container>
   </nav>
</>
  )
}
