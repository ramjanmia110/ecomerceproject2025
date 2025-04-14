import React from 'react'
import { FaArrowLeftLong } from 'react-icons/fa6'

const PreviousArrow = ({className, onClick}) => {
  return (
    <div
    className={`${className} absolute inline-block bg-primary w-[64px] h-[64px] flex items-center justify-center rounded-full cursor-pointer top-1/3 left-0 -inset-3translate-x-1/2 z-20 `}
   
    onClick={onClick}
  >
    <FaArrowLeftLong className='text-white' />
  </div>
  )
}

export default PreviousArrow
