import React from 'react'
import Herosection from './Herosection'
import Arrow from './Arrow'

const LeftContent = () => {
  return (
    <div className='h-full flex flex-col justify-between w-1/3'>
            <Herosection/>
            <Arrow/>        
    </div>
  )
}

export default LeftContent