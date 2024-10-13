import React, { useEffect, useState } from "react";

const useFetchPokemons = () => {
  const [pokemons, setPokemons] = useState([])
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchPokemons = async () => {
      setLoading(true)
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_WP_BASE_URL}/wp-json/pokemon/v1/list?limit=50&page=${page}`);

        if (!response.ok) {
          console.log('response not ok')
          throw new Error(`Error: ${response.status}`);
        }

        const data = await response.json();
        setPokemons(data.results)
      } catch (error) {
        console.log('error occurred', { error })
      } finally {
        setLoading(false)
      }
    };
    fetchPokemons();
  }, [page])

  const nextPage = () => setPage((currPage) => currPage + 1)
  const prevPage = () => setPage((currPage) => currPage - 1)

  return { pokemons, page, nextPage, prevPage, loading }
}

export default useFetchPokemons