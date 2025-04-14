import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'

const NextArows = ({className, onClick}) => {
  return (
    <div
    className={`${className} inline-block bg-primary w-[64px] h-[64px] flex items-center justify-center rounded-full absolute top-1/3 right-0 z-20 -translate-x-1/2 cursor-pointer`}
    
    onClick={onClick}
  >
 <FaArrowRight className='text-white' />
  </div>
  )
}

export default NextArows
