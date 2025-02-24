import React from 'react'

const Button = ({text,className}) => {
  return (
    <div className={`bg-black w-[200px] h-[50px] text-white font-dm text-[14px] font=[700] py-[16px] px-[41px]  cursor-pointer ${className}`}>{text}</div>
  )
}

export default Button