'use client'
import Image from 'next/image'
import React, { useEffect } from 'react'
import useFetchPokemonInfo from '../../pokemon/useFetchPokemonInfo'
import { COLORS } from '../../_constants/colors'

const TeamListComponent = ({ pokemon, isSelected }) => {
  const { pokemonInfo, fetchPokemonInfo } = useFetchPokemonInfo()
  useEffect(() => { fetchPokemonInfo(pokemon?.name) }, [pokemon])
  return (
    <div
      style={{ backgroundColor: isSelected ? COLORS[pokemonInfo?.types[0]] : COLORS.transparent }}
      className='flex flex-row items-center w-[300px] border-white border-2 rounded-full mb-5 hover:cursor-pointer'
    >
      <div>
        <Image
          src={pokemonInfo?.['list_sprite']}
          height={100}
          width={100}
        />

      </div>
      <div className='flex flex-col'>
        <span>{pokemon?.nickname || pokemon?.name}</span>
        <span>Ability: {pokemon?.ability}</span>
      </div>
    </div>
  )
}

export default TeamListComponent