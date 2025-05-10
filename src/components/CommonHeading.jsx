import React from 'react'

const CommonHeading = ({text,className}) => {
  return (
    <div className={`font-dm font-[700] text-[39px] text-secondary ${className}`}>{text}</div>
  )
}

export default CommonHeading