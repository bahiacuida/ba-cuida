import { groupBy } from 'lodash-es'
import { useMemo } from 'react'
import {
  BarChart as BarChart_,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts'

function wrap(text, width = 6) {
  const regex = new RegExp(`(.{1,${width}})(\\s|$)`, 'g')

  console.log('text', text)

  return (text + '').match(regex) || [text]
}

const AutoWrapTick = ({ x, y, payload }) => {
  const lines = wrap(payload.value, 30) // max chars per line
  return (
    <text x={x} y={y} dy={16} textAnchor="end">
      {lines.map((line, i) => (
        <tspan key={i} x={x} dy={i === 0 ? 0 : 14}>
          {line}
        </tspan>
      ))}
    </text>
  )
}

export function BarChart({
  data,
  bars,
  layout = 'horizontal',
  xAxis = {},
  yAxis = {},
  barGroupKey = null,
}) {
  // const data_ = useMemo(() => {

  //   // const groupedTotals = barGroupKey ? groupBy(data, barGroupKey)

  // }, [data, barGroupKey])

  return (
    <BarChart_
      layout={layout}
      style={{
        width: '100%',
        // maxWidth: '700px',
        // maxHeight: '70vh',
        aspectRatio: 1.618,
      }}
      responsive
      data={data}
      margin={{ top: 5, right: 0, left: 0, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis
        width="auto"
        dataKey={layout === 'horizontal' ? barGroupKey : null}
        type={layout === 'horizontal' ? 'category' : 'number'}
        interval={0}
        {...xAxis}
      />
      <YAxis
        dataKey={layout === 'vertical' ? barGroupKey : null}
        type={layout === 'horizontal' ? 'number' : 'category'}
        interval={0}
        width={layout === 'vertical' ? 300 : 'auto'}
        tick={layout === 'vertical' ? <AutoWrapTick /> : null}
        {...yAxis}
      />
      <Tooltip />
      <Legend />
      {bars.map((bar, index) => (
        <Bar key={index} {...bar} />
      ))}
    </BarChart_>
  )
}
