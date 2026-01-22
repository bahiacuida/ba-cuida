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
import { CHART_COLORS } from '../constants'

const DEFAULT_AVG_LETTER_WIDTH = 9.5
const DEFAULT_FONT_SIZE = 16
const DEFAULT_MAX_CHAR_PER_LINE = 30

function letterWidthFromFontSize(fontSize) {
  return (DEFAULT_AVG_LETTER_WIDTH / DEFAULT_FONT_SIZE) * fontSize
}

function wrap(text, width = 6) {
  const regex = new RegExp(`(.{1,${width}})(\\s|$)`, 'g')

  return (text + '').match(regex) || [text]
}

const AutoWrapTick = ({
  x,
  y,
  payload,
  maxCharPerLine = DEFAULT_MAX_CHAR_PER_LINE,
  fontSize = DEFAULT_FONT_SIZE,
}) => {
  const lines = wrap(payload.value, maxCharPerLine) // max chars per line
  return (
    <text
      x={x}
      y={y + fontSize - (lines.length * fontSize) / 2}
      textAnchor="end"
    >
      {lines.map((line, i) => (
        <tspan key={i} x={x} dy={i === 0 ? 0 : fontSize}>
          {line}
        </tspan>
      ))}
    </text>
  )
}

function _entryTotal(entry, bars) {
  return bars.reduce((acc, bar) => acc + (entry[bar.dataKey] || 0), 0)
}

export function BarChart({
  data,
  bars,
  layout = 'horizontal',
  xAxis = {},
  yAxis = {},
  barGroupKey = null,
  style = {},
  maxCharPerLine = DEFAULT_MAX_CHAR_PER_LINE,
  fontSize = DEFAULT_FONT_SIZE,
}) {
  const _data = useMemo(() => {
    return [...data]
      .sort((entryA, entryB) => {
        const valueA = _entryTotal(entryA, bars)
        const valueB = _entryTotal(entryB, bars)

        return valueA <= valueB ? 1 : -1
      })
      .map((entry, index) => ({
        ...entry,
        __order: index,
      }))
  }, [data, bars])

  return (
    <div
      style={{
        overflow: 'auto',
      }}
    >
      <BarChart_
        layout={layout}
        style={{
          width: '100%',
          // maxWidth: '700px',
          // maxHeight: '70vh',
          aspectRatio: 1.618,
          fontSize: fontSize,
          ...style,
        }}
        responsive
        data={_data}
        margin={{ top: 20, right: 40, bottom: 20, left: 0 }}
        // margin={{ top: 5, right: 0, left: 0, bottom: 5 }}
      >
        <Legend
          itemSorter={(item) => item.__order}
          verticalAlign="top"
          align="center"
          layout="horizontal"
          wrapperStyle={{
            paddingBottom: 16,
          }}
        />
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          width="auto"
          dataKey={layout === 'horizontal' ? barGroupKey : undefined}
          type={layout === 'horizontal' ? 'category' : 'number'}
          interval={0}
          textAnchor="start"
          angle={45}
          height={100}
          {...xAxis}
        />
        <YAxis
          dataKey={layout === 'vertical' ? barGroupKey : undefined}
          type={layout === 'horizontal' ? 'number' : 'category'}
          interval={0}
          width={
            layout === 'vertical'
              ? maxCharPerLine * letterWidthFromFontSize(fontSize)
              : 'auto'
          }
          tick={
            layout === 'vertical' ? (
              <AutoWrapTick
                fontSize={fontSize}
                maxCharPerLine={maxCharPerLine}
              />
            ) : undefined
          }
          {...yAxis}
        />
        {bars.map((bar, index) => (
          <Bar
            key={index}
            fill={CHART_COLORS[index % CHART_COLORS.length]}
            {...bar}
          />
        ))}
        <Tooltip itemSorter={(item) => item.__order} />
      </BarChart_>
    </div>
  )
}
