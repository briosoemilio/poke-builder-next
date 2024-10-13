import Image from 'next/image'
import React from 'react'

export const Header = () => {
  return (
    <div className='p-5 lg:px-20 flex flex-row items-center justify-between '>
      <Image src={'/pokebuilder_logo.png'}
        width={100}
        height={100}
        style={{ width: 200 }}
      />
      <div>
        <a href="" className='text-white mr-5'>Home</a>
        <a href="" className='text-white mr-5'>Pokemon</a>
        <a href="" className='text-white'>Team</a>
      </div>
    </div>
  )
}
