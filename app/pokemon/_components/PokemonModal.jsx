'use client'

import React, { useEffect, useState } from 'react'

import PokemonInfo from './PokemonInfo'
import PokemonAdd from './PokemonAdd'

const PokemonModal = ({ modalContent, openInfo, openAdd, pokemonInfo, loading }) => {

  return (
    <dialog id="pokemon_modal" className="modal">
      {modalContent === 'info' ?
        <PokemonInfo nextPage={() => openAdd()} pokemonInfo={pokemonInfo} loading={loading} /> :
        <PokemonAdd prevPage={() => openInfo()} pokemonInfo={pokemonInfo} />
      }
    </dialog>
  )
}

export default PokemonModal