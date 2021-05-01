import React from 'react'
import { useSelector } from 'react-redux'
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import styles from './Chart.module.css'
import { selectCountriesForChart } from '../../countries.slice'

export const PopulationChart: React.FC = () => {
  const data = useSelector(selectCountriesForChart)
  const getHeight = () => {
    const heightByData = data.length * 50
    if (heightByData < 200) return 200
    return heightByData
  }
  return (
    <ResponsiveContainer height={getHeight()}>
      <BarChart
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 60,
          bottom: 5,
        }}
        layout="vertical"
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis type="number" />
        <YAxis dataKey="name" type="category" scale="band" label="country name" />
        <Tooltip />
        <Legend />
        <Bar dataKey="ppl" fill="#8884d8" barSize={10} />
      </BarChart>
    </ResponsiveContainer>
  )
}
