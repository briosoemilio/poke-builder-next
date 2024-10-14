'use client'
import React, { useEffect, useMemo, useState } from 'react'
import useFetchTeam from './useFetchTeam'
import TeamListComponent from './_components/TeamListComponent'
import PreviewPokemonComponent from './_components/PreviewPokemonComponent'
import useFetchPokemonInfo from '../pokemon/useFetchPokemonInfo'

const MyTeam = () => {
  const { team, loading } = useFetchTeam()
  const [selectedPokemon, selectPokemon] = useState(0)
  const previewPokemon = useMemo(() => {
    return team[selectedPokemon]
  }, [team, selectedPokemon])
  return (
    <div className="p-5 lg:px-20 flex lg:flex-row flex-col items-center lg:justify-evenly">
      <PreviewPokemonComponent pokemonInfo={previewPokemon} />
      <div className='flex flex-col mt-10 lg:mt-0'>
        {team.map((pokemon, id) => (
          <button onClick={() => selectPokemon(id)}>
            <TeamListComponent
              key={id}
              pokemon={pokemon}
              isSelected={selectedPokemon === id}
              setPokemon={selectPokemon}
            />
          </button>
        ))}
      </div>
    </div>
  )
}

export default MyTeam