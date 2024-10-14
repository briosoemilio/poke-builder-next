'use client'

import React, { useEffect, useState } from 'react'

import PokemonInfo from './PokemonInfo'
import PokemonAdd from './PokemonAdd'
import PokemonMissing from './PokemonMissing'

const PokemonModal = ({ modalContent, openInfo, openAdd, pokemonInfo, loading }) => {

  return (
    <dialog id="pokemon_modal" className="modal">
      {
        loading ? (
          <span className='loading loading-spinner' />
        ) : !pokemonInfo ? (
          <PokemonMissing pokemonInfo={pokemonInfo} />
        ) : modalContent === 'info' ? (
          <PokemonInfo nextPage={() => openAdd()} pokemonInfo={pokemonInfo} />
        ) : (
          <PokemonAdd prevPage={() => openInfo()} pokemonInfo={pokemonInfo} />
        )
      }
    </dialog>
  )
}

export default PokemonModal