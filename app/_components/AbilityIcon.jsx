'use client'
import React from 'react'
import { capitalize } from 'lodash'

const AbilityIcon = ({ ability }) => {
  return (
    <div className={`flex flex-row mx-3`}>
      <p className='text-white'>
        {capitalize(ability.name)}
      </p>
    </div>
  )
}

export default AbilityIcon