import { Box, Flex, Markdown } from '@orioro/react-ui-core'
import { SiteWidthContainer } from '@/components/SiteWidthContainer'
import { PaperFramedSection } from '@/components/PaperFramedSection'
import { PaperCard } from '@/components/PaperCard'
import { Heading, Text } from '@radix-ui/themes'

export function Emprego() {
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
            src="/assets/home/03_capitulo_ana/ilustracoes_ana/Ana_04.svg"
            alt="Ilustração de Ana em pé, cercada por itens de limpeza e brinquedos espalhados. Ela segura a cabeça com uma das mãos e olha para o relógio no pulso, sugerindo sobrecarga de tarefas."
          />
          <Markdown
            style={{ fontSize: '1.25rem', fontWeight: 300 }}
            children={
              'Por conta da sobrecarga dos trabalhos dos cuidados, ' +
              'Ana precisou deixar o seu emprego formal, pois não consegue ' +
              'cumprir todos os horários exigidos.'
            }
          />
        </Flex>
      </SiteWidthContainer>
      <PaperFramedSection style={{ position: 'relative', overflow: 'hidden' }}>
        <img
          style={{
            position: 'absolute',
            top: '60%',
            left: '50%',
            width: '100%',
            transform: 'translate(-50%, -80%) scale(1.5) rotate(15deg)',
            zIndex: 1,
          }}
          loading="lazy"
          src="/assets/home/06_fundos_narrativa/bg_mancha_verde.svg"
          alt=""
          role="presentation"
        />
        <img
          style={{
            position: 'absolute',
            top: '60%',
            left: '50%',
            width: '100%',
            transform: 'translate(-50%, -30%) scale(1.5) rotate(15deg)',
            zIndex: 1,
          }}
          loading="lazy"
          src="/assets/home/06_fundos_narrativa/bg_mancha_laranja.svg"
          alt=""
          role="presentation"
        />
        <SiteWidthContainer
          style={{
            position: 'relative',
            zIndex: 2,
          }}
        >
          <Flex direction="column" gap="8" py="9">
            <Flex
              direction="row"
              justifyContent="flex-end"
              alignItems="stretch"
            >
              <Box
                style={{
                  position: 'relative',
                  height: '100%',
                  width: { xs: '100%', sm: '30%' },
                }}
              >
                <img
                  style={{
                    position: 'absolute',
                    top: 0,
                    width: '100%',
                  }}
                  alt=""
                  src="/assets/home/03_capitulo_ana/montagens_ana/girassol.png"
                  role="presentation"
                />
              </Box>
              <Box
                style={{
                  width: { xs: '100%', sm: '70%' },
                }}
              >
                <Heading
                  as="h3"
                  style={{
                    fontSize: '2rem',
                    lineHeight: '1.2',
                  }}
                >
                  Na Bahia, o 2º maior motivo para mulheres não procurarem
                  emprego é{' '}
                  <strong style={{ color: 'var(--orange-text-dark-bg)' }}>
                    cuidar dos afazeres domésticos e de seus filhos.
                  </strong>
                </Heading>
              </Box>
            </Flex>
            <PaperCard
              backdropAngle="3deg"
              style={{
                position: 'relative',
                zIndex: 2,
              }}
            >
              <img
                src="/assets/home/03_capitulo_ana/graficos_ana/Ana_Grafico_04.svg"
                alt="Gráfico de barras horizontais “Motivos que levaram as pessoas a não procurarem emprego” por gênero. Em roxo, na lista de motivos que levaram mulheres a não buscarem emprego temos, em ordem de maior relevância: “Não havia trabalho na localidade”; “Tinha que cuidar de alguém ou dos afazeres domésticos”, em destaque, com 196 mil mulheres; e “Por problemas de saúde ou gravidez”. Em laranja, na lista de motivos que levaram homens a não buscarem emprego temos, em ordem de maior relevância: “Não havia trabalho na localidade”, “Por problema de saúde”, “estava estudando”."
              />
              <Box
                style={{
                  display: {
                    xs: 'none',
                    sm: 'block',
                  },
                  position: 'absolute',
                  width: '150px',
                  bottom: 0,
                  right: 0,
                  transform: 'translate(50%, 50%)',
                }}
              >
                <img
                  alt=""
                  src="/assets/home/03_capitulo_ana/montagens_ana/Ana_Montagem_06.png"
                  role="presentation"
                />
              </Box>
            </PaperCard>
            <cite
              style={{
                maxWidth: '600px',
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
