import React, { useEffect, useState } from "react";

const useFetchAbilityInfo = (abilityName) => {
  const [abilityInfo, setAbilityInfo] = useState(null)

  useEffect(() => {
    const fetchAbilityInfo = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_WP_BASE_URL}/wp-json/ability/v1/data/${abilityName}`);

        if (!response.ok) {
          console.log('response not ok')
          throw new Error(`Error: ${response.status}`);
        }

        const data = await response.json();
        setAbilityInfo(data)
      } catch (error) {
        console.log('error occurred', { error })
      }
    };
    fetchAbilityInfo()
  }, [])

  return { abilityInfo }
}

export default useFetchAbilityInfo