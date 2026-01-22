import { Box, Flex, Markdown } from '@orioro/react-ui-core'
import { SiteWidthContainer } from '@/components/SiteWidthContainer'
import { PaperFramedSection } from '@/components/PaperFramedSection'
import { PaperCard } from '@/components/PaperCard'
import { Heading } from '@radix-ui/themes'

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
            src="/assets/home/03_capitulo_ana/ilustracoes_ana/Ana_03.svg"
            alt="Ilustração de Ana limpando um pequeno móvel com pano e spray, enquanto seu marido sentado no sofá, ao fundo, assiste televisão. Ana parece cansada e contrariada, porque só ela trabalha na casa enquanto ele tem um momento de lazer."
          />
          <Markdown
            style={{ fontSize: '1.25rem', fontWeight: 300 }}
            children={
              'Ana é quem realiza quase todos os afazeres domésticos, ' +
              'e o seu marido não faz nem metade das tarefas que Ana faz.'
            }
          />
        </Flex>
      </SiteWidthContainer>
      <PaperFramedSection style={{ position: 'relative', overflow: 'hidden' }}>
        <SiteWidthContainer>
          <Flex
            py="100px"
            direction={{
              xs: 'column',
              md: 'row',
            }}
            gap="9"
            alignItems="center"
            style={{
              position: 'relative',
              zIndex: 2,
              marginLeft: 'auto',
              marginRight: 'auto',
              color: 'white',
            }}
          >
            <Box
              style={{
                transform: {
                  md: 'translate(0, -50%)',
                },
                maxWidth: '400px',
                fontSize: '1.5rem',
                textAlign: 'center',
              }}
            >
              <Heading as="h3">
                <div>Na Bahia, as mulheres gastam</div>
                <strong
                  style={{
                    background: '#E6DAEC',
                    color: 'var(--marrom-texto)',
                    padding: '0 20px',
                    marginLeft: '-20px',
                    marginRight: '-20px',
                  }}
                >
                  mais do que o dobro de horas
                </strong>{' '}
                <div>
                  do que os homens em tarefas domésticas e de cuidado de
                  pessoas.
                </div>
              </Heading>
            </Box>

            <div
              style={{
                flexGrow: 1,
                position: 'relative',
              }}
            >
              <PaperCard
                backdropAngle="-2deg"
                style={{
                  width: '70%',
                  position: 'relative',
                  zIndex: 2,
                }}
              >
                <img
                  src="/assets/home/03_capitulo_ana/graficos_ana/Ana_Grafico_03.svg"
                  style={{
                    width: '100%',
                    position: 'relative',
                    zIndex: 2,
                  }}
                  alt="Gráfico de barras verticais mostrando o tempo semanal dedicado às tarefas domésticas por gênero no ano de 2022. A barra roxa, representando as mulheres, indica 23,1 horas por semana. A barra laranja, representando os homens, indica 10,9 horas por semana."
                />
                <cite
                  style={{
                    position: 'absolute',
                    top: '80%',
                    left: 'calc(100% + 20px)',
                    background: 'var(--marrom)',
                    padding: 5,
                    width: '150px',
                  }}
                >
                  Fonte: IBGE - Pesquisa Nacional por Amostra de Domicílios
                  Contínua Anual - 5ª visita - 2022.
                </cite>
              </PaperCard>

              <img
                loading="lazy"
                src="/assets/home/03_capitulo_ana/montagens_ana/Ana_Montagem_04.png"
                alt=""
                role="presentation"
                style={{
                  width: '50%',
                  position: 'absolute',
                  zIndex: 1000,
                  right: '83%',
                  top: '15%',
                  zIndex: 3,
                  // transform: 'translate(50%, 0)',
                }}
              />
              <img
                src="/assets/home/03_capitulo_ana/montagens_ana/Ana_Montagem_05.png"
                alt=""
                role="presentation"
                style={{
                  width: '30%',
                  position: 'absolute',
                  zIndex: 1000,
                  left: '65%',
                  top: '-12%',
                  zIndex: 1,
                  transform: 'rotate(15deg)',
                }}
              />
            </div>
          </Flex>
        </SiteWidthContainer>
      </PaperFramedSection>
    </>
  )
}
