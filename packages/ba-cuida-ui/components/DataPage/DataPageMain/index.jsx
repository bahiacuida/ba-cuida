import { Tabs } from '@radix-ui/themes'
import { Box, Flex } from '@orioro/react-ui-core'
import { SiteWidthContainer } from '../../SiteWidthContainer'
import { DataPageIndicators } from '../DataPageIndicators'
import { DataPageMap } from '../DataPageMap'

export function DataPageMain({ fetchIndicators }) {
  return (
    <section>
      <SiteWidthContainer>
        <Tabs.Root defaultValue={'indicadores'}>
          <Flex direction="column" gap="40px">
            <Tabs.List
              size="2"
              style={{
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
            >
              <Tabs.Trigger
                value="indicadores"
                style={{
                  fontSize: '1rem',
                }}
              >
                Painel de dados
              </Tabs.Trigger>
              <Tabs.Trigger
                value="mapa"
                style={{
                  fontSize: '1rem',
                }}
              >
                Mapa georreferenciado
              </Tabs.Trigger>
              {/*<Tabs.Trigger
                value="infografico"
                style={{
                  fontSize: '1rem',
                }}
              >
                Infográfico
              </Tabs.Trigger>*/}
            </Tabs.List>

            <Box pb="100px">
              <Tabs.Content value="indicadores">
                <DataPageIndicators fetchIndicators={fetchIndicators} />
              </Tabs.Content>

              <Tabs.Content value="mapa">
                <DataPageMap />
              </Tabs.Content>

              <Tabs.Content value="infografico">Infográfico</Tabs.Content>
            </Box>
          </Flex>
        </Tabs.Root>
      </SiteWidthContainer>
    </section>
  )
}
