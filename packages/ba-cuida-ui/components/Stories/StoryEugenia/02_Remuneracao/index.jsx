import { Flex, Markdown, Box } from '@orioro/react-ui-core'
import { SiteWidthContainer } from '@/components/SiteWidthContainer'
import { PaperFramedSection } from '@/components/PaperFramedSection'
import { PaperCard } from '@/components/PaperCard'
import { Heading, Text } from '@radix-ui/themes'

export function Remuneracao() {
  return (
    <>
      <SiteWidthContainer>
        <Flex
          py="5"
          direction="column"
          gap="4"
          alignItems="center"
          maxWidth="750px"
          style={{
            margin: 'auto',
            textAlign: 'center',
          }}
        >
          <img
            style={{
              height: 300,
            }}
            src="/assets/home/04_capitulo_eugenia/ilustracoes_eugenia/Eugenia_02.svg"
            alt="Ilustração de Eugênia com expressão triste segurando uma carteira vazia, da qual saem apenas duas moedas. Uma mosquinha voa ao redor, simbolizando escassez e dificuldade financeira. Elementos coloridos decoram o fundo."
          />
          <Markdown
            style={{ fontSize: '1.25rem', fontWeight: 300 }}
            children={
              'Assim como a maioria das diaristas, Eugênia recebe por ' +
              'hora um valor que não é suficiente para construir seu ' +
              'projeto de vida ou sonhar com uma realidade diferente ' +
              'da que vive hoje.'
            }
          />
        </Flex>
      </SiteWidthContainer>
      <PaperFramedSection
        style={{
          position: 'relative',
          overflow: 'hidden',
          backgroundColor: 'var(--roxo)',
        }}
      >
        <SiteWidthContainer py="9">
          <Flex direction="column" gap="6">
            <Flex
              direction={{
                xs: 'column',
                md: 'row',
              }}
              gap="4"
              alignItems="center"
              justifyContent="space-between"
              style={{
                color: 'white',
              }}
            >
              <Box
                style={{
                  position: 'relative',
                  backgroundColor: '#F9EFD9',
                  maxWidth: '700px',
                  maxHeight: '700px',
                  width: '50vw',
                  height: '50vw',
                  flexShrink: 0,
                  borderRadius: '100%',
                }}
              >
                <img
                  style={{
                    position: 'absolute',
                    top: 0,
                    right: '45%',
                    height: '100%',
                    zIndex: 3,
                  }}
                  src="/assets/home/04_capitulo_eugenia/montagens_eugenia/Eugenia_Montagem_03.png"
                  alt=""
                  role="presentation"
                />
                <Flex
                  style={{
                    position: 'absolute',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    left: '50%',
                    right: '10%',
                    color: 'var(--marrom-texto)',
                  }}
                >
                  <Heading
                    as="h2"
                    style={{
                      fontSize: '1.875rem',
                    }}
                  >
                    Na Bahia, <strong>73,2%</strong> das trabalhadoras dos
                    cuidados recebem <strong>até 1 salário mínimo</strong>.
                  </Heading>
                  <Text>
                    Em 2024, o salário mínimo estava estabelecido em R$ 1.412.
                  </Text>
                </Flex>
              </Box>
              <Flex
                direction="column"
                gap="4"
                style={{
                  width: '40%',
                  position: 'relative',
                }}
              >
                <Box>
                  <img
                    src="/assets/home/04_capitulo_eugenia/graficos_eugenia/Eugenia_Grafico_02.svg"
                    alt="Gráfico de pizza que mostra a faixa salarial das trabalhadoras dos cuidados. A maior fatia, em laranja, representa 73,2% das trabalhadoras que recebem até 1 salário mínimo. A fatia verde representa 17,5% que recebem entre 1 e 2 salários mínimos. A menor fatia, em azul, representa 9,3% que recebem acima de 2 salários mínimos."
                    style={{
                      width: '100%',
                    }}
                  />
                </Box>
                <cite>
                  Fonte: Pesquisa Nacional por Amostra de Domicílios Contínua -
                  último semestre de 2024
                </cite>
              </Flex>
            </Flex>
          </Flex>
        </SiteWidthContainer>
      </PaperFramedSection>
    </>
  )
}
