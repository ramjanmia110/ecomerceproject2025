import React, { useEffect, useState } from 'react'
import Image from '../components/Image'
import bannerImage from '../assets/banner.jpg'
import { Link } from 'react-router-dom'
import { Container } from '../components/Container'
import Flex from '../components/Flex'
import twoImage from '../assets/2.png'
import truct from '../assets/truck-solid.png'
import undoImage from '../assets/undo-alt-solid.png'
import imageOne from '../assets/Ad_1.jpg'
import imageTwo from '../assets/Ad_2.jpg'
import imageThree from '../assets/Ad_3.png'
import CommonHeading from '../components/CommonHeading'
import ProductList from '../components/ProductList'
// import productOne from '../assets/productone.jpg'
// import producttwo from '../assets/image02 (1).png'
// import productthree from '../assets/image03.jpg'
// import productfour from '../assets/image003.jpg'
import productfive from '../assets/image04.png'
import productsix from '../assets/image005.png'
import productseven from '../assets/image06.png'
import producteight from '../assets/image008.png'
import phone from '../assets/phonetheyear.png'
import productnine from '../assets/image07.png'
import productten from '../assets/image08.png'
import eleven from '../assets/image09.png'
import producttwelve from '../assets/image10.png'

import bannerImageTwo from '../assets/bannerImage2.png'
import bannerimagethree from '../assets/bannerImage3.png'
import bannerimageFour from '../assets/bannerImage4.png'
import bannerImageFive from '../assets/bannerImage5.png'
import bannerimageSeven from '../assets/bannerImage7.png'


import "slick-carousel/slick/slick.css";
import Slider from 'react-slick'
import PreviousArrow from '../components/PreviousArrow'
import NextArows from '../components/NextArows'







export const Home = () => {

const [data,setData] =useState([])


useEffect(()=>{
  fetch('https://dummyjson.com/products')
  .then(res=>res.json())
  .then(res=>setData(res.products))

},[])



  var productSettings = {
    arrows:true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow:<NextArows/>,
    prevArrow:<PreviousArrow/>,
  };

  var bannerSettings = {
    arrows: false, 
    infinite: true, 
    speed: 500, 
    slidesToShow: 1, 
    slidesToScroll: 1,
    autoplay: true, 
    autoplaySpeed: 2000 
  };
  return (
 <>
  
   <>
  <section>
  <Slider {...bannerSettings}>
      <div>
      <Link to='#'><Image className='w-full h-[850px]' src={bannerImage}/></Link>
      </div>
      <div>
      <Link to='#'><Image className='w-full h-[850px]'  src={bannerImageTwo}/></Link>
      </div>

      <div>
      <Link to='#'><Image className='w-full h-[850px]'  src={bannerimagethree}/></Link>
      </div>

      <div>
      <Link to='#'><Image className='w-full h-[850px]'  src={bannerimageFour}/></Link>
      </div>

      <div>
      <Link to='#'><Image className='w-full h-[850px]'  src={bannerImageFive}/></Link>
      </div>

     <div>
      <Link to='#'><Image className='w-full h-[850px]'  src={bannerimageSeven}/></Link>
      </div>
     
     
    </Slider>
  </section>
    <section className='bg-[#F0F0F0] py-[22px] border border-b-[#F0F0F0]'>
      <Container>
        <Flex className='justify-between'>
          <Flex className='items-center gap-x-[17px]'>
            <span><Image src={twoImage}/></span>
            <span className='font-dm font-[400] text-[16px] text-primary'>Two years warranty</span>
          </Flex>

          <Flex className='items-center gap-x-[17px]'>
            <span><Image src={truct}/></span>
            <span className='font-dm font-[400] text-[16px] text-primary'>Free shipping</span>
          </Flex>

          <Flex className='items-center gap-x-[17px]'>
            <span><Image src={undoImage}/></span>
            <span className='font-dm font-[400] text-[16px] text-primary'>Return policy in 30 days</span>
          </Flex>
        </Flex>

  </Container>
    </section>
   </>

   {/* sale section start her */}
   <section className='pt-[140px] pb-[128px]'>
    <Container>
         <div>
               <Flex className='gap-x-10'>
               <div className='w-1/2'>
               <div className='w-[780px] h-[780px]'>
               <Image className='w-full' src={imageOne}/>
               </div>
               </div>
               <div className='w-1/2'>
                <Flex className='flex-col gap-y-10'>
                 <div className='w-[784px] h-[370px]'>
                 <Image className='w-full' src={imageTwo}/>
                 </div>
                 <div className='w-[784px] h-[370px]'>
                 <Image className='w-full' src={imageThree}/>
                 </div>
                </Flex>
               </div>
               </Flex>
        </div>
    </Container>
   </section>

   {/* newArrival section start here */}

  <Container>
  <CommonHeading text='New Arrivals'/>
  <div className='gap-x-[40px] pt-[48px]'>
  <Slider {...productSettings}>
  {
           data.map((value,index)=>(
            <ProductList key={index} src={value.thumbnail} text={value.title} price={`$${value.price}`} color={value.rating}/>

           ))
       }
     
     
    </Slider>
    
    
  </div>
  
  </Container>


   {/* <section>
    <Container>
       <div>
          <CommonHeading text='New Arrivals'/>

         <Flex className='gap-x-[40px] pt-[48px]'>
         <ProductList src={productOne} text='Basic Crew Neck Tee'price='$44.00' color='Black'/>
         <ProductList src={producttwo} text='Basic Crew Neck Tee'price='$44.00' color='Black'/>
         <ProductList src={productthree} text='Basic Crew Neck Tee'price='$44.00' color='Black'/>
         <ProductList src={productfour} text='Basic Crew Neck Tee'price='$44.00' color='Black'/>
         </Flex>
        </div>
    </Container>
   </section> */}

  
    <section className='pt-[118px]'>
    <Container>
       <div>
          <CommonHeading text='Our Bestsellers'/>

         <Flex className='gap-x-[40px] pt-[48px]'>
         <ProductList src={productfive} text='Basic Crew Neck Tee'price='$44.00' color='Black'/>
         <ProductList src={productsix} text='Basic Crew Neck Tee'price='$44.00' color='Black'/>
         <ProductList src={productseven} text='Basic Crew Neck Tee'price='$44.00' color='Black'/>
         <ProductList src={producteight} text='Basic Crew Neck Tee'price='$44.00' color='Black'/>
         </Flex>
        </div>
    </Container>
   </section>

  
   <section className='pt-[130px]'>
    <Container>
       <div className='w-[1601px] h-[370px]'>
          <Image src={phone } className='w-full h-full'/>

       
        </div>
    </Container>
   </section>


   
    <section className='pt-[128px]'>
    <Container>
       <div>
          <CommonHeading text='Special Offers'/>

         <Flex className='gap-x-[40px] pt-[48px]'>
         <ProductList src={productnine} text='Basic Crew Neck Tee'price='$44.00' color='Black'/>
         <ProductList src={productten} text='Basic Crew Neck Tee'price='$44.00' color='Black'/>
         <ProductList src={eleven} text='Basic Crew Neck Tee'price='$44.00' color='Black'/>
         <ProductList src={producttwelve} text='Basic Crew Neck Tee'price='$44.00' color='Black'/>
         </Flex>
        </div>
    </Container>
   </section>
  
 </>
  )
}
