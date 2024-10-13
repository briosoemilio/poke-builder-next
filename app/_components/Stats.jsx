import React from 'react'
import { Chart, registerables } from 'chart.js';
import { Bar, Radar } from 'react-chartjs-2'

Chart.register(...registerables);

const Stats = ({ stats }) => {
  const parsedStats = stats?.reduce((acc, { base_stat, stat }) => {
    // Use the stat name as the key and base_stat as the value
    acc[stat.name] = base_stat;
    return acc;
  }, {});

  const data = {
    labels: ['HP', 'Attack', 'Defense', 'Special Attack', 'Special Defense', 'Speed'],
    datasets: [
      {
        label: 'Base Stats',
        data: [
          parsedStats?.hp || 0,
          parsedStats?.attack || 0,
          parsedStats?.defense || 0,
          parsedStats?.['special-attack'] || 0,
          parsedStats?.['special-defense'] || 0,
          parsedStats?.speed || 0,
        ],
        fill: true,
        borderWidth: 2,
      },
    ],
  };

  const options = {
    scales: {
      r: {
        min: 0,
        max: 255, // Adjust based on your needs
      },
    },
  };

  return (
    <Bar data={data} options={options} />
  )
}

export default Stats