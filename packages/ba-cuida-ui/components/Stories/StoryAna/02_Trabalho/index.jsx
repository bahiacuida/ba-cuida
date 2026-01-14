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
                alt=""
                role="presentation"
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
                  alt="Gráfico “Atividades de cuidados de pessoas mais realizadas na Bahia e por quantos milhões de pessoas” de barras horizontais laranjas. Em primeiro lugar e com maior recorrência, temos a atividade “Monitorar ou fazer companhia dentro do domicílio”, executada por 2,9 milhões de pessoas. Em seguida, temos a atividade “auxiliar nos cuidados pessoais”, executada por 2,6 milhões de pessoas. Depois, temos “Ler, jogar ou brincar”, atividade executada por 2,4 milhões de pessoas. “Auxiliar nas atividades educacionais” ocupa a quarta posição, com 2,1 milhões de pessoas executando-a. Por fim, e ocupando o quinto lugar de atividade de cuidado de pessoas mais realizada na Bahia, temos “transportar ou acompanhar (na escola, médico, exames, parque, praça, atividades sociais, culturais…)”, executada por 2,1 milhões de pessoas."
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
                  alt="Gráfico “Tarefas domésticas mais realizadas na Bahia e por quantos milhões de pessoas” de barras horizontais verdes. Em primeiro lugar e com maior recorrência, temos a atividade “Preparar ou servir alimentos, arrumar a mesa ou lavar a louça ”, executada por 8 milhões de pessoas. Em seguida, temos a atividade “Limpar ou arrumar domicílio, garagem, quintal ou jardim”, executada por 7,9 milhões de pessoas. Depois, temos “Cuidar da limpeza ou manutenção de roupas e sapatos”, atividade executada por 7,8 milhões de pessoas. “Cuidar da organização do domicílio (pagar contas, contratar serviços, orientar empregados, etc.” ocupa a quarta posição, com 7 milhões de pessoas executando-a. Em seguida, temos a atividade “Cuidar de animais domésticos”, executada por 4,5 milhões de pessoas. Por fim, e ocupando o sexto lugar de atividade doméstica mais realizada na Bahia, temos “Fazer pequenos reparos e manutenção (do domicílio, automóvel, eletrodoméstico ou outros equipamentos)”, executada por 3,8 milhões de pessoas."
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
