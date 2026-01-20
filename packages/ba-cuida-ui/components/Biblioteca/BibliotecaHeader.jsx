import { Box, Flex } from '@orioro/react-ui-core'
import { PaperScrap } from '@/components/PaperScrap'
import { Heading, Text } from '@radix-ui/themes'
import { SiteWidthContainer } from '@/components/SiteWidthContainer'

export function BibliotecaHeader() {
  return (
    <SiteWidthContainer>
      <Flex direction={{ xs: 'column-reverse', sm: 'row' }} alignItems="center">
        <Box
          style={{
            width: {
              xs: '100%',
              sm: '70%',
            },
            marginRight: {
              xs: '0',
              sm: '-10%',
            },
          }}
        >
          <PaperScrap
            p={{
              xs: '20px',
              sm: '100px',
            }}
          >
            <Flex direction="column" gap="4">
              <Heading
                as="h1"
                style={{
                  fontSize: '2.5rem',
                }}
              >
                Biblioteca
              </Heading>
              <Text>
                Bahia Cuida é um instrumento dedicada à promoção dos direitos e
                bem-estar dos cuidadores e das pessoas cuidadas. Sua biblioteca
                foi selecionada e recomendada pela Coordenadoria Especial de
                Políticas Públicas para as Mulheres (COPM) e abriga uma seleção
                de recursos, incluindo livros, dossiês, cartilhas e artigos, que
                abordam questões relevantes como igualdade de gênero, violência
                contra a mulher e empoderamento feminino.
              </Text>
              <Text
                style={{
                  fontWeight: 'bold',
                }}
              >
                Todo o catálogo da biblioteca está disponível para consultas e
                acessos. Boa leitura!
              </Text>
            </Flex>
          </PaperScrap>
        </Box>
        <Box
          style={{
            position: 'relative',
            zIndex: 2,
            width: {
              xs: '100%',
              sm: '50%',
            },
          }}
        >
          <img
            src="/assets/biblioteca/Biblioteca_Montagem_02.png"
            alt=""
            role="presentation"
          />
        </Box>
      </Flex>
    </SiteWidthContainer>
  )
}
