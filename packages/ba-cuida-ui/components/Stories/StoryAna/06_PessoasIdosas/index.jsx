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
            alt="Ilustração de Ana ajudando sua mãe, uma mulher idosa, negra e de bengala, a vestir um casaco. As duas estão em um ambiente interno decorado com um quadro e elementos coloridos ao fundo."
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
        <SiteWidthContainer
          style={{
            position: 'relative',
          }}
        >
          <Flex direction="column" gap="8" py="9">
            <Heading
              as="h3"
              style={{
                fontSize: '2rem',
                lineHeight: '1.2',
              }}
            >
              O cuidado das{' '}
              <strong style={{ color: 'var(--orange-text-dark-bg)' }}>
                pessoas idosas
              </strong>
            </Heading>
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
                  position: 'relative',
                  width: {
                    xs: '100%',
                    md: '40%',
                  },
                }}
                pl={{
                  xs: '0',
                  md: '80px',
                }}
              >
                <Box
                  style={{
                    display: {
                      xs: 'none',
                      md: 'block',
                    },
                    position: 'absolute',
                    left: '0',
                    top: '60%',
                    height: '800px',
                    transform: 'translate(-50%, -50%)',
                  }}
                >
                  <img
                    src="/assets/home/03_capitulo_ana/montagens_ana/Ana_Montagem_08.png"
                    alt=""
                    role="presentation"
                    style={{
                      height: '100%',
                      width: 'auto',
                    }}
                  />
                </Box>
                <Markdown
                  style={{
                    position: 'relative',
                    zIndex: 2,
                  }}
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
                    zIndex: 2,
                  }}
                >
                  <Box>
                    <Heading
                      as="h3"
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
                  style={{
                    position: 'relative',
                    zIndex: 2,
                  }}
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
                <PaperCard backdropAngle="-2deg">
                  <img
                    src="/assets/home/03_capitulo_ana/graficos_ana/Ana_Grafico_06.svg"
                    alt="Pirâmide etária comparando a população baiana entre 2013 e 2023. À esquerda estão as barras referentes às mulheres, na cor lilás representando 2013 e a cor roxa representando 2023. À direita estão as barras dos homens, com a cor bege representando 2013 e a cor laranja representando 2023. Cada barra indica a quantidade de pessoas em milhares distribuídas por faixas etárias, de 0 a 4 anos até 80 anos ou mais. O gráfico mostra que o envelhecimento populacional é mais acentuado entre as mulheres."
                  />
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
            <Text
              style={{
                maxWidth: '800px',
                marginLeft: 'auto',
                marginRight: 'auto',
                textAlign: 'center',

                fontSize: '1.5rem',
                lineHeight: '1.2',
              }}
            >
              Quando o{' '}
              <strong style={{ color: 'var(--orange-text-dark-bg)' }}>
                Estado não assume sua parte nos cuidados
              </strong>
              , ele transfere a responsabilidade para as famílias,{' '}
              <strong style={{ color: 'var(--orange-text-dark-bg)' }}>
                sobrecarregando ainda mais as mulheres
              </strong>
              .
            </Text>
          </Flex>
        </SiteWidthContainer>
      </PaperFramedSection>
    </>
  )
}
