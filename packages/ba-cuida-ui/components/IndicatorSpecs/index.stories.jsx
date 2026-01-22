import { Button } from '@radix-ui/themes'
import { slugify } from '@orioro/util'

import { fetchGql } from '@/components/fetchGql'

const meta = {
  title: 'Pages / DataPage / CreateIndicators',
  parameters: {
    // layout: 'fullscreen',
  },
}

export default meta
export const Basic = () => {
  return (
    <Button
      onClick={async (e) => {
        const result = await fetchGql('http://localhost:4000/api/graphql', {
          query: `
              mutation($data: [IndicatorCreateInput!]!) {
                createIndicators(data: $data) {
                  id
                }
              }
            `,
          variables: {
            data: STATIC_INDICATORS.map((card, index) => ({
              ...card,
              slug: slugify(card.title + ' ' + index),
              axis: card.axis.slug,
            })),
          },
        })
      }}
    >
      create
    </Button>
  )
}
