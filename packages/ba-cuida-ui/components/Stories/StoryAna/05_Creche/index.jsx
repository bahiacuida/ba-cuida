import { Box, color, Flex, Markdown } from '@orioro/react-ui-core'
import { SiteWidthContainer } from '@/components/SiteWidthContainer'
import { PaperFramedSection } from '@/components/PaperFramedSection'
import { PaperScrap } from '@/components/PaperScrap'
import { PaperCard } from '@/components/PaperCard'
import { Heading, Text } from '@radix-ui/themes'

export function Creche() {
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
            src="/assets/home/03_capitulo_ana/ilustracoes_ana/Ana_05.svg"
            alt="Ilustração de Ana carregando sua bebê que chora, em frente a uma casa identificada como ‘Creche’. A mulher parece preocupada enquanto segura a criança nos braços."
          />
          <Markdown
            style={{ fontSize: '1.25rem', fontWeight: 300 }}
            children={
              'Ana não consegue deixar a sua bebê na creche do ' +
              'bairro pois não há vagas.'
            }
          />
        </Flex>
      </SiteWidthContainer>
      <PaperFramedSection style={{ position: 'relative', overflow: 'hidden' }}>
        <SiteWidthContainer>
          <Flex direction="column" gap="8" py="9">
            <Flex direction="row" alignItems="center">
              <Flex
                direction="column"
                gap="4"
                style={{
                  width: {
                    xs: '100%',
                    md: '60%',
                  },
                }}
              >
                <PaperScrap
                  style={{
                    color: 'var(--marrom-texto)',
                    position: 'relative',
                  }}
                >
                  <img
                    style={{
                      position: 'absolute',
                      bottom: '80%',
                      right: '80%',
                      width: '40%',
                    }}
                    src="/assets/home/03_capitulo_ana/montagens_ana/Ana_Montagem_07.png"
                    alt=""
                    role="presentation"
                  />
                  <Box p="8">
                    <Heading
                      as="h3"
                      style={{
                        fontSize: '2rem',
                        lineHeight: '1.2',
                      }}
                    >
                      Na Bahia, 7 em cada 10 crianças{' '}
                      <strong style={{ color: '#523A30' }}>
                        não estavam matriculadas em creches*
                      </strong>
                    </Heading>
                  </Box>
                </PaperScrap>
                <Text size="1">
                  *Crianças entre zero e três anos de idade. Dados de 2024.
                </Text>
                <cite>
                  Fonte: Observatório da Criança e do Adolescente - Fundação
                  Abrinq; com dados de Fonte: Ministério da Educação
                  (MEC)/Instituto Nacional de Estudos e Pesquisas Educacionais
                  Anísio Teixeira (Inep)/Diretoria de Estatísticas Educacionais
                  (Deed).
                </cite>
              </Flex>
              <Box
                style={{
                  width: {
                    xs: '100%',
                    md: '30%',
                  },
                }}
              >
                <img
                  src="/assets/home/03_capitulo_ana/graficos_ana/Ana_Grafico_05.svg"
                  alt="Pictograma mostrando a porcentagem de matrículas em creches em 2024: ícones laranja representam 70,5% das crianças não matriculadas e ícones verdes representam 29,5% matriculadas."
                />
              </Box>
            </Flex>
          </Flex>
        </SiteWidthContainer>
      </PaperFramedSection>
    </>
  )
}
