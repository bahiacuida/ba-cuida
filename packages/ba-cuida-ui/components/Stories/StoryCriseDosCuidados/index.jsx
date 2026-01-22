import { Box, Flex, Markdown, Button } from '@orioro/react-ui-core'
import { SiteWidthContainer } from '@/components/SiteWidthContainer'
import { PaperFramedSection } from '@/components/PaperFramedSection'
import { PaperCard } from '@/components/PaperCard'
import { PaperScrap } from '@/components/PaperScrap'
import { Heading, Text } from '@radix-ui/themes'

export function StoryCriseDosCuidados() {
  return (
    <>
      <SiteWidthContainer py="8">
        <Flex
          direction={{
            xs: 'column-reverse',
            md: 'row',
          }}
          alignItems="center"
        >
          <Flex
            direction="column"
            style={{
              width: {
                xs: '100%',
                md: '50%',
              },
            }}
          >
            <PaperScrap>
              <Box p="5">
                <Heading
                  as="h3"
                  style={{
                    color: 'var(--marrom-texto)',
                  }}
                >
                  Tanto na Bahia quanto no restante do Brasil, os trabalhos dos
                  cuidados remunerados e não remunerados são realizados, na sua
                  esmagadora maioria, por muitas Anas e Eugênias:{' '}
                  <strong>mulheres negras e pobres.</strong>
                </Heading>
              </Box>
            </PaperScrap>
            <Text>
              O cuidado é essencial para a vida e para o funcionamento da
              sociedade, mas continua sendo pouco valorizado e quase invisível.
              Por estar ligado ao espaço doméstico e às mulheres, é visto como
              uma responsabilidade privada, e não como um dever coletivo. Isso
              impacta diretamente na vida das mulheres, especialmente negras e
              migrantes, já que são elas que realizam o trabalho do cuidado
              aumentando sua vulnerabilidade, exclusão social e prejudicando sua
              saúde mental.
            </Text>
          </Flex>
          <Flex
            direction="column"
            style={{
              width: {
                xs: '100%',
                md: '50%',
              },
            }}
          >
            <Box>
              <img
                style={{
                  width: '100%',
                }}
                loading="lazy"
                src="/assets/home/05_capitulo_crise_dos_cuidados/Conclusao_Montagem_01.png"
                alt="Fotografia em preto e branco de uma jovem mulher negra careca, em posição frontal, com os braços cruzados e expressão firme. Ela usa blusa de alças com estampa floral. Ao fundo, há formas abstratas coloridas em tons de verde, roxo, rosa e laranja, criando contraste com a imagem."
              />
            </Box>
            <Text
              style={{
                backgroundColor: '#EEC6CF',
                alignSelf: 'flex-start',
                padding: 10,
              }}
            >
              De um lado, <br />
              cuidadoras invisibilizadas...
            </Text>
          </Flex>
        </Flex>
      </SiteWidthContainer>
      <PaperFramedSection
        style={{
          backgroundColor: '#646E5A',
        }}
      >
        <Flex direction="column" gap="8" py="8">
          <Flex direction={{ xs: 'column', md: 'row' }}>
            <Box
              style={{
                width: {
                  xs: '100%',
                  md: '40%',
                },
                position: 'relative',
              }}
            >
              <Text
                style={{
                  position: 'absolute',
                  left: 20,
                  top: -20,
                  width: '230px',
                  backgroundColor: '#EEC6CF',
                  color: 'black',
                  padding: 10,
                }}
              >
                ... do outro lado, a população que necessita de cuidados.
              </Text>
              <img
                loading="lazy"
                src="/assets/home/05_capitulo_crise_dos_cuidados/Conclusao_Montagem_02.png"
                alt="Montagem em preto e branco de uma idosa negra, de longos dreads, sentada em uma cadeira de rodas. Na composição, aparecem relógio e formas abstratas coloridas e parte de um olho humano em destaque, representando a atenção que as cuidadoras dão a grupos vulneráveis e prioritários."
              />
            </Box>
            <Box
              style={{
                width: {
                  xs: '100%',
                  md: '40%',
                },
                position: 'relative',
                overflow: {
                  xs: 'hidden',
                  md: 'visible',
                },
              }}
            >
              <img
                style={{
                  position: 'absolute',
                  bottom: 0,
                  right: 'calc(100% - 100px)',
                  width: '200px',
                  zIndex: 1,
                }}
                loading="lazy"
                src="/assets/home/05_capitulo_crise_dos_cuidados/Conclusao_Montagem_03.png"
                alt=""
                role="presentation"
              />
              {/*<img
                style={{
                  position: 'relative',
                  zIndex: 2,
                }}
                src="/assets/home/05_capitulo_crise_dos_cuidados/Conclusao_Montagem_04.png"
                alt=""
                role="presentation"
              />*/}

              <Flex
                style={{
                  position: 'relative',
                  // top: '30%',
                  // left: '10%',
                  // right: '10%',
                  zIndex: 3,
                  color: 'var(--marrom-texto)',
                  background: 'white',
                }}
                p="6"
                gap="4"
              >
                <Heading as="h3">
                  Cuidado é uma necessidade de todas as pessoas:
                </Heading>
                <Text
                  style={{
                    fontSize: '14px',
                  }}
                >
                  Ao longo da vida, todas nós precisamos de cuidados — em
                  diferentes formas e intensidades. Somos mais vulneráveis na
                  infância e na velhice, fases em que essa necessidade se torna
                  mais evidente. Mas, para além do ciclo da vida, há também
                  fatores que aumentam essa demanda, como deficiências,
                  enfermidades ou condições sociais que limitam o acesso à
                  autonomia e ao bem-estar. Como destaca Helena Hirata (2022), a
                  pandemia de COVID-19 tornou visível a “vulnerabilidade
                  constitutiva do ser humano” — lembrando-nos de que o cuidado
                  não é exceção, mas parte essencial da nossa condição e da
                  interdependência que nos define.
                </Text>
              </Flex>

              <img
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 'calc(100% - 100px)',
                  width: '200px',
                  zIndex: 1,
                  transform: 'rotate(30deg)',
                }}
                loading="lazy"
                src="/assets/home/05_capitulo_crise_dos_cuidados/Conclusao_Montagem_05.png"
                alt=""
                role="presentation"
              />
              <img
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 'calc(100% - 100px)',
                  width: '200px',
                  zIndex: 1,
                }}
                loading="lazy"
                src="/assets/home/05_capitulo_crise_dos_cuidados/Conclusao_Montagem_06.png"
                alt=""
                role="presentation"
              />
              <Box
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 'calc(100% - 150px)',
                  zIndex: 0,
                  width: '300px',
                  height: '300px',
                  backgroundColor: 'var(--roxo)',
                  borderRadius: '100%',
                }}
              />
            </Box>
          </Flex>
          <Box
            style={{
              maxWidth: '1000px',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            <img
              loading="lazy"
              src="/assets/home/05_capitulo_crise_dos_cuidados/infografia.png"
              alt=""
              role="presentation"
            />
          </Box>
        </Flex>
      </PaperFramedSection>
      <SiteWidthContainer pb="200px">
        <Flex direction="column" gap="5">
          <Heading as="h3">Cuidado deve ser um bem público coletivo</Heading>
          <Flex
            direction={{
              xs: 'column',
              md: 'row',
            }}
            alignItems="center"
          >
            <Box
              style={{
                width: {
                  xs: '100%',
                  md: '25%',
                },
              }}
            >
              <Text>
                Cuidado é direito universal. Tanto quem cuida, quanto quem é
                cuidado, possuem direitos que devem ser garantidos pelo governo.
              </Text>
            </Box>
            <Box
              style={{
                width: {
                  xs: '100%',
                  md: '50%',
                },
              }}
            >
              <img
                loading="lazy"
                src="/assets/home/05_capitulo_crise_dos_cuidados/Conclusao_Montagem_07.png"
                alt="Montagem em preto e branco de uma mulher negra levantando o braço direito com o punho fechado e de luva de limpeza, em gesto de força. Ela veste uma blusa de alças estampada. Ao fundo, há formas abstratas coloridas em tons de verde, roxo, rosa e laranja."
              />
            </Box>

            <Box
              style={{
                width: {
                  xs: '100%',
                  md: '25%',
                },
              }}
            >
              <Text>
                Os cuidados devem ser zelados por políticas públicas que contam
                com apoio de dados para a sua formulação.
              </Text>
            </Box>
          </Flex>
          <PaperCard
            backdropAngle="-3deg"
            style={{
              maxWidth: '600px',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            <Flex p="6">
              <Text
                style={{
                  fontSize: '1.875rem',
                  textAlign: 'center',
                }}
              >
                Vamos juntas para que essa{' '}
                <strong>mudança seja efetiva!</strong>
              </Text>

              <Text
                style={{
                  textAlign: 'center',
                }}
              >
                Para ver mais informações dos cuidados na Bahia acesse a página
                de dados.
              </Text>
              <Button
                style={{
                  alignSelf: 'center',
                }}
                href="/dados"
              >
                Conhecer os dados do Estado Bahia
              </Button>
            </Flex>
          </PaperCard>
        </Flex>
      </SiteWidthContainer>
    </>
  )
}
