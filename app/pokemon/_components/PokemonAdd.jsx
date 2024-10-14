import React, { useMemo, useState } from 'react'
import Image from 'next/image'
import AbilityIcon from '../../_components/AbilityIcon'
import StatsSetter from '../../_components/StatsSetter'
import useAddPokemonTeam from '../useAddPokemonTeam'
import { Button } from '../../_components'
import useFetchTeam from '../../team/useFetchTeam'

const PokemonAdd = ({ pokemonInfo, prevPage, nextPage }) => {
  const [name, setName] = useState('')
  const [selectedAbility, setAbility] = useState(pokemonInfo?.abilities[0]?.ability?.name)
  const initialStatValues = pokemonInfo?.stats.map((stat) => ({
    stat: stat?.stat?.name,
    value: stat?.['base_stat'],
    baseStat: stat?.['base_stat'] // Store baseStat for calculations
  }))
  const [stats, setStats] = useState(initialStatValues)
  const [errorMessage, setError] = useState('')
  const { addPokemon, loading } = useAddPokemonTeam()
  const { team } = useFetchTeam()

  const onPressConfirm = async () => {
    if (team?.length >= 6) return setError('Team is already full')
    const requestData = {
      name: pokemonInfo?.name,
      nickname: name,
      ability: selectedAbility,
      stats: JSON.stringify(stats)
    }
    const res = await addPokemon(requestData)
    if (res?.message === "Pokémon team added successfully") { nextPage() }
  }

  return (
    <div className="modal-box">
      <div className='flex flex-row'>
        <button onClick={() => prevPage()}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
          </svg>
        </button>
        <h3 className="ml-5 font-bold text-lg">Add {pokemonInfo?.name}?</h3>
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
        <label className="input input-bordered flex items-center gap-2">
          Name
          <input type="text" className="grow" placeholder={pokemonInfo?.name} onChange={(e) => setName(e.target.value)} />
        </label>
      </div>

      <div className='mb-10'>
        <span className="font-bold">Select Ability:</span>
        <div className='flex justify-center items-center mt-3'>
          {pokemonInfo?.abilities.map((ability, index) => (
            <AbilityIcon
              key={index}
              ability={ability?.ability}
              onClick={() => setAbility(ability?.ability?.name)}
              isSelected={ability?.ability?.name === selectedAbility}
              type={pokemonInfo?.types[0]}
            />
          ))}
        </div>
      </div>

      <div className='mb-10'>
        <span className="font-bold">Set Stats:</span>
        <div className='flex justify-center items-center mt-3'>
          <StatsSetter stats={stats} setStats={setStats} />
        </div>
      </div>

      <div>

      </div>

      <div className="modal-action flex flex-col items-center">
        <Button name={"Confirm"} onClick={onPressConfirm} loading={loading} />
        {errorMessage && <span className='mt-1 text-primaryRed'>{errorMessage}</span>}
      </div>
    </div>
  )
}

export default PokemonAdd