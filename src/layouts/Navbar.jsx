
import React from 'react'
import { Container } from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import LogoImage from '../assets/Logo.png'
import List from '../components/List'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { breadCount } from '../slice/breadCumb'





export const Navbar = () => {

  const dispitch =useDispatch()

  const changeItem =((name)=>{
    dispitch(breadCount(name))
  })
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
        <Link to='/' onClick={()=>changeItem('Home')}><List text='Home'/></Link>
        <Link to='shop' onClick={()=>changeItem('Shop')} ><List text='Shop'/></Link>
        <Link to='about'onClick={()=>changeItem('About')}><List text='About'/></Link>
        <Link to='contact'onClick={()=>changeItem('Contacts')}><List text='Contacts'/></Link>
       <Link to='products'onClick={()=>changeItem('Products')}> <List text='Products'/></Link>
      </ul>
    </div>
    </Flex>
   </Container>
   </nav>
</>
  )
}
