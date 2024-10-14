import React, { useEffect, useState } from "react";

const useFetchPokemonInfo = () => {
  const [pokemonInfo, setPokemonInfo] = useState(null)
  const [loading, setLoading] = useState(false)

  const fetchPokemonInfo = async (identifier) => {
    setLoading(true)
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_WP_BASE_URL}/wp-json/pokemon/v1/data/${identifier}`);

      if (!response.ok) {
        console.log('response not ok')
        throw new Error(`Error: ${response.status}`);
      }

      const data = await response.json();
      setPokemonInfo(data)
    } catch (error) {
      setPokemonInfo(null)
      console.log('error occurred', { error })
    } finally {
      setLoading(false)
    }
  };

  const openModal = () => document.getElementById('pokemon_modal').showModal()

  return { pokemonInfo, fetchPokemonInfo, loading, openModal }
}

export default useFetchPokemonInfo