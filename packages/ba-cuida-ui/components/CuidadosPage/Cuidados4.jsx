import styled from 'styled-components'
import { SiteWidthContainer } from '../SiteWidthContainer'
import { PaperCard } from '../PaperCard'
import { Box, EvenSpacedList, Flex } from '@orioro/react-ui-core'
import { Heading, Text } from '@radix-ui/themes'
import { Markdown } from '@orioro/react-ui-core'
import LiteYouTubeEmbed from 'react-lite-youtube-embed'
import Link from 'next/link'

const HighlightBox = styled.div`
  background-color: var(--orange-9);
  color: white;
  border-radius: 20px;
  padding: 20px;
`

export function Cuidados4() {
  return (
    <section>
      <SiteWidthContainer>
        <Flex
          direction="column"
          alignItems="center"
          py="9"
          gap="9"
          style={{
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          <Heading
            as="h2"
            style={{
              fontSize: '2rem',
              fontWeight: 'bold',
              textAlign: 'center',
              maxWidth: '850px',
            }}
          >
            <strong>
              O trabalho invisível dos cuidados e impacto na economia
            </strong>
          </Heading>

          <EvenSpacedList
            columns={{ xs: 1, sm: 2 }}
            gap="80px"
            style={{
              width: '100%',
            }}
          >
            <PaperCard
              backdropAngle="-2deg"
              style={{
                overflow: {
                  xs: 'hidden',
                  sm: 'visible',
                },
                color: 'var(--marrom-texto)',
              }}
            >
              <Flex
                style={{
                  height: '100%',
                }}
                py="1"
                direction="row"
                gap="1"
                alignItems="center"
              >
                <Flex
                  style={{
                    width: '60%',
                  }}
                  gap="3"
                >
                  <Text>
                    Segundo a ONU Mulheres (2017), o valor do trabalho doméstico
                    e de cuidados pode representar até
                  </Text>
                  <Text
                    style={{
                      fontSize: '1.25rem',
                      fontWeight: 'bold',
                      lineHeight: 1,
                    }}
                  >
                    39% do PIB dos países.
                  </Text>
                </Flex>
                <Box
                  style={{
                    width: 'calc(40% + 100px)',
                    marginRight: '-100px',
                  }}
                >
                  <img
                    src="/assets/cuidados/montagens/Cuidados_Montagem06.png"
                    alt="Montagem em preto e branco de uma mulher limpando um móvel com expressão cansada. Ela usa luvas e segura um frasco de produto de limpeza enquanto passa um pano na superfície. Ao fundo, há formas gráficas abstratas em tons de verde, laranja e roxo."
                  />
                </Box>
              </Flex>
            </PaperCard>
            <PaperCard
              style={{
                color: 'var(--marrom-texto)',
                overflow: {
                  xs: 'hidden',
                  sm: 'visible',
                },
              }}
            >
              <Flex py="1" direction="row" gap="1" alignItems="center">
                <Flex
                  style={{
                    width: '60%',
                  }}
                  gap="3"
                >
                  <Text>
                    A Oxfam (2020) aponta que o valor monetário global do
                    trabalho de cuidado não remunerado feito por mulheres a
                    partir dos 15 anos é de
                  </Text>
                  <Text
                    style={{
                      fontSize: '1.25rem',
                      fontWeight: 'bold',
                      lineHeight: 1,
                    }}
                  >
                    $10,8 trilhões por ano
                  </Text>
                  <Text
                    style={{
                      fontSize: '.9rem',
                    }}
                  >
                    (3x o valor do setor mundial de tecnologia).
                  </Text>
                </Flex>
                <Box
                  style={{
                    width: 'calc(40% + 100px)',
                    marginRight: '-100px',
                  }}
                >
                  <img
                    src="/assets/cuidados/montagens/Cuidados_Montagem07.png"
                    alt=""
                  />
                </Box>
              </Flex>
            </PaperCard>
          </EvenSpacedList>

          <Markdown
            style={{
              maxWidth: '850px',
              textAlign: 'center',
            }}
            children={`A falta de reconhecimento das atividades dos cuidados agrava um problema já existente: o déficit de cuidados, que muitos chamam hoje de **‘crise dos cuidados’**.`}
          />

          <PaperCard
            backdropAngle="4deg"
            style={{
              color: 'var(--marrom-texto)',
              maxWidth: '850px',
              overflow: {
                xs: 'hidden',
                sm: 'visible',
              },
            }}
          >
            <Flex
              py="1"
              direction={{ xs: 'column-reverse', sm: 'row' }}
              gap="1"
              alignItems="center"
            >
              <Flex
                style={{
                  width: { xs: '100%', sm: '40%' },
                }}
                gap="3"
              >
                <Text>
                  A ausência de políticas e serviços públicos que respondam de
                  forma integral e intersetorial as demandas de cuidados,
                  principalmente nos territórios mais vulnerabilizados, acaba
                  por sobrecarregar as famílias e comunidades com a realização
                  dessas atividades, tarefa que recaí majoritariamente sobre as
                  mulheres.
                </Text>
              </Flex>
              <Box
                style={{
                  width: { xs: '100%', sm: 'calc(60% + 100px)' },
                  marginRight: { xs: 0, sm: '-100px' },
                  marginTop: { xs: 0, sm: '-80px' },
                  marginBottom: { xs: 0, sm: '-80px' },
                }}
              >
                <img
                  src="/assets/cuidados/montagens/Cuidados_Montagem08.png"
                  alt="Montagem em preto e branco de uma mulher lavando louça na pia, inclinada sobre o prato e com a mão na testa, sugerindo cansaço e sobrecarga. A água corre da torneira enquanto ela esfrega o prato. Ao fundo, há formas gráficas abstratas em tons de laranja, roxo e rosa."
                />
              </Box>
            </Flex>
          </PaperCard>

          <Flex
            style={{
              maxWidth: '850px',
            }}
            gap="5"
          >
            <Heading
              as="h2"
              style={{
                textAlign: 'center',
              }}
            >
              <strong>5 R’s do Cuidado</strong>
            </Heading>
            <Markdown
              style={{
                textAlign: 'center',
              }}
              children={`Para enfrentar esse cenário, a Organização Internacional do Trabalho (OIT) elaborou uma estrutura de recomendações que visa garantir o acesso adequado aos cuidados a quem precisa, e melhorar as condições de vida e trabalho das pessoas cuidadoras.`}
            />

            <Flex
              style={{
                maxWidth: '850px',
              }}
              gap="3"
              direction="column"
              alignItems="center"
            >
              <Flex direction="row" alignItems="center">
                <img
                  style={{
                    width: 80,
                    flexShrink: 0,
                    flexGrow: 0,
                    height: 'auto',
                  }}
                  src="/assets/cuidados/icones/icon_Rs_Reconhecer.png"
                  alt="Ícone Reconhecer"
                />
                <HighlightBox>
                  <Heading
                    as="h4"
                    style={{
                      fontSize: '1.2rem',
                    }}
                  >
                    <strong>Reconhecer</strong>
                  </Heading>
                  <Text>
                    Reconhecer o trabalho de cuidado e visibilizar a importância
                    do cuidado para a sociedade.
                  </Text>
                </HighlightBox>
              </Flex>

              <Flex
                direction="row"
                alignItems="center"
                style={{
                  width: '100%',
                }}
              >
                <img
                  style={{
                    width: 80,
                    flexShrink: 0,
                    flexGrow: 0,
                    height: 'auto',
                  }}
                  src="/assets/cuidados/icones/icon_Rs_Reduzir.png"
                  alt="Ícone Reduzir"
                />
                <HighlightBox>
                  <Heading
                    as="h4"
                    style={{
                      fontSize: '1.2rem',
                    }}
                  >
                    <strong>Reduzir</strong>
                  </Heading>
                  <Text>
                    Reduzir o tempo dedicado à realização do trabalho de cuidado
                    (não remunerado), por meio da expansão de políticas públicas
                    que consolidem infraestruturas e sistemas de cuidado.
                  </Text>
                </HighlightBox>
              </Flex>

              <Flex direction="row" alignItems="center">
                <img
                  style={{
                    width: 80,
                    flexShrink: 0,
                    flexGrow: 0,
                    height: 'auto',
                  }}
                  src="/assets/cuidados/icones/icon_Rs_Redistribuir.png"
                  alt="Ícone Redistribuir"
                />
                <HighlightBox>
                  <Heading
                    as="h4"
                    style={{
                      fontSize: '1.2rem',
                    }}
                  >
                    <strong>Redistribuir</strong>
                  </Heading>
                  <Text>
                    Redistribuir de forma justa o trabalho de cuidado entre os
                    diferentes setores da sociedade - lados do Diamante dos
                    Cuidados - e de forma igualitária entre homens e mulheres,
                    superando os papéis de gênero.
                  </Text>
                </HighlightBox>
              </Flex>

              <Flex direction="row" alignItems="center">
                <img
                  style={{
                    width: 80,
                    flexShrink: 0,
                    flexGrow: 0,
                    height: 'auto',
                  }}
                  src="/assets/cuidados/icones/icon_Rs_Representar.png"
                  alt="Ícone Representar"
                />
                <HighlightBox>
                  <Heading
                    as="h4"
                    style={{
                      fontSize: '1.2rem',
                    }}
                  >
                    <strong>Representar</strong>
                  </Heading>
                  <Text>
                    Dar voz às pessoas cuidadoras, seja as remuneradas e não
                    remuneradas, de forma com que possam participar da tomada de
                    decisão e ter suas demandas supridas.
                  </Text>
                </HighlightBox>
              </Flex>

              <Flex direction="row" alignItems="center">
                <img
                  style={{
                    width: 80,
                    flexShrink: 0,
                    flexGrow: 0,
                    height: 'auto',
                  }}
                  src="/assets/cuidados/icones/icon_Rs_Remunerar.png"
                  alt="Ícone Remunerar"
                />
                <HighlightBox>
                  <Heading
                    as="h4"
                    style={{
                      fontSize: '1.2rem',
                    }}
                  >
                    <strong>Remunerar</strong>
                  </Heading>
                  <Text>
                    Remunerar de forma justa as/os trabalhadoras/es dos
                    cuidados, garantindo trabalho decente e acesso à proteção
                    social.
                  </Text>
                </HighlightBox>
              </Flex>
              <cite>
                Elaboração: Kelly Agopyan (2025) com informações de MacGregor,
                Arora-Jonsson, Cohen, 2022; ILO, 2023.
              </cite>
            </Flex>
          </Flex>
          <div
            style={{
              width: '100%',
            }}
          >
            <LiteYouTubeEmbed id="" title="" />
          </div>

          <Flex
            direction={{ xs: 'column', sm: 'row' }}
            alignItems="center"
            gap="5"
          >
            <Flex
              style={{
                width: { xs: '100%', sm: '50%' },
              }}
            >
              <Heading as="h2">
                <strong>Diamante dos Cuidados</strong>
              </Heading>
              <Text>
                Já a pesquisadora Shahra Razavi desenvolveu o Diamante dos
                Cuidados, um modelo que mostra como essa responsabilidade
                deveria ser compartilhada entre quatro grandes atores: Estado,
                sociedade civil, mercado e famílias. A ideia aqui é simples, mas
                poderosa: quando um desses atores não assume sua parte, os
                outros ficam sobrecarregados, que é justamente isso que vemos
                hoje nas famílias e comunidades.
              </Text>
            </Flex>

            <Box>
              <img
                src="/assets/cuidados/infograficos/Diamante_dos_cuidados.svg"
                alt="Diagrama conhecido como ‘diamante dos cuidados’, composto por quatro esferas que representam os setores responsáveis pelas atividades de cuidado na sociedade: família (em verde), setores públicos e Estado (em laranja), setores sem fins lucrativos e comunidade (em roxo) e mercado (em rosa). No centro, há a forma de um diamante conectando esses quatro setores. Entre esses campos, apenas o Estado não tem o trabalho de cuidado realizado majoritariamente por mulheres"
              />
            </Box>
          </Flex>
          <div
            style={{
              width: '100%',
            }}
          >
            <LiteYouTubeEmbed id="" title="" />
          </div>

          <Text
            style={{ textAlign: 'center', fontSize: '.85rem', maxWidth: 400 }}
          >
            Para conhecer mais profundamente R’s do Cuidado e o Diamante dos
            Cuidados, visite nossa{' '}
            <Link
              href="/biblioteca"
              style={{
                textDecoration: 'underline',
                fontWeight: 'bold',
                color: 'inherit',
              }}
            >
              biblioteca
            </Link>
            .
          </Text>
        </Flex>
      </SiteWidthContainer>
    </section>
  )
}
