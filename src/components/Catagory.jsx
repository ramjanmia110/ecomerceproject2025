


import React from 'react'
import Flex from './Flex'
import { FiPlus, FiMinus } from 'react-icons/fi'

const Catagory = ({ text, type }) => {
  return (
    <div>
      <Flex className='list-none items-center justify-between'>
        <li className='font-dm font-[400] text-[16px] text-primary'>{text}</li>

      
        {type === "plusIcon" && <FiPlus className='cursor-pointer text-[16px] text-primary' />}
        {type === "minusIcon" && <FiMinus className='cursor-pointer text-[16px] text-primary' />}

       
      </Flex>
    </div>
  )
}

export default Catagory
