import React from 'react'
import { Navbar } from './Navbar'
import ShopCatagory from './ShopCatagory'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

const RootLayouts = () => {
  return (
   <>
    <Navbar/>
    <ShopCatagory/>
    <Outlet/>
    <Footer/>
   </>
  )
}

export default RootLayouts