import { Box, EvenSpacedList, Flex, Markdown } from '@orioro/react-ui-core'
import { PaperFramedSection } from '@/components/PaperFramedSection'
import { SiteWidthContainer } from '@/components/SiteWidthContainer'
import { Heading, Text } from '@radix-ui/themes'

export function Cuidados7() {
  return (
    <PaperFramedSection topFrame={false} bottomFrame={false}>
      <SiteWidthContainer style={{ overflow: 'visible' }}>
        <Flex
          direction={{ xs: 'column', sm: 'row' }}
          alignItems="center"
          style={{
            maxWidth: '900px',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          <Box>
            <img
              style={{
                marginTop: -110,
              }}
              src="/assets/cuidados/montagens/Cuidados_Montagem01.png"
              alt=""
              role="presentation"
            />
          </Box>
          <Flex
            style={{
              width: { xs: '100%', sm: '50%' },
            }}
            gap="6"
          >
            <Text>
              Agora que percorremos esse caminho, volte a atividade do início.
              Leia o que você escreveu e compare com o que descobriu aqui.
            </Text>
            <Heading
              as="h1"
              style={{
                fontSize: '2rem',
                fontWeight: 'bold',
              }}
            >
              <strong>
                Como você definiria, agora,{' '}
                <span style={{ color: 'var(--orange-6)' }}>
                  o que é cuidado?
                </span>
              </strong>
            </Heading>
            <Text>
              Convidamos você a deixar sua resposta no post do instagram. Faça
              parte dessa discussão!
            </Text>
          </Flex>
        </Flex>
      </SiteWidthContainer>
    </PaperFramedSection>
  )
}
