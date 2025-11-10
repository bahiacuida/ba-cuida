import { Flex, Markdown } from '@orioro/react-ui-core'
import { SiteWidthContainer } from '@/components/SiteWidthContainer'
import { PaperFramedSection } from '@/components/PaperFramedSection'
import { PaperCard } from '@/components/PaperCard'
import { Heading, Text } from '@radix-ui/themes'

export function Genero() {
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
            src="/assets/home/04_capitulo_eugenia/ilustracoes_eugenia/Eugenia_05.svg"
          />
          <Markdown
            style={{ fontSize: '1.25rem', fontWeight: 300 }}
            children={
              'Eugênia tem um marido, que está desempregado. ' +
              'Mas, ainda assim, é ela quem faz a maioria dos trabalhos domésticos na sua casa.'
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
              <Flex
                style={{
                  width: {
                    xs: '100%',
                    md: '40%',
                  },
                }}
              >
                <Heading
                  as="h2"
                  style={{
                    fontSize: '1.875rem',
                  }}
                >
                  Na Bahia, mesmo as mulheres que possuem emprego fora de casa
                  trabalham mais tempo em atividades dos cuidados domésticos do
                  que homens que estão desempregados!
                </Heading>
                <Text>
                  Chamamos de Mulheres desempregadas o que a PNAD classifica
                  como “mulheres desocupadas”.
                </Text>
              </Flex>
              <Flex
                direction="column"
                gap="4"
                style={{
                  width: '50%',
                  position: 'relative',
                }}
              >
                <PaperCard
                  style={{
                    position: 'relative',
                    zIndex: 2,
                  }}
                >
                  <img
                    style={{
                      position: 'absolute',
                      top: '50%',
                      right: 'calc(100% - 60px)',
                      width: '180px',
                      zIndex: 3,
                      transform: 'rotate(-15deg) translateY(-40%)',
                    }}
                    src="/assets/home/04_capitulo_eugenia/montagens_eugenia/Eugenia_Montagem_06.png"
                  />
                  <img
                    src="/assets/home/04_capitulo_eugenia/graficos_eugenia/Eugenia_Grafico_06.svg"
                    style={{
                      width: '100%',
                    }}
                  />
                </PaperCard>
                <cite>
                  Fonte: Pesquisa Nacional por Amostra de Domicílios Contínua
                  Anual 2022.
                </cite>
              </Flex>
            </Flex>
          </Flex>
        </SiteWidthContainer>
      </PaperFramedSection>
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
            src="/assets/home/04_capitulo_eugenia/ilustracoes_eugenia/Eugenia_06.svg"
          />
          <Markdown
            style={{ fontSize: '1.25rem', fontWeight: 300 }}
            children={
              'A família com quem trabalha possui uma criança com ' +
              'deficiência visual. Na prática, além de cuidar da ' +
              'casa, Eugênia precisa cuidar da criança. Por isso, ' +
              'ela trabalha muito mais do que o permitido por lei, ' +
              'por vezes dormindo no local de trabalho.'
            }
          />
        </Flex>
      </SiteWidthContainer>
    </>
  )
}
