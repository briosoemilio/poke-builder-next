import React, { useState, useEffect } from 'react'

const StatsSetter = ({ stats, setStats }) => {
  const MAX_EV_COUNT = 252
  const TOTAL_EVS = 510


  const [availableEVs, setAvailableEVs] = useState(TOTAL_EVS)

  const calculateTotalEVs = () => {
    return stats.reduce((total, stat) => total + (stat.value - stat.baseStat), 0)
  }

  const handleSliderChange = (index, value) => {
    const updatedValues = [...stats]
    const baseStat = updatedValues[index].baseStat
    const newValue = Math.max(value, baseStat)

    updatedValues[index].value = newValue
    setStats(updatedValues)

    const totalEVs = calculateTotalEVs()
    setAvailableEVs(TOTAL_EVS - totalEVs)
  }

  useEffect(() => {
    // Set initial available EVs on mount
    const totalEVs = calculateTotalEVs()
    setAvailableEVs(TOTAL_EVS - totalEVs)
  }, [])

  return (
    <div className='mb-10'>
      {stats.map((parsedStat, index) => {
        const { stat, value } = parsedStat

        return (
          <div key={index} className='flex flex-row items-center justify-center mb-3'>
            <span className='mr-3 w-24'>{stat}</span>
            <input
              type="range"
              min={0}
              max={parsedStat.baseStat + MAX_EV_COUNT}
              value={value}
              onChange={(e) => handleSliderChange(index, e.target.value)}
              className="range"
            />
            <span className='ml-3'>{value}</span>
          </div>
        )
      })}
      <span>Remaining EVs: {availableEVs >= 0 ? availableEVs : 0}</span>
    </div>
  )
}

export default StatsSetter
