import { Box, EvenSpacedList, Flex, Markdown } from '@orioro/react-ui-core'
import { Heading } from '@radix-ui/themes'
import { Chart } from '../Chart'

export function IndicatorBody({ indicator }) {
  const { title, summaryCards, details, charts } = indicator
  return (
    <Flex direction="column" gap="6">
      <Heading
        as="h2"
        style={{
          textTransform: 'uppercase',
          fontWeight: 'bold',
          color: '#FF6219',
        }}
      >
        {title}
      </Heading>

      {Array.isArray(summaryCards) && (
        <EvenSpacedList columns={2} gap="4">
          {summaryCards.map(({ children, ...props }) => (
            <Flex
              p="3"
              direction="row"
              alignItems="center"
              style={{
                background: '#FFECE5',
                borderRadius: '20px',
              }}
              {...props}
            >
              {children}
            </Flex>
          ))}
        </EvenSpacedList>
      )}

      {details && (
        <details
          style={{
            padding: '20px',
            background: '#FFECE5',
            borderRadius: '20px',
          }}
        >
          <summary>O que esse indicador significa?</summary>
          <div
            style={{
              marginTop: 10,
            }}
          >
            <Markdown children={details} />
          </div>
        </details>
      )}

      <Flex gap="5">
        {charts.map((chart, index) => (
          <Chart {...chart} />
        ))}
      </Flex>
    </Flex>
  )
}
