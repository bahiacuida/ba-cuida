import styled from 'styled-components'
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

export function Cuidados6() {
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
            <Flex direction={{ xs: 'column', sm: 'row' }} alignItems="center">
              <Box
                p={{ xs: 0, sm: '6' }}
                style={{
                  width: { xs: '100%', sm: '40%' },
                }}
              >
                <Heading
                  as="h2"
                  style={{
                    fontSize: '2rem',
                    fontWeight: 'bold',
                    lineHeight: 1,
                  }}
                >
                  <strong>
                    E afinal,{' '}
                    <span style={{ color: 'var(--orange-11)' }}>
                      o que é “cuidado”?
                    </span>
                  </strong>
                </Heading>
              </Box>
              <Box
                style={{
                  width: { xs: '100%', sm: '60%' },
                }}
              >
                <PaperCard>
                  <Box p="5">
                    <Markdown
                      style={{
                        fontSize: '1.2rem',
                      }}
                      children={`Agora já sabemos que o cuidado está presente em todo lugar, sustentando a economia e a vida em sociedade. Ele envolve várias atividades que, à primeira vista, nem sempre reconhecemos como tal. **Mas então como definimos o que é cuidado?**`}
                    />
                  </Box>
                </PaperCard>
              </Box>
            </Flex>
            <Markdown
              children={`Embora ainda não haja um consenso definitivo para essa resposta, tivemos recentemente um marco importante no Brasil, sobretudo no que diz respeito à definição para a atuação pública.

Em 2023, foi criada a Secretaria Nacional de Cuidados e Família (SNCF) — hoje chamada Secretaria da Política de Cuidados e Família — dentro do Ministério do Desenvolvimento e Assistência Social, Família e Combate à Fome. De forma inédita, o Governo Federal estabeleceu um órgão dedicado especificamente para tratar do cuidado.`}
            />
            <Text
              style={{
                fontSize: '1.25rem',
              }}
            >
              Para orientar essa política, foi definido um marco conceitual que
              descreve cuidado como:
            </Text>
            <PaperCard style={{ maxWidth: '700px' }}>
              <Box p="5">
                <Markdown
                  style={{
                    fontSize: '1.2rem',
                  }}
                  children={`“O trabalho cotidiano de produção de bens e serviços necessários à sustentação e à reprodução diária da vida humana, da força de trabalho, da sociedade e da economia e à garantia do bem-estar de todas as pessoas”`}
                />
              </Box>
            </PaperCard>
            <Text>
              A respeito da Política Nacional de Cuidados (PNC), observe o que a
              pesquisadora [] tem a dizer:
            </Text>
            <div
              style={{
                width: '100%',
              }}
            >
              <LiteYouTubeEmbed id="" title="" />
            </div>
            <Markdown
              children={`A Política Nacional de Cuidados (PNC) ressalta a **importância da realização cotidiana e da coparticipação de diferentes atores** — famílias, comunidades, instituições civis e Estado.`}
            />
            <Box>
              <img
                src="/assets/cuidados/infograficos/cuidado_essencial.png"
                alt="Infográfico listando Atividade doméstica não remunerada, Atividade não remunerada de cuidados de pessoas, Trabalho remunerado de cuidados domésticos, Atividades de autocuidado, Serviços públicos como creches infantis. Tudo isso é cuidado essencial!"
              />
            </Box>
            <Text
              style={{
                fontSize: '1.25rem',
              }}
            >
              Por que é importante existir um observatório de dados sobre a
              temática dos cuidados?
            </Text>
            <Markdown
              children={`O Bahia Cuida é um observatório de dados dos cuidados que serve para jogar luz à temática dos cuidados e monitorar como o peso deste trabalho invisível impacta na vida das mulheres.

No vídeo, nossa especialista aborda a importância de um observatório de dados dos cuidados.`}
            />
            <div
              style={{
                width: '100%',
              }}
            >
              <LiteYouTubeEmbed id="" title="" />
            </div>
          </Flex>
        </Flex>
      </SiteWidthContainer>
    </section>
  )
}
