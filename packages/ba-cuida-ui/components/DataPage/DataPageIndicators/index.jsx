import {
  EvenSpacedList,
  Flex,
  Markdown,
  LoadingOverlay,
  Box,
} from '@orioro/react-ui-core'
import { IndicatorCard } from '../../IndicatorCard'
import { AXIS_BY_SLUG } from '../../IndicatorSpecs/constants'
import { useQuery } from '@tanstack/react-query'
import { fetchGql } from '@/components/fetchGql'

async function defaultFetchIndicators() {
  const data = await fetchGql(process.env.NEXT_PUBLIC_API_URL, {
    query: `
      query {
        indicators {
          id
          title
          summaryCards
          details
          charts

          cardTitle
          cardDescription
          categories
          axis
        }
      }
    `,
  })

  return data.indicators.map((indicator) => ({
    ...indicator,
    axis: AXIS_BY_SLUG[indicator.axis],
  }))
}

export function DataPageIndicators({
  fetchIndicators = defaultFetchIndicators,
}) {
  const cardsQuery = useQuery({
    queryKey: ['DataPageIndicators'],
    queryFn: fetchIndicators,
  })

  return (
    <Flex direction="column" alignItems="center">
      <Markdown
        style={{
          maxWidth: '500px',
          textAlign: 'center',
        }}
        children={
          'O painel de dados reune indicadores sociais dos cuidados. ' +
          'Cada cartão é interativo: ao clicar, você pode explorar ' +
          'gráficos e dados detalhados sobre cada tema. Os cartões ' +
          'que trazem o símbolo de atenção representam situações mais ' +
          'graves, que exigem ação rápida do poder público.'
        }
      />

      <Box style={{ position: 'relative', minHeight: '300px' }}>
        {cardsQuery.status === 'pending' && (
          <LoadingOverlay message="Carregando" />
        )}

        {cardsQuery.data && (
          <EvenSpacedList
            columns={{ xs: 1, sm: 2, md: 3 }}
            justifyContent="center"
            gap="4"
          >
            {cardsQuery.data.map((card, index) => (
              <IndicatorCard
                {...card}
                key={card.id || card.title || index}
                indicator={card}
              />
            ))}
          </EvenSpacedList>
        )}
      </Box>
    </Flex>
  )
}
