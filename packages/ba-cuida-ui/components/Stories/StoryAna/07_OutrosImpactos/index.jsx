import { Box, color, Flex, Markdown } from '@orioro/react-ui-core'
import { SiteWidthContainer } from '@/components/SiteWidthContainer'
import { PaperFramedSection } from '@/components/PaperFramedSection'
import { PaperScrap } from '@/components/PaperScrap'
import { PaperCard } from '@/components/PaperCard'
import { Heading, Text } from '@radix-ui/themes'

export function OutrosImpactos() {
  return (
    <>
      <SiteWidthContainer>
        <Flex py="5" direction="column" gap="6" alignItems="center">
          <Flex
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
              src="/assets/home/03_capitulo_ana/ilustracoes_ana/Ana_07.svg"
            />
            <Markdown
              style={{ fontSize: '1.25rem', fontWeight: 300 }}
              children={
                'Além de todos os impactos, a carga dos trabalhos dos cuidados ' +
                'também afeta a saúde de Ana, que não tem tempo para cuidar de si ' +
                'mesma. Ana não tem tempo de fazer atividade física, cuidar da sua ' +
                'alimentação, fazer seus exames e cuidar da sua saúde. Seu autocuidado ' +
                'fica sempre em segundo plano.'
              }
            />
          </Flex>
          <Flex
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
              src="/assets/home/03_capitulo_ana/ilustracoes_ana/Ana_08.svg"
            />
            <Markdown
              style={{ fontSize: '1.25rem', fontWeight: 300 }}
              children={
                'Ana não possui dinheiro para pagar uma babá ou uma ' +
                'diarista para auxiliar nas tarefas da casa. ' +
                'Quando precisa, deixa o filho com uma vizinha, ' +
                'que cuida das crianças da comunidade.'
              }
            />
          </Flex>
        </Flex>
      </SiteWidthContainer>
      <PaperFramedSection style={{ position: 'relative', overflow: 'hidden' }}>
        <SiteWidthContainer>
          <Flex direction="column" gap="8" py="9">
            <Heading
              as="h2"
              style={{
                maxWidth: '800px',
                marginLeft: 'auto',
                marginRight: 'auto',
                textAlign: 'center',
              }}
            >
              No Brasil, quanto{' '}
              <strong style={{ color: '#FF8A67' }}>
                menor a renda da mulher, maior é o tempo dedicado
              </strong>{' '}
              aos trabalhos domésticos e de cuidados de pessoas.
            </Heading>

            <Flex
              style={{
                alignSelf: 'center',
                width: {
                  xs: '100%',
                  md: '80%',
                },
              }}
              gap="5"
            >
              <PaperCard>
                <img src="/assets/home/03_capitulo_ana/graficos_ana/Ana_Grafico_07.svg" />
              </PaperCard>
              <Markdown
                style={{
                  fontSize: '1.5rem',
                  textAlign: 'center',
                }}
                children={
                  'É por isso que o cuidado comunitário em locais vulneráveis, ' +
                  'onde as mulheres possuem os menores salários, por vezes se ' +
                  'torna uma solução para que mães possam trabalhar e organizar ' +
                  'outras  tarefas cotidianas.'
                }
              />
            </Flex>
            <cite
              style={{
                maxWidth: '1000px',
                marginLeft: 'auto',
                marginRight: 'auto',
                textAlign: 'center',
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
      <Flex
        direction="column"
        gap="4"
        pt="4"
        pb="8"
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
          src="/assets/home/03_capitulo_ana/ilustracoes_ana/Ana_09.svg"
        />
        <Markdown
          style={{ fontSize: '1.25rem', fontWeight: 300 }}
          children={
            'Quando não consegue cuidar da sua mãe, Ana conta ' +
            'com a ajuda de sua irmã, **Eugênia, que é diarista.**'
          }
        />
      </Flex>
    </>
  )
}
