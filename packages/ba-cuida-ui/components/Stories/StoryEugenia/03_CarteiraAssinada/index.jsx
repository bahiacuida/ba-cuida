import { Flex, Markdown, Box } from '@orioro/react-ui-core'
import { SiteWidthContainer } from '@/components/SiteWidthContainer'
import { PaperFramedSection } from '@/components/PaperFramedSection'
import { PaperCard } from '@/components/PaperCard'
import { PaperScrap } from '@/components/PaperScrap'
import { Heading, Text } from '@radix-ui/themes'

export function CarteiraAssinada() {
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
            src="/assets/home/04_capitulo_eugenia/ilustracoes_eugenia/Eugenia_03.svg"
            alt="Ilustração de Eugênia com expressão de preocupação, segurando a cabeça com as mãos. Ao fundo aparece uma grande carteira de trabalho azul, simbolizando dificuldades e insegurança em relação ao trabalho. Elementos coloridos decoram o fundo."
          />
          <Markdown
            style={{ fontSize: '1.25rem', fontWeight: 300 }}
            children={
              'Eugênia tem um vínculo de trabalho frágil e ' +
              'precário, sem registro em carteira.'
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
                direction="column"
                style={{
                  width: '45%',
                }}
              >
                <Box style={{}}>
                  <img
                    style={{
                      width: '100%',
                    }}
                    src="/assets/home/04_capitulo_eugenia/montagens_eugenia/Eugenia_Montagem_04.png"
                    alt=""
                    role="presentation"
                  />
                </Box>
                <Heading
                  as="h3"
                  style={{
                    textAlign: 'center',
                  }}
                >
                  No Brasil,{' '}
                  <strong style={{ color: '#FF8A67' }}>7 em cada 10</strong>
                  trabalhadoras dos cuidados não possuem{' '}
                  <strong style={{ color: '#FF8A67' }}>
                    carteira assinada
                  </strong>
                  .
                </Heading>
              </Flex>
              <Flex
                direction="column"
                gap="4"
                style={{
                  width: '45%',
                  position: 'relative',
                }}
              >
                <PaperCard>
                  <img
                    src="/assets/home/04_capitulo_eugenia/graficos_eugenia/Eugenia_Grafico_03.svg"
                    alt="Pictograma mostrando a porcentagem de profissionais dos cuidados com carteira assinada. Três figuras na cor roxa representam 30% das trabalhadoras com carteira assinada. Sete figuras na cor laranja representam 70% que não têm carteira assinada."
                    style={{
                      width: '100%',
                    }}
                  />
                </PaperCard>
                <cite>
                  Fonte: Pesquisa Nacional por Amostra de Domicílios Contínua -
                  último semestre de 2024
                </cite>
              </Flex>
            </Flex>
            <PaperScrap>
              <Box p="8">
                <Text
                  as="div"
                  style={{
                    fontSize: '1.875rem',
                    textAlign: 'center',
                    color: 'var(--marrom-texto)',
                  }}
                >
                  <div>
                    Entre as cuidadoras, as diaristas são as mais
                    precarizadas:{' '}
                  </div>
                  <strong
                    style={{
                      textAlign: 'center',
                      paddingLeft: '10px',
                      paddingRight: '10px',
                      background: '#E6DAEC',
                    }}
                  >
                    9 em cada 10 não tem vínculo empregatício.
                  </strong>
                </Text>
              </Box>
            </PaperScrap>
            <cite
              style={{
                maxWidth: '900px',
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
            >
              Fonte: DataCuidados - Observatório Nacional dos Cuidados,
              Secretaria Nacional da Política de Cuidados e Família do
              Ministério do Desenvolvimento e Assistência Social, Família e
              Combate à Fome (MDS); Escola Nacional de Administração Pública
              (ENAP); Fundação Oswaldo Cruz (Fiocruz); com dados de IBGE -
              Pesquisa Nacional por Amostra de Domicílios Contínua Anual - 5ª
              visita - 2022.
            </cite>
          </Flex>
        </SiteWidthContainer>
      </PaperFramedSection>
    </>
  )
}
