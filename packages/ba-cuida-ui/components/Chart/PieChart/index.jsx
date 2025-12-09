import { useMemo } from 'react'
import { Cell, Legend, Pie, PieChart as PieChart_ } from 'recharts'

const RADIAN = Math.PI / 180
const COLORS = [
  '#0088FE',
  '#00C49F',
  '#FFBB28',
  '#FF8042',
  'red',
  'blue',
  'green',
  'skyblue',
]

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}) => {
  if (cx == null || cy == null || innerRadius == null || outerRadius == null)
    return null

  const radius = innerRadius + (outerRadius - innerRadius) * 0.5
  const x = Number(cx) + radius * Math.cos(-(midAngle || 0) * RADIAN)
  const y = Number(cy) + radius * Math.sin(-(midAngle || 0) * RADIAN)

  return percent <= 0.02 ? null : (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? 'start' : 'end'}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(1)}%`}
    </text>
  )
}

export function PieChart({ isAnimationActive = true, data, dataLabelKey }) {
  const _data = useMemo(() => {
    let parsedData = null

    if (Array.isArray(data)) {
      parsedData = data
    } else if (typeof data === 'object') {
      parsedData = Object.entries(data).map(([name, value]) => ({
        name,
        value,
      }))
    } else {
      throw new TypeError(`Invalid data format ${data}`)
    }

    return parsedData.sort((a, b) => (a.value <= b.value ? 1 : -1))
  }, [data])

  return (
    <PieChart_
      style={{
        width: '100%',
        maxWidth: '500px',
        maxHeight: '80vh',
        aspectRatio: 1,
      }}
      responsive
    >
      <Pie
        data={_data}
        labelLine={false}
        label={renderCustomizedLabel}
        fill="#8884d8"
        dataKey="value"
        isAnimationActive={isAnimationActive}
      >
        {_data.map((entry, index) => (
          <Cell
            key={`cell-${entry.name}`}
            fill={COLORS[index % COLORS.length]}
          />
        ))}
      </Pie>
      <Legend layout="vertical" verticalAlign="middle" align="right" />
    </PieChart_>
  )
}
