import styled from 'styled-components'
import { SiteWidthContainer } from '../SiteWidthContainer'
import { EvenSpacedList, Flex } from '@orioro/react-ui-core'
import { Heading } from '@radix-ui/themes'
import { Markdown } from '@orioro/react-ui-core'

const HighlightImg = styled.img``

export function About1() {
  return (
    <section>
      <SiteWidthContainer>
        <Flex direction="column" alignItems="center" py="9" gap="6">
          <HighlightImg
            style={{
              maxWidth: '500px',
              width: '70vw',
            }}
            src="/assets/sobre/montagens/Sobre_Montagem_01.png"
            alt={
              'Fotografia de uma mulher negra com roupa e turbante ' +
              'estampados em preto e branco, em destaque no centro, ' +
              'tocando levemente a cabeça com as mãos.'
            }
          />

          <Flex
            style={{
              maxWidth: '850px',
            }}
          >
            <Heading
              as="h1"
              style={{
                fontSize: '2rem',
                fontWeight: 'bold',
              }}
            >
              O que é o Bahia Cuida
            </Heading>
            <Markdown
              children={`É Uma iniciativa pioneira que nasce com o propósito de orientar a territorialização da Política Nacional de Cuidados (PNC), tendo a Bahia como o primeiro território e articulação. Criado em 2024, o projeto é fruto da colaboração entre três organizações do terceiro setor: **ADR Sul da Bahia, Instituto Foz e Instituto ORI:ORO**. Essas instituições se uniram com a missão de fortalecer a agenda dos cuidados no Brasil, conectando dados, políticas públicas e práticas locais.

O projeto atua em duas grandes frentes complementares. A primeira é a criação de um observatório de dados sobre os cuidados em suas múltiplas dimensões — saúde, educação, segurança, assistência social, economia do cuidado não remunerado e redes comunitárias. Esse observatório busca reunir e analisar informações qualificadas para subsidiar a formulação de políticas públicas baseadas em evidências.

A segunda frente é a articulação com governos locais do estado da Bahia, especialmente em municípios do sul do estado. O objetivo é descentralizar a Política Nacional de Cuidados, fortalecendo sua implementação nos níveis regional e municipal. A iniciativa parte do reconhecimento de que o cuidado é uma dimensão essencial da vida social, econômica e comunitária — e que precisa ser compreendido, reconhecido e valorizado nas políticas públicas.

Atualmente, o Bahia Cuida concentra suas ações na região sul da Bahia, com atuação direta no município de Ilhéus, onde vem construindo uma rede de colaboração com diferentes órgãos da gestão pública e com as comunidades locais.

              `}
            />
          </Flex>

          <Flex
            style={{
              maxWidth: '850px',
              width: '100%',
            }}
          >
            <Heading as="h3" size="3">
              Idealização e Realização
            </Heading>
            <EvenSpacedList
              columns={{
                xs: 2,
                sm: 3,
              }}
              gap="60px"
              alignItems="center"
            >
              <div>
                <img
                  src="/assets/sobre/Marcas/ADR_Logo.svg"
                  alt="Agência de Desenvolvimento Regional Sul da Bahia"
                />
              </div>
              <Flex alignItems="center">
                <img
                  style={{
                    width: '80%',
                  }}
                  src="/assets/sobre/Marcas/Instituto_Foz_Logo.png"
                  alt="Instituto Foz"
                />
              </Flex>
              <div>
                <img src="/assets/sobre/Marcas/OriOro_Logo.png" alt="ORI:ORO" />
              </div>
            </EvenSpacedList>
            <Flex
              direction={{ xs: 'column', sm: 'row' }}
              alignItems={{
                xs: 'flex-start',
                sm: 'center',
              }}
            >
              <Flex
                direction="column"
                style={{
                  width: { xs: '100%', sm: '66.66%' },
                }}
              >
                <Heading as="h3" size="3">
                  Apoio
                </Heading>
                <EvenSpacedList columns={2} gap="60px" alignItems="center">
                  <div>
                    <img
                      src="/assets/sobre/Marcas/NicBR_Logo.png"
                      alt="Nic.BR"
                    />
                  </div>
                  <div>
                    <img
                      src="/assets/sobre/Marcas/Ceweb_Logo.png"
                      alt="Ceweb.BR"
                    />
                  </div>
                </EvenSpacedList>
              </Flex>
              <Flex
                direction="column"
                style={{
                  width: { xs: '50%', sm: '33.33%' },
                }}
              >
                <Heading as="h3" size="3">
                  Parceria Local
                </Heading>
                <EvenSpacedList columns={1} gap="60px" alignItems="center">
                  <div>
                    <img
                      src="/assets/sobre/Marcas/Prefeitura_de_Ilheus_Logo.png"
                      alt="Prefeitura de Ilhéus"
                    />
                  </div>
                </EvenSpacedList>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </SiteWidthContainer>
    </section>
  )
}
