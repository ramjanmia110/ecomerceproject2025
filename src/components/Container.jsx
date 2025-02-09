import React, { Children } from 'react'

export const Container = ({children,className}) => {
  return (
    <div className={`max-w-container mx-auto ${className}`}>{children}</div>
  )
}
