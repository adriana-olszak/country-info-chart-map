import React from 'react'
import { useSelector } from 'react-redux'
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { selectCountriesForChart } from '../../countries.slice'
import { NoData } from '../../../../shared/components/NoData'

export const PopulationChart: React.FC = () => {
  const data = useSelector(selectCountriesForChart)
  const getHeight = () => {
    const heightByData = data.length * 50
    if (heightByData < 200) return 200
    return heightByData
  }

  if (!data.length) return <NoData text="Search for a country to see the data" />

  return (
    <ResponsiveContainer minWidth="300px" height={getHeight()}>
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
        <YAxis
          dataKey="name"
          type="category"
          scale="band"
          tick={({ x, y, payload }) => <CustomizedAxisTick x={x} y={y} payload={payload} />}
        />
        <Tooltip />
        <Legend />
        <Bar dataKey="ppl" fill="#8884d8" barSize={10} />
      </BarChart>
    </ResponsiveContainer>
  )
}

const CustomizedAxisTick: React.FC<{ x: number; y: number; payload: { value: string } }> = ({ x, y, payload }) => {
  const val = payload.value.length > 10 ? `${payload.value.slice(0, 10)}...` : payload.value

  return (
    <g transform={`translate(${x},${y})`}>
      <text x={0} y={0} dy={5} textAnchor="end" fill="#666" fontSize="smaller">
        {val}
      </text>
    </g>
  )
}
