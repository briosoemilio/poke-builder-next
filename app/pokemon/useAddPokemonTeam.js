import React, { useEffect, useState } from "react";

const useAddPokemonTeam = () => {
  const [loading, setLoading] = useState(false)

  const addPokemon = async (requestData) => {
    setLoading(true)
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_WP_BASE_URL}/wp-json/pokemon/v1/add-team`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData)
      });
      const data = await response.json();
      console.log('success!! ', data)
      return data
    } catch (error) {
      console.log('error occurred', { error })
      return null
    } finally {
      setLoading(false)
    }
  };

  return { addPokemon, loading }
}

export default useAddPokemonTeam