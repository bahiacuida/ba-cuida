import { Flex, Markdown, Box } from '@orioro/react-ui-core'
import { SiteWidthContainer } from '@/components/SiteWidthContainer'
import { PaperFramedSection } from '@/components/PaperFramedSection'
import { PaperCard } from '@/components/PaperCard'
import { PaperScrap } from '@/components/PaperScrap'
import { Heading, Text } from '@radix-ui/themes'

export function Previdencia() {
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
            src="/assets/home/04_capitulo_eugenia/ilustracoes_eugenia/Eugenia_04.svg"
            alt="Ilustração de Eugênia com expressão triste ao lado de uma folha marcada com diversos itens ‘negado’. Há elementos decorativos ao fundo, reforçando a ideia de dificuldades financeiras."
          />
          <Markdown
            style={{ fontSize: '1.25rem', fontWeight: 300 }}
            children={
              'Com sua renda atual, Eugênia não consegue contribuir ' +
              'com a previdência, e por isso não tem acesso a benefícios ' +
              'mínimos que deveriam ser seus por direito enquanto ' +
              'trabalhadora brasileira.'
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
                    top: '0%',
                    right: '25%',
                    height: '120%',
                    maxWidth: 'none',
                  }}
                  src="/assets/home/04_capitulo_eugenia/montagens_eugenia/Eugenia_Montagem_05.png"
                  alt=""
                  role="presentation"
                />
                <Flex
                  style={{
                    position: 'absolute',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    left: '45%',
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
                    <strong>3 em cada 4 diaristas</strong>não realizam
                    contribuição para a <strong>Previdência Social.*</strong>
                  </Heading>
                  <Text>*Dados do Brasil</Text>
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
                <Flex direction="row">
                  <Box
                    style={{
                      width: '50%',
                    }}
                  >
                    <img
                      src="/assets/home/04_capitulo_eugenia/graficos_eugenia/Eugenia_Grafico_04.svg"
                      alt="Gráfico de pizza que mostra a porcentagem de diaristas que contribuem para a Previdência Social. A fatia verde representa 23,6% que contribuem, enquanto a fatia laranja representa 76,4% que não contribuem."
                      style={{
                        width: '100%',
                      }}
                    />
                  </Box>
                  <Box
                    style={{
                      width: '50%',
                    }}
                  >
                    <img
                      src="/assets/home/04_capitulo_eugenia/graficos_eugenia/Eugenia_Grafico_05.svg"
                      alt="Gráfico de pizza que mostra a porcentagem de mensalistas que contribuem para a Previdência Social. A fatia verde representa 43,8% que contribuem, enquanto a fatia laranja representa 56,2% que não contribuem."
                      style={{
                        width: '100%',
                      }}
                    />
                  </Box>
                </Flex>
                <Heading
                  as="h3"
                  style={{
                    fontSize: '1.25rem',
                  }}
                >
                  Você sabe a diferença entre uma diarista e mensalista?
                </Heading>
                <Text>
                  Diarista é a profissional que trabalha até duas vezes por
                  semana no mesmo local, sem vínculo empregatício. Já a
                  mensalista, ou empregada doméstica, atua três ou mais vezes
                  por semana e, pela Lei Complementar 150/2015, tem direito à
                  carteira assinada, férias, 13º salário e FGTS.
                </Text>
              </Flex>
            </Flex>
            <cite
              style={{
                maxWidth: '800px',
                alignSelf: 'flex-end',
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
