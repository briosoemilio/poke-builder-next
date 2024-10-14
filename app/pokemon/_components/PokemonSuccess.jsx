import Lottie from 'lottie-react'
import React from 'react'
import PokeballSpin from '../../../public/lottie/pokeball_spin.json'
import { Button } from '../../_components'

const PokemonSuccess = () => {
  const closeModal = () => document.getElementById('pokemon_modal').close()
  return (
    <div className="modal-box flex flex-col justify-center items-center">
      <h1 className='text-2xl text-center'>Success</h1>
      <div className='my-10'>
        <Lottie animationData={PokeballSpin} style={{ height: 120 }} />
      </div>
      <span className='text-center mb-5'>Successfully added pokemon to your team!</span>
      <Button name={"OK"} onClick={closeModal} />
    </div>
  )
}

export default PokemonSuccess