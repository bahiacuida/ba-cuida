import { Flex, Markdown } from '@orioro/react-ui-core'
import { SiteWidthContainer } from '@/components/SiteWidthContainer'
import { PaperFramedSection } from '@/components/PaperFramedSection'
import { PaperCard } from '@/components/PaperCard'
import { Text } from '@radix-ui/themes'

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
            src="/assets/home/03_capitulo_ana/ilustracoes_ana/Ana_01.svg"
          />
          <Markdown
            style={{ fontSize: '1.25rem', fontWeight: 300 }}
            children={
              'Ana é uma mulher baiana. Ela é casada e acabou de se tornar mãe de sua primeira filha. Ana faz todas as atividades domésticas da casa sem receber dinheiro e sem receber reconhecimento.'
            }
          />
        </Flex>
      </SiteWidthContainer>
      <PaperFramedSection style={{ position: 'relative', overflow: 'hidden' }}>
        <SiteWidthContainer py="9" >
          <img
            src="/assets/home/06_fundos_narrativa/bg_mancha_verde.svg"
            style={{
              position: 'absolute',
              top: '0',
              left: '0',
              width: 1000,
              zIndex: 1,
              opacity: 0.8,
              transform: 'translate(-50%, 60%)',
            }}
          />
          <img
            src="/assets/home/06_fundos_narrativa/bg_mancha_laranja.svg"
            style={{
              position: 'absolute',
              top: '0',
              left: '0',
              width: 1000,
              zIndex: 1,
              opacity: 0.8,
              transform: 'translate(30%, -30%) rotate(20deg)',
            }}
          />
          <Flex
            direction={{
              xs: 'column',
              md: 'row',
            }}
            gap="4"
            alignItems="center"
            style={{
              position: 'relative',
              zIndex: 2,
              marginLeft: 'auto',
              marginRight: 'auto',
              color: 'white',
              maxWidth: '750px',
            }}
          >
            <img
              src="/assets/home/03_capitulo_ana/montagens_ana/Ana_Montagem_01.png"
              style={{
                width: 250,
                position: 'relative',
                zIndex: 2,
              }}
            />
            <Flex direction="column">
              <Text
                style={{
                  maxWidth: 400,
                }}
              >
                No estado da Bahia, o perfil da maioria das pessoas que realizam
                o trabalho não remunerado é:
              </Text>
              <PaperCard
                style={{
                  marginLeft: {
                    md: '-70px',
                  },
                  paddingLeft: {
                    md: '100px !important',
                  },
                }}
              >
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: '2rem',
                    color: 'var(--marrom-texto)',
                  }}
                >
                  mulheres, negras,
                  <br />
                  de 25 a 49 anos
                </Text>
              </PaperCard>
              <cite
                style={{
                  maxWidth: 400,
                }}
              >
                Fonte: Pesquisa Nacional por Amostra de Domicílios Contínua
                Anual 2022, tambem pode abreviar para PNADC/A - 2022
              </cite>
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
            src="/assets/home/03_capitulo_ana/ilustracoes_ana/Ana_02.svg"
          />
          <Markdown
            style={{ fontSize: '1.25rem', fontWeight: 300 }}
            children={
              'Ana tem que **cuidar** de sua bebê de 6 meses e **cuidar** da sua mãe idosa. Além disso, Ana tem que **cuidar** da casa.'
            }
          />
        </Flex>
      </SiteWidthContainer>
    </>
  )
}
