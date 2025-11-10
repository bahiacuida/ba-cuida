import { Box, color, Flex, Markdown } from '@orioro/react-ui-core'
import { SiteWidthContainer } from '@/components/SiteWidthContainer'
import { PaperFramedSection } from '@/components/PaperFramedSection'
import { PaperScrap } from '@/components/PaperScrap'
import { PaperCard } from '@/components/PaperCard'
import { Heading, Text } from '@radix-ui/themes'

export function PessoasIdosas() {
  return (
    <>
      <SiteWidthContainer>
        <Flex
          py="5"
          direction="column"
          gap="4"
          alignItems="center"
          maxWidth="600px"
          style={{
            margin: 'auto',
            textAlign: 'center',
          }}
        >
          <img
            style={{
              height: 300,
            }}
            src="/assets/home/03_capitulo_ana/ilustracoes_ana/Ana_06.svg"
          />
          <Markdown
            style={{ fontSize: '1.25rem', fontWeight: 300 }}
            children={
              'Ana também cuida da sua mãe idosa, que tem uma dependência ' +
              'moderada e precisa de cuidados constantes.'
            }
          />
        </Flex>
      </SiteWidthContainer>
      <PaperFramedSection style={{ position: 'relative', overflow: 'hidden' }}>
        <SiteWidthContainer>
          <Flex direction="column" gap="8" py="9">
            <Flex
              direction={{
                xs: 'column',
                md: 'row',
              }}
              alignItems="center"
            >
              <Flex
                direction="column"
                gap="4"
                style={{
                  width: {
                    xs: '100%',
                    md: '40%',
                  },
                }}
              >
                <Markdown
                  children={
                    'A população baiana envelheceu, mas esse processo não aconteceu da ' +
                    'mesma forma para todos. As mulheres estão vivendo mais do que os homens e, ' +
                    'como são as mulheres que cuidam mais das outras pessoas, elas ' +
                    'continuam cuidando por mais tempo.'
                  }
                />
                <PaperScrap
                  style={{
                    color: 'var(--marrom-texto)',
                    position: 'relative',
                  }}
                >
                  <Box p="6">
                    <Heading
                      as="h2"
                      style={{
                        fontSize: '1.25rem',
                        lineHeight: '1.2',
                      }}
                    >
                      Isso significa que muitas mulheres idosas, que{' '}
                      <strong>
                        deveriam estar sendo cuidadas, continuam sendo as
                        cuidadoras de pessoas ainda mais velhas.
                      </strong>
                    </Heading>
                  </Box>
                </PaperScrap>
                <Markdown
                  children={
                    'Isso significa que muitas mulheres idosas, ' +
                    'que deveriam estar sendo cuidadas, continuam ' +
                    'sendo as cuidadoras de pessoas ainda mais velhas.'
                  }
                />
              </Flex>
              <Flex
                style={{
                  width: {
                    xs: '100%',
                    md: '60%',
                  },
                }}
                gap="3"
              >
                <PaperCard>
                  <img src="/assets/home/03_capitulo_ana/graficos_ana/Ana_Grafico_06.svg" />
                </PaperCard>
                <cite>
                  Fonte: IBGE. Pesquisa Nacional por Amostra de Domicílios
                  Contínua, acumulado de primeiras visitas, exceto 2020-2021,
                  acumulado de quintas visitas, devido à pandemia de Covid-19.
                </cite>
              </Flex>
            </Flex>
            <Markdown
              style={{
                maxWidth: '600px',
                marginLeft: 'auto',
                marginRight: 'auto',
                textAlign: 'center',
              }}
              children={
                'Essa realidade é também resultado da ausência do Estado. ' +
                'Na Bahia, são mais de 2 milhões de pessoas idosas, mas apenas ' +
                '182 Instituições públicas de Longa Permanência. '
              }
            />
            <Heading
              as="h2"
              style={{
                maxWidth: '800px',
                marginLeft: 'auto',
                marginRight: 'auto',
                textAlign: 'center',
              }}
            >
              Quando o{' '}
              <strong style={{ color: '#FF8A67' }}>
                Estado não assume sua parte nos cuidados
              </strong>
              , ele transfere a responsabilidade para as famílias,
              <strong style={{ color: '#FF8A67' }}>
                sobrecarregando ainda mais as mulheres
              </strong>
              .
            </Heading>
          </Flex>
        </SiteWidthContainer>
      </PaperFramedSection>
    </>
  )
}
