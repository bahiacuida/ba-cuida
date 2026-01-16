import { Box, EvenSpacedList, Flex, Markdown } from '@orioro/react-ui-core'
import { PaperFramedSection } from '@/components/PaperFramedSection'
import { SiteWidthContainer } from '@/components/SiteWidthContainer'
import { Heading } from '@radix-ui/themes'
import LiteYouTubeEmbed from 'react-lite-youtube-embed'

export function Cuidados3() {
  return (
    <PaperFramedSection>
      <SiteWidthContainer py="70px">
        <Flex direction="column" gap="6">
          <Flex direction={{ xs: 'column', sm: 'row' }} alignItems="center">
            <Box
              style={{
                width: { xs: '100%', sm: '30%' },
                marginTop: '-70px',
              }}
            >
              <img src="/assets/cuidados/montagens/Cuidados_Montagem05.png" />
            </Box>
            <Flex
              style={{
                width: { xs: '100%', sm: '70%' },
              }}
              direction="column"
            >
              <Heading
                as="h2"
                style={{
                  fontSize: '2rem',
                  fontWeight: 'bold',
                }}
              >
                <strong
                  style={{
                    color: 'var(--orange-6)',
                  }}
                >
                  Quem cuida
                </strong>{' '}
                no Brasil?
              </Heading>
              <Markdown
                children={`No Brasil, a organização social dos cuidados está longe de ser perfeita. Os papéis de gênero ainda associam o trabalho de cuidado quase exclusivamente às mulheres. Quando incluímos o recorte racial, vemos que são principalmente as mulheres negras que exercem esse papel no país. Outro dado relevante: praticamente todas as mulheres realizam atividades de cuidado não remunerado, mas o número de horas dedicadas cresce à medida que a renda diminui.`}
              />
            </Flex>
          </Flex>
          <div
            style={{
              width: '100%',
            }}
          >
            <LiteYouTubeEmbed id="" title="" />
          </div>
        </Flex>
      </SiteWidthContainer>
    </PaperFramedSection>
  )
}
