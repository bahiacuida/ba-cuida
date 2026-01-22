import styled from 'styled-components'
import Link from 'next/link'
import { SiteWidthContainer } from '../SiteWidthContainer'
import { PaperCard } from '../PaperCard'
import { Box, EvenSpacedList, Flex } from '@orioro/react-ui-core'
import { Heading, Text } from '@radix-ui/themes'
import { Markdown } from '@orioro/react-ui-core'
import LiteYouTubeEmbed from 'react-lite-youtube-embed'

const HighlightBox = styled.div`
  background-color: var(--orange-9);
  color: white;
  border-radius: 20px;
  padding: 20px;
  width: 80%;
  max-width: 600px;
  text-align: center;
`

export function Cuidados2() {
  return (
    <section>
      <SiteWidthContainer>
        <Flex direction="column" alignItems="center">
          <Flex
            direction="column"
            alignItems="center"
            py="9"
            gap="6"
            maxWidth="850px"
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
                color: 'var(--marrom-texto)',
              }}
            >
              <strong>
                O que são{' '}
                <span style={{ color: 'var(--orange-11)' }}>"cuidados"?</span>
              </strong>
            </Heading>
            <Text
              style={{
                fontSize: '1.5rem',
                fontWeight: 'bold',
                color: 'var(--marrom-texto)',
                textAlign: 'center',
              }}
            >
              Talvez você já esteja imaginando que as respostas costumam variar
              bastante (e você tem razão!).
            </Text>
            <Markdown
              style={{ textAlign: 'center' }}
              children={`Embora as pessoas saibam na prática o que é cuidar, chegar a uma definição objetiva costuma ser desafiador. Isso porque o conceito ainda está em disputa, envolve diferentes agentes e, portanto, reúne muitas interpretações e narrativas.`}
            />
          </Flex>
          <PaperCard backdropAngle="-3deg">
            <EvenSpacedList
              gap="6"
              p="5"
              columns={{
                xs: 1,
                md: 3,
              }}
            >
              <Flex direction="column" gap="3">
                <img
                  src="/assets/cuidados/montagens/Cuidados_Montagem02.png"
                  alt="Montagem em preto e branco de duas mulheres caminhando lado a lado. Uma mulher idosa usa bengala e segura o braço da mulher mais jovem, que a apoia enquanto carrega uma sacola de pão. Ao fundo, há formas gráficas abstratas coloridas em tons de roxo, laranja e rosa."
                />
                <Text>
                  Uma mulher que faz companhia à avó nas atividades, é cuidado?
                </Text>
              </Flex>
              <Flex direction="column" gap="3">
                <img
                  src="/assets/cuidados/montagens/Cuidados_Montagem03.png"
                  alt="Montagem em preto e branco de uma mulher e uma criança lendo juntas. A mulher segura o livro enquanto as duas olham para a página. Ao fundo, há formas gráficas abstratas em tons de verde e roxo"
                />
                <Text>
                  ... e a oferta de creches públicas nas comunidades é
                  considerado cuidado?
                </Text>
              </Flex>
              <Flex direction="column" gap="3">
                <img
                  src="/assets/cuidados/montagens/Cuidados_Montagem04.png"
                  alt="Montagem em preto e branco de uma mulher lavando um prato com expressão de cansaço e desânimo. Ela usa luvas de limpeza e segura uma esponja. Ao fundo, há formas gráficas abstratas coloridas em tons de verde, laranja e roxo."
                />
                <Text>
                  ...e uma diarista executando atividades domésticas é
                  considerado cuidado?
                </Text>
              </Flex>
            </EvenSpacedList>
          </PaperCard>
          <Flex
            direction="column"
            alignItems="center"
            py="9"
            gap="6"
            maxWidth="850px"
            style={{
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            <Text
              style={{
                fontSize: '1.5rem',
                fontWeight: 'bold',
                color: 'var(--marrom-texto)',
                textAlign: 'center',
              }}
            >
              A resposta para todas essas perguntas é “SIM”!
            </Text>
            <Markdown
              style={{ textAlign: 'center' }}
              children={`O entendimento sobre o cuidado vem ganhando luz à medida que aprofundamos a nossa visão sobre suas camadas. No vídeo, a especialista Kelly Agopyan aborda sobre o que são os cuidados:`}
            />

            <div
              style={{
                width: '100%',
              }}
            >
              <LiteYouTubeEmbed id="" title="" />
            </div>
            <Markdown
              style={{ textAlign: 'center' }}
              children={`Percebeu que, como explicado no vídeo, o conceito de cuidado se torna cada vez mais complexo e rico? Uma atividade que, em sua maioria, acontece dentro dos lares é, na verdade, **um trabalho essencial para o funcionamento de toda a sociedade (e muitas vezes invisível!)**.`}
            />
            <Text
              style={{ textAlign: 'center', fontSize: '.85rem', maxWidth: 600 }}
            >
              Para conhecer mais profundamente o trabalho dessas e de outras
              pesquisadoras do cuidado, visite nossa{' '}
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
        </Flex>
      </SiteWidthContainer>
    </section>
  )
}
