import React, { useEffect, useState } from 'react'
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
import { RxCross2 } from 'react-icons/rx'
import { AiOutlineMinus } from 'react-icons/ai'
import { GoPlus } from 'react-icons/go'
import { TbWorldSearch } from 'react-icons/tb'
import { GiSelfLove } from 'react-icons/gi'
import { RiShare2Line } from 'react-icons/ri'
import { useParams } from 'react-router-dom'


const ProductPage = () => {
const [activeTab, setActiveTab] = useState('description')
const [data,setData] =useState([])
const datatitle =useParams()
console.log(datatitle.title)

useEffect(()=>{
  fetch('https://dummyjson.com/products')
  .then(res=>res.json())
  .then(res=>setData(res.products))

},[])
  return (
   <>
   <section className='pt-[150px] pb-12'>
    <Container>
  
  {
    data
    .filter((item) => item.title === datatitle.title)
    .map((item,index)=>(
      item.text ==datatitle.text &&
       <Flex className='gap-5' key={index}>
    <div className='w-1/2'>
    <Image src={item.thumbnail}/>

    </div>

    <div className='w-1/2'>
    <CommonHeading text={item.title} className='font-[400] text-[26px]'/>
    <div className='pt-[24px]'>
      <Flex className='items-center gap-x-[37px]'>
        
        <Flex>
        <FaStar className='text-[#FFD881]' />
        <FaStar className='text-[#FFD881]'  />
        <FaStar className='text-[#FFD881]'  />
        <FaStar className='text-[#FFD881]'  />
        <FaStar className='text-[#FFD881]'  />
        </Flex>
        <span className='font-dm font-[400] text-[16px] text-secondary'>1 review</span>
      </Flex>
      <h4 className='my-4 font-dm text-[20px] font-[600]'>$ {item.price}</h4>
      <p className='font-dm font-[400] text-[16px] text-primary leading-[30px] pt-[14px]'>{item.description}
      </p>
    </div>

    <div>
      <h4 className='font-dm font-[400] text-[16px] text-secondary my-4'>Size : S</h4>
    </div>

    <Flex className='gap-4 items-center'>
      <span className='border border-gray-400 px-10 py-1 font-dm font-[400] text-[16px] text-secondary cursor-pointer rounded-[4px]'>XXS</span>
      <span className='border border-gray-400 px-10 py-1 font-dm font-[400] text-[16px] text-secondary cursor-pointer rounded-[4px]'>XS</span>
      <span className='border border-gray-400 px-10 py-1 font-dm font-[400] text-[16px] text-secondary cursor-pointer rounded-[4px]'>S</span>
      <span className='border border-gray-400 px-10 py-1 font-dm font-[400] text-[16px] text-secondary cursor-pointer rounded-[4px]'>M</span>
    </Flex>
    <Flex className='items-center gap-2 my-5'>
      <span className='font-dm font-[400] text-[16px] text-secondary cursor-pointer '><RxCross2 /></span>
      <span className='font-dm font-[400] text-[16px] text-secondary '>Clear</span>
    </Flex>

    <h4 className='font-dm font-[600] text-[16px]  my-2 bg-green-50 inline-block text-green-600  px-10 py-1'>In Stock : {item.stock}</h4>

    <div className='my-4'>
      <Flex className='gap-x-4'>
        <div className='border border-gray-400 px-6 py-1'>
         <Flex className='gap-x-4 items-center justify-center py-2'>
         <AiOutlineMinus className='font-dm font-[700] text-[20px] text-secondary cursor-pointer' />
          <span className='font-dm font-[400] text-[16px] text-primary'>2</span>
          <GoPlus className='font-dm font-[700] text-[20px] text-secondary cursor-pointer' />
         </Flex>
        </div>

        <Button text='Add To Cart' className='w-[56%] text-center'/>
      </Flex>
    </div>

    <div className='pt-[24px] border-b border-gray-300 w-[75%] pb-[24px]'>
      <Flex className='items-center gap-x-4'>
        <Flex className='items-center gap-x-1'>
          <TbWorldSearch className='font-dm font-[700] text-[20px] text-secondary cursor-pointer' />
          <span className='font-dm font-[400] text-[16px] text-gray-500'>Size Guide</span>
        </Flex>

        <Flex className='items-center gap-x-1'>
          <GiSelfLove className='font-dm font-[700] text-[20px] text-secondary cursor-pointer' />
          <span className='font-dm font-[400] text-[16px] text-gray-500'>Add to wishlist</span>
        </Flex>

          <Flex className='items-center gap-x-1'>
          <RiShare2Line className='font-dm font-[700] text-[20px] text-secondary cursor-pointer' />
          <span className='font-dm font-[400] text-[16px] text-gray-500'>Share this Product</span>
        </Flex>
      </Flex>
    </div>

    <div className='my-6'>
     
      <h4 className='font-dm font-[400] text-[16px] text-gray-500 mb-2'>SKU : <span className='font-dm font-[400] text-[16px] text-secondary'>{item.sku}</span></h4>
      <h4 className='font-dm font-[400] text-[16px] text-gray-500'>Categories : <span className='font-dm font-[400] text-[16px] text-secondary'>{item.category}</span></h4>
    </div>

  

    </div>

    
    </Flex>
    ))
     
  }

   <div className='my-14'>
    <div className='pt-[24px] border-b border-gray-200 w-full pb-[24px]'>
      <Flex className='items-center gap-x-5'>
      <span onClick={() => setActiveTab('description')} className={`font-dm font-[700] text-[20px] text-gray-500 cursor-pointer ${ activeTab === 'description' ? 'text-black' : 'text-gray-500'}`}>Description</span>
      <span onClick={() => setActiveTab('additional')} className={`font-dm font-[700] text-[20px] text-gray-500 cursor-pointer ${activeTab === 'additional' ? 'text-black' : 'text-gray-500'}`}>Additional information</span>
      <span onClick={() => setActiveTab('reviews')} className={`font-dm font-[700] text-[20px] text-gray-500 cursor-pointer ${activeTab === 'reviews' ? 'text-black' : 'text-gray-500'}`}>Reviews (1)</span>
    </Flex>
    </div>

    {
      activeTab === 'description' &&
      <div>
      <p className='font-dm font-[400] text-[16px] text-secondary leading-[30px] pt-[14px]'>Quisque varius diam vel metus mattis, id aliquam diam rhoncus. Proin vitae magna in dui finibus malesuada et at nulla. Morbi elit ex, viverra vitae ante vel, blandit feugiat ligula. Fusce fermentum iaculis nibh, at sodales leo maximus a. Nullam ultricies sodales nunc, in pellentesque lorem mattis quis. Cras imperdiet est in nunc tristique lacinia. Nullam aliquam mauris eu accumsan tincidunt. Suspendisse velit ex, aliquet vel ornare vel, dignissim a tortor.<br></br><br></br>

Morbi ut sapien vitae odio accumsan gravida. Morbi vitae erat auctor, eleifend nunc a, lobortis neque. Praesent aliquam dignissim viverra. Maecenas lacus odio, feugiat eu nunc sit amet, maximus sagittis dolor. Vivamus nisi sapien, elementum sit amet eros sit amet, ultricies cursus ipsum. Sed consequat luctus ligula. Curabitur laoreet rhoncus blandit. Aenean vel diam ut arcu pharetra dignissim ut sed leo. Vivamus faucibus, ipsum in vestibulum vulputate, lorem orci convallis quam, sit amet consequat nulla felis pharetra lacus. Duis semper erat mauris, sed egestas purus commodo vel.</p>
    </div>
    }
    {
      activeTab === 'additional' &&
      <div className='my-2'>
      <h4 className='my-4 font-dm text-[20px] font-[600]'>Additional information</h4>
          <table className="border border-gray-300 w-full text-left">
        <thead>
          <tr className="bg-gray-50">
            <th className="border px-4 py-2">Size</th>
            <th className="border px-4 py-2">XXS , XS , S , M</th>
          </tr>
        </thead>
       
      </table>
    </div>
    }
    <div>
    {
      activeTab === 'reviews' &&
        <div className=" mx-auto  text-gray-800">
      {/* Average Rating */}
      <div className="mb-6">
        <h2 className="my-4 font-dm text-[20px] font-[400]">
          1 review for Short Dress With Knotted Skirt
        </h2>
      <Flex className='gap-x-24 my-6'>
          <div className="flex items-center space-x-4 ">
          <span className="text-[60px] font-bold">4.00</span>
          <div className="my-4 font-dm text-[14px] font-[400]">Average of 1 review</div>
        </div>

       
        <div className="mt-4 space-y-1 text-sm text-gray-600">
          {[5, 4, 3, 2, 1].map((star) => (
            <div key={star} className="flex items-center">
              <span className="w-12">{star} star</span>
              <div className="w-40 h-2 bg-gray-200 mx-2">
                <div className="bg-yellow-400 h-full w-[20%]"></div>
              </div>
              <span>(1)</span>
            </div>
          ))}
        </div>
      </Flex>
      </div>

      {/* Single Review */}
      <div className="mb-8 border-t pt-6">
        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
          <div>
            <div className="font-bold">John Doe</div>
            <div className="text-sm text-gray-500">May 10, 2025</div>
            <p className="mt-2 text-gray-700">
              Sed perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
            </p>
          </div>
        </div>
      </div>

      {/* Add Review Form (Design Only) */}
      <div className="border-t pt-6">
        <h3 className="text-xl font-semibold mb-4">Add a review</h3>
        <p className="text-sm mb-4">Your email address will not be published. Required fields are marked *</p>

        <form className="space-y-4">
          <div>
            <label className="block font-medium">Your rating *</label>
            <select className="mt-1 border px-2 py-1 w-32">
              <option>Choose…</option>
              <option>5 Stars</option>
              <option>4 Stars</option>
              <option>3 Stars</option>
              <option>2 Stars</option>
              <option>1 Star</option>
            </select>
          </div>

          <div>
            <label className="block font-medium">Your review *</label>
            <textarea rows="4" className="w-full border px-3 py-2"></textarea>
          </div>

          <div>
            <label className="block font-medium">Name *</label>
            <input className="w-full border px-3 py-2" />
          </div>

          <div>
            <label className="block font-medium">Email *</label>
            <input type="email" className="w-full border px-3 py-2" />
          </div>

          <div>
            <label className="flex items-start space-x-2 text-sm">
              <input type="checkbox" className="mt-1" />
              <span>
                Save my name, email, and website in this browser for the next time I comment.
              </span>
            </label>
          </div>

          <button
            type="button"
            className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
    }
    </div>
   </div>

   <div>
    <div className='pt-[24px] border-b border-gray-200 w-full pb-[24px]'>
      <h4 className='font-dm text-[20px] font-[600]'>Related products</h4>
    </div>

    <Flex className='items-center justify-between my-10'>
      <div className='w-[350px]'>
        <Image src={imagtwo2} className='w-full'/>
      </div>

       <div className='w-[350px]'>
        <Image src={imageThree3} className='w-full'/>
      </div>

       <div className='w-[350px]'>
        <Image src={imageFour4} className='w-full'/>
      </div>

        <div className='w-[350px]'>
        <Image src={imageOne} className='w-full'/>
      </div>
    </Flex>
   </div>
   </Container>
   </section>


   </>
  )
}

export default ProductPage