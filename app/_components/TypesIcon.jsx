'use client'
import Image from 'next/image'
import React from 'react'
import { TYPES } from '../_constants/types'
import { COLORS } from '../_constants/colors'
import { capitalize } from 'lodash'

const TypesIcon = ({ type }) => {
  const iconSource = TYPES[type]
  return (
    <div className={`flex flex-row mx-3`}>
      <Image src={iconSource}
        width={25}
        height={25}
        className='mr-1 bg-grass rounded-full'
        style={{backgroundColor: COLORS[type]}}
      />
      <p className='text-white'>
        {capitalize(type)}
      </p>
    </div>
  )
}

export default TypesIcon