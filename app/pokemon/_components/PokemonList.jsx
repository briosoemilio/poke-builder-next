'use client'
import React from 'react'
import useFetchPokemons from '../useFetchPokemons'
import { capitalize } from 'lodash'
import { Button } from '../../_components'

const PokemonList = () => {
  const { pokemons, page, nextPage, prevPage, loading } = useFetchPokemons()
  return (
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
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{capitalize(pokemon.name)}</td>
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
  )
}

export default PokemonList