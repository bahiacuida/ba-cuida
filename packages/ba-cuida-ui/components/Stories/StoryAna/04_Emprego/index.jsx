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
        <SiteWidthContainer>
          <Flex direction="column" gap="8" py="9">
            <Flex direction="row" justifyContent="flex-end">
              <img />
              <Heading
                as="h2"
                style={{
                  width: '70%',
                  fontSize: '2rem',
                  lineHeight: '1.2',
                }}
              >
                Na Bahia, o 2o maior motivo para mulheres não procurarem emprego
                é{' '}
                <strong style={{ color: '#FF8A67' }}>
                  cuidar dos afazeres domésticos e de seus filhos.
                </strong>
              </Heading>
            </Flex>
            <PaperCard>
              <img src="/assets/home/03_capitulo_ana/graficos_ana/Ana_Grafico_04.svg" />
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
