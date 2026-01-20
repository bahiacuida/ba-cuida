import { Box, EvenSpacedList, Flex, Markdown } from '@orioro/react-ui-core'
import { PaperFramedSection } from '@/components/PaperFramedSection'
import { SiteWidthContainer } from '@/components/SiteWidthContainer'
import { Heading, Text } from '@radix-ui/themes'

export function Cuidados1() {
  return (
    <PaperFramedSection topFrame={false}>
      <SiteWidthContainer style={{ overflow: 'visible' }}>
        <Flex
          direction={{
            xs: 'column-reverse',
            sm: 'row',
          }}
          alignItems="center"
          style={{
            maxWidth: '900px',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          <Flex
            style={{
              width: { xs: '100%', sm: '50%' },
            }}
            gap="6"
          >
            <Text>
              Gostaríamos de propor uma atividade rápida, que levará apenas
              alguns segundos. Pegue um papel e responda em poucas palavras a
              pergunta:
            </Text>
            <Heading
              as="h1"
              style={{
                fontSize: '2rem',
                fontWeight: 'bold',
              }}
            >
              <strong>Para você, o que são cuidados?</strong>
            </Heading>
            <Text>Guarde a resposta para o final.</Text>
          </Flex>

          <div>
            <Box
              style={{
                marginTop: '-80px',
                marginBottom: {
                  xs: 0,
                  sm: '-80px',
                },
              }}
            >
              <img
                src="/assets/cuidados/montagens/Cuidados_Montagem01.png"
                alt="Montagem em preto e branco de uma mulher jovem negra sentada no chão com expressão pensativa, apoiando o queixo sobre a mão. Ela tem tranças longas e veste camiseta e calça. Atrás dela aparecem pontos de interrogação e formas gráficas coloridas em tons de laranja, roxo e verde, sugerindo dúvida ou reflexão."
              />
            </Box>
          </div>
        </Flex>
      </SiteWidthContainer>
    </PaperFramedSection>
  )
}
