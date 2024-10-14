'use client'

import React, { useEffect, useState } from 'react'

import PokemonInfo from './PokemonInfo'
import PokemonAdd from './PokemonAdd'
import PokemonMissing from './PokemonMissing'
import PokemonSuccess from './PokemonSuccess'

const PokemonModal = ({ modalContent, openInfo, openAdd, openSuccess, pokemonInfo, loading }) => {

  return (
    <dialog id="pokemon_modal" className="modal">
      {
        loading ? (
          <span className='loading loading-spinner' />
        ) : !pokemonInfo ? (
          <PokemonMissing pokemonInfo={pokemonInfo} />
        ) : modalContent === 'info' ? (
          <PokemonInfo nextPage={() => openAdd()} pokemonInfo={pokemonInfo} />
        ) : modalContent === 'add' ? (
          <PokemonAdd prevPage={() => openInfo()} nextPage={() => openSuccess()} pokemonInfo={pokemonInfo} />
        ) : modalContent === 'success' ? (
          <PokemonSuccess />
        ) : (
          null
        )
      }
    </dialog>
  )
}

export default PokemonModal