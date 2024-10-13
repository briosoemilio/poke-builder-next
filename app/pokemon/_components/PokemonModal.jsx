'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import TypesIcon from '../../_components/TypesIcon'
import AbilityIcon from '../../_components/AbilityIcon'

const PokemonModal = ({ pokemonInfo, loading }) => {
  console.log({ pokemonInfo })
  const [page, setPage] = useState(1)
  const closeModal = () => document.getElementById('pokemon_modal').close()
  return (
    <dialog id="pokemon_modal" className="modal">
      {loading ? <span className='loading loading-spinner' /> :
        <div className="modal-box">
          <div className='flex flex-row'>
            <button onClick={closeModal}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
              </svg>
            </button>
            <h3 className="ml-5 font-bold text-lg">{pokemonInfo?.name}</h3>
          </div>

          <div className='flex justify-center mb-10'>
            {pokemonInfo?.sprite && (
              <Image src={pokemonInfo?.sprite}
                width={150}
                height={150}
                className='mt-[40px]'
              />)
            }
          </div>

          <div className='flex justify-center mb-10'>
            <span className="font-bold">Type:</span>
            {pokemonInfo?.types.map((type, index) => (
              <TypesIcon key={index} type={type} />
            ))}
          </div>

          <div className='flex justify-center mb-10'>
            <span className="font-bold">Abilities:</span>
            {pokemonInfo?.abilities.map((ability, index) => (
              <AbilityIcon key={index} ability={ability?.ability} />
            ))}
          </div>

          <div className="modal-action flex justify-center">
            <button className="btn">Add To Team</button>
          </div>
        </div>
      }
    </dialog>
  )
}

export default PokemonModal