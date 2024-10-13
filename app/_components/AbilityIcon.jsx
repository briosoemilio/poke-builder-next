'use client'
import React from 'react'
import { capitalize } from 'lodash'
import useFetchAbilityInfo from '../pokemon/useFetchAbilityInfo'
import { COLORS } from '../_constants/colors'

const AbilityIcon = ({ ability, onClick, isSelected, type }) => {
  const { abilityInfo } = useFetchAbilityInfo(ability.name)
  const effectDetails = abilityInfo?.['short_effect'] || abilityInfo?.effect
  return (
    <div
      className={`lg:tooltip flex flex-row mx-3 border-white border-2 p-1 rounded-md`}
      data-tip={effectDetails}
      onClick={() => onClick?.()}
      style={{ backgroundColor: isSelected ? COLORS[type] : COLORS.transparent }}
    >
      <p className='text-white'>
        {capitalize(ability.name)}
      </p>
    </div>
  )
}

export default AbilityIcon