import React, { useEffect, useState } from "react";

const useFetchTeam = () => {
  const [team, setTeam] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchTeam = async () => {
      setLoading(true)
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_WP_BASE_URL}/wp-json/pokemon_team/v1/all`);

        if (!response.ok) {
          console.log('response not ok')
          throw new Error(`Error: ${response.status}`);
        }

        const data = await response.json();
        setTeam(data)
      } catch (error) {
        setTeam([])
        console.log('error occurred', { error })
      } finally {
        setLoading(false)
      }
    };
    fetchTeam()
  }, [])

  return { team, loading }
}

export default useFetchTeam