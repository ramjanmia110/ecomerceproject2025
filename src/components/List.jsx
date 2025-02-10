import React from 'react'

const List = ({text}) => {
  return (
    <div className='font-dm text-primary text-[14px] font-[400] hover:text-secondary cursor-pointer'><li>{text}</li></div>
  )
}

export default List