import Image from 'next/image'
import React from 'react'

const PokemonMissing = () => {
  const closeModal = () => document.getElementById('pokemon_modal').close()
  return (
    <div className="modal-box flex flex-col justify-center">
      <div className='flex flex-row '>
        <button onClick={closeModal}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
          </svg>
        </button>
        <h3 className="ml-5 font-bold text-2xl">Pokemon not found.</h3>
      </div>
      <div className="flex-1 flex justify-center my-5">
        <Image src={'/missing_no.png'} height={300} width={300} />
      </div>
      <span className='text-center'>
        Make sure you spelled the name correctly.
      </span>
    </div>
  )
}

export default PokemonMissing