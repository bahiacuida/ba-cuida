import { Flex, Markdown } from '@orioro/react-ui-core'
import { SiteWidthContainer } from '@/components/SiteWidthContainer'
import { PaperFramedSection } from '@/components/PaperFramedSection'
import { PaperCard } from '@/components/PaperCard'
import { Heading, Text } from '@radix-ui/themes'

export function Intro() {
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
            src="/assets/home/04_capitulo_eugenia/ilustracoes_eugenia/Eugenia_01.svg"
          />
          <Markdown
            style={{ fontSize: '1.25rem', fontWeight: 300 }}
            children={
              'Eugênia é uma mulher negra de 28 anos, que sonha em ' +
              'ser advogada e sempre trabalhou como diarista.'
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
              <Heading
                as="h2"
                style={{
                  fontSize: '1.875rem',
                  width: '40%',
                }}
              >
                Na Bahia, as mulheres negras representam 58,2% das pessoas
                trabalhadoras dos cuidados remunerados.
              </Heading>
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
                      top: 0,
                      right: 'calc(100% - 100px)',
                      width: '240px',
                      zIndex: 3,
                    }}
                    src="/assets/home/04_capitulo_eugenia/montagens_eugenia/Eugenia_Montagem_01.png"
                  />
                  <img
                    src="/assets/home/04_capitulo_eugenia/graficos_eugenia/Eugenia_Grafico_01.svg"
                    style={{
                      width: '100%',
                    }}
                  />
                </PaperCard>
                <img
                  style={{
                    position: 'absolute',
                    top: '-20px',
                    left: 'calc(100% - 90px)',
                    width: '130px',
                    transform: 'rotate(15deg)',
                    zIndex: 1,
                  }}
                  src="/assets/home/04_capitulo_eugenia/montagens_eugenia/Eugenia_Montagem_02.png"
                />
                <cite>
                  Fonte: Pesquisa Nacional por Amostra de Domicílios Contínua -
                  último semestre de 2024
                </cite>
              </Flex>
            </Flex>
            <Markdown
              children={
                'Para definir as **profissões dos cuidados remuneradas**, o Bahia Cuida ' +
                'se embasou no trabalho de Guimarães e Pinheiro (2023), considerando ' +
                'as ocupações com interação direta e indireta e de forma recorrente e ' +
                'dependente. São elas: 1) profissionais de enfermagem; 2) professores ' +
                'do ensino pré-escolar; 3) educadores para necessidades especiais; 4) ' +
                'profissionais de nível médio de enfermagem; 5) chefes de cozinha, 6) ' +
                'cozinheiros, 7) governantas e mordomos domésticos; 8) acompanhantes e ' +
                'criados particulares; 9) cuidadores de crianças; 10) ajudantes de ' +
                'professores; 11) trabalhadores de cuidados pessoais em instituições; ' +
                '12) trabalhadores de cuidados pessoais a domicílios; 13) trabalhadores ' +
                'de cuidados pessoais nos serviços de saúde não classificados anteriormente; ' +
                '14) guardas de segurança; 15) agricultores e trabalhadores qualificados no ' +
                'cultivo de hortas, viveiros e jardins; 16) condutores de automóveis, taxis e ' +
                'caminhonetes; 17) trabalhadores dos serviços domésticos em geral; 18) outros ' +
                'trabalhadores de limpeza; 19) trabalhadores elementares da jardinagem e ' +
                'horticultura; e 10) ajudantes de cozinha.'
              }
            />
          </Flex>
        </SiteWidthContainer>
      </PaperFramedSection>
    </>
  )
}
