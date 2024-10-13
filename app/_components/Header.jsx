import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const Header = () => {
  return (
    <div className='p-5 lg:px-20 flex flex-row items-center justify-between '>
      <Image src={'/pokebuilder_logo.png'}
        width={100}
        height={100}
        style={{ width: 200 }}
      />
      <div>
        <Link href="/" className="text-white mr-5">Home</Link>
        <Link href="pokemon" className="text-white mr-5">Pokemon</Link>
        <Link href="team" className="text-white mr-5">My Team</Link>
      </div>
    </div>
  )
}
