import Image from 'next/image'
import React, { useEffect } from 'react'
import TypesIcon from '../../_components/TypesIcon'
import AbilityIcon from '../../_components/AbilityIcon'
import Stats from '../../_components/Stats'
import { COLORS } from '../../_constants/colors'
import useFetchPokemonInfo from '../../pokemon/useFetchPokemonInfo'

const PreviewPokemonComponent = ({ pokemonInfo: info }) => {
  const { pokemonInfo, fetchPokemonInfo } = useFetchPokemonInfo()
  useEffect(() => { fetchPokemonInfo(info?.name) }, [info])
  return (
    <div style={{ borderColor: COLORS[pokemonInfo?.types[0]] }} className='min-h-[500px] border-2 p-2 rounded-lg flex flex-col justify-center'>
      <h3 className="ml-5 font-bold text-lg text-center">{pokemonInfo?.name}</h3>
      <div className='flex justify-center mb-10'>
        {pokemonInfo?.sprite && (
          <Image src={pokemonInfo?.sprite}
            width={150}
            height={150}
            className='mt-[40px]'
          />)
        }
      </div>
      <div className='flex flex-col justify-center items-center mb-10'>
        <span className="font-bold">Stats:</span>
        <Stats stats={pokemonInfo?.stats} />
      </div>
    </div>
  )
}

export default PreviewPokemonComponent