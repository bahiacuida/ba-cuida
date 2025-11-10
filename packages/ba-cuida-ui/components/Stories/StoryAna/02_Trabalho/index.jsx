import { Box, Flex, Markdown } from '@orioro/react-ui-core'
import { PaperFramedSection } from '@/components/PaperFramedSection'
import { SiteWidthContainer } from '@/components/SiteWidthContainer'
import { Heading, Text } from '@radix-ui/themes'
import styled from 'styled-components'
import { PaperScrap } from '../../../PaperScrap'

const ColorBox = styled(Box)`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  max-width: 300px;
  min-height: 120px;
  font-size: 1.5rem;
`

export function Trabalho() {
  return (
    <PaperFramedSection>
      <SiteWidthContainer py="40px">
        <Flex direction="column" gap="8">
          <Flex
            style={{
              width: {
                xs: '100%',
                md: '50%',
              },
              position: 'relative',
              zIndex: 2,
            }}
            gap="4"
          >
            <Heading as="h2">
              Você sabia que esse{' '}
              <strong style={{ color: 'var(--orange-9)' }}>"cuidar"</strong>{' '}
              realizado pela Ana é, na verdade,{' '}
              <strong style={{ color: 'var(--orange-9)' }}>um trabalho</strong>?
            </Heading>
            <Markdown
              children={
                'Os **"trabalhos dos cuidados"** são uma realidade na vida de quase ' +
                'todas as pessoas, mas que tem um peso maior na vida das mulheres ' +
                '(especialmente das mulheres negras e das mulheres pobres), já que ' +
                'são as mais afetadas por exercerem esses trabalhos invisibilizados ' +
                'na sociedade.'
              }
            />
          </Flex>

          <PaperScrap
            style={{
              alignSelf: 'center',
            }}
          >
            <Flex
              style={{
                color: 'var(--marrom-texto)',
                position: 'relative',
                // backgroundImage: 'url()',
                // backgroundSize: 'cover',
                // backgroundRepeat: 'no-repeat',
                // backgroundPosition: 'center center',
                zIndex: 1001,
                maxWidth: '800px',
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
              py="100px"
              px="100px"
              justifyContent="center"
              alignItems="center"
              gap="6"
            >
              <Heading as="h2">
                Os chamados <strong>“trabalhos dos cuidados”</strong> são:
              </Heading>
              <Flex
                direction={{ xs: 'column', md: 'row' }}
                gap="4"
                alignItems="center"
              >
                <ColorBox
                  p="4"
                  style={{
                    background: 'var(--orange)',
                  }}
                >
                  Trabalho de cuidados de pessoas
                </ColorBox>
                <span
                  style={{
                    fontWeight: 'bold',
                    fontSize: '2rem',
                    lineHeight: '1',
                  }}
                >
                  +
                </span>
                <ColorBox
                  p="4"
                  style={{
                    background: 'var(--verde)',
                  }}
                >
                  Tarefas domésticas
                </ColorBox>
              </Flex>
              <img
                style={{
                  position: 'absolute',
                  zIndex: -2,
                  bottom: '80%',
                  left: '35%',
                  width: '70%',
                }}
                src="/assets/home/03_capitulo_ana/montagens_ana/mao_placa.png"
              />
            </Flex>
          </PaperScrap>

          <Flex direction="column" gap="5">
            <Heading
              as="h2"
              style={{
                textAlign: 'center',
              }}
            >
              Você sabe dizer quais são os trabalhos dos cuidados mais
              realizados?
            </Heading>

            <Flex
              direction={{ xs: 'column', md: 'row' }}
              gap="4"
              alignItems="center"
            >
              <Flex
                width={{ xs: '100%', md: '30%' }}
                direction="column"
                alignItems="center"
                gap="3"
              >
                <ColorBox
                  p="4"
                  style={{
                    background: 'var(--orange)',
                  }}
                >
                  Trabalho de cuidados de pessoas
                </ColorBox>
                <Text style={{ textAlign: 'center' }}>
                  Veja as atividades de cuidados de pessoas mais realizadas na
                  Bahia e por quantos milhões de pessoas.
                </Text>
              </Flex>
              <Box
                width={{
                  xs: '100%',
                  md: '70%',
                }}
              >
                <img
                  style={{
                    width: '100%',
                  }}
                  src="/assets/home/03_capitulo_ana/graficos_ana/Ana_Grafico_01.svg"
                />
              </Box>
            </Flex>

            <Flex
              direction={{ xs: 'column', md: 'row' }}
              gap="4"
              alignItems="center"
            >
              <Flex
                width={{ xs: '100%', md: '30%' }}
                alignItems="center"
                direction="column"
                gap="3"
              >
                <ColorBox
                  p="4"
                  style={{
                    background: 'var(--verde)',
                  }}
                >
                  Tarefas domésticas
                </ColorBox>
                <Text style={{ textAlign: 'center' }}>
                  Ao lado, veja as tarefas domésticas mais realizadas na Bahia e
                  por quantos milhões de pessoas.
                </Text>
              </Flex>
              <Box
                width={{
                  xs: '100%',
                  md: '70%',
                }}
              >
                <img
                  style={{
                    width: '100%',
                  }}
                  src="/assets/home/03_capitulo_ana/graficos_ana/Ana_Grafico_02.svg"
                />
              </Box>
            </Flex>
            <cite style={{ textAlign: 'center' }}>
              Fonte: IBGE - Pesquisa Nacional por Amostra de Domicílios Contínua
              Anual - 5a visita - 2022.
            </cite>
          </Flex>
        </Flex>
      </SiteWidthContainer>
    </PaperFramedSection>
  )
}
