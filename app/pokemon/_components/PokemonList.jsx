'use client'
import React, { useState } from 'react'
import useFetchPokemons from '../useFetchPokemons'
import useFetchPokemonInfo from '../useFetchPokemonInfo'
import { capitalize } from 'lodash'
import { Button } from '../../_components'
import PokemonModal from './PokemonModal'

const PokemonList = () => {
  // Hookes
  const { pokemons, page, nextPage, prevPage, loading } = useFetchPokemons()
  const { pokemonInfo, openModal, fetchPokemonInfo, loading: infoLoading } = useFetchPokemonInfo()

  // React Hooks
  const [modalContent, setModalContent] = useState('info')
  const [pokeName, setPokeName] = useState('')

  // Functions
  const openInfo = () => setModalContent('info')
  const openAdd = () => setModalContent('add')
  const submitSearch = () => {
    openModal()
    fetchPokemonInfo(pokeName)
  }

  return (
    <>
      <div className='flex justify-center mb-10'>
        <label className="input input-bordered flex items-center gap-2">
          <input type="text" className="grow" placeholder={'Enter Pokemon Name'} onChange={(e) => setPokeName(e.target.value)} />
        </label>
        <Button name={"SEARCH"}
          onClick={submitSearch}
          disabled={loading}
          loading={loading}
          className={'ml-5'}
        />
      </div>
      <div>
        <table className='mx-auto' style={{ borderCollapse: 'collapse', }}>
          <thead>
            <tr>
              <th style={{ border: '1px solid #ddd', padding: '8px', width: '50px' }}>#</th>
              <th className="min-w-[300px]" style={{ border: '1px solid #ddd', padding: '8px' }}>Name</th>
            </tr>
          </thead>
          <tbody>
            {pokemons.map((pokemon, index) => (
              <tr key={index} style={{ border: '1px solid #ddd' }}>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                  <a href={pokemon.url} target="_blank" rel="noopener noreferrer">
                    {pokemon.url.replace("https://pokeapi.co/api/v2/pokemon/", "").replace("/", "")}
                  </a>
                </td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                  <div className="cursor-pointer underline" onClick={async () => {
                    openModal()
                    fetchPokemonInfo(pokemon.name)
                  }
                  }>
                    {capitalize(pokemon.name)}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className='flex items-center justify-center mt-5'>
          <Button
            className="mr-5"
            name={"Prev"}
            onClick={prevPage}
            loading={loading}
            disabled={loading || page == 1}
          />
          <Button
            name={"Next"}
            onClick={nextPage}
            disabled={loading || pokemons < 50}
            loading={loading}
          />
        </div>
      </div>
      <PokemonModal
        modalContent={modalContent}
        openAdd={openAdd}
        openInfo={openInfo}
        pokemonInfo={pokemonInfo}
        loading={infoLoading}
      />
    </>
  )
}

export default PokemonList