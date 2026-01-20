import styled from 'styled-components'
import { SiteWidthContainer } from '../SiteWidthContainer'
import { PaperCard } from '../PaperCard'
import { Box, EvenSpacedList, Flex } from '@orioro/react-ui-core'
import { Heading } from '@radix-ui/themes'
import { Markdown } from '@orioro/react-ui-core'

const HighlightBox = styled.div`
  background-color: var(--orange-9);
  color: white;
  border-radius: 20px;
  padding: 20px;
  width: 80%;
  max-width: 600px;
  text-align: center;

  @media (max-width: 500px) {
    width: 100%;
  }
`

export function About3() {
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
              }}
            >
              Objetivos
            </Heading>
            <Markdown
              children={`O Bahia Cuida tem como principal objetivo utilizar dados qualificados para apoiar a formulação e a implementação de políticas públicas intersetoriais relacionadas ao cuidado nos territórios brasileiros. A iniciativa busca promover um novo olhar sobre o cuidado, reconhecendo-o não apenas como uma necessidade individual, mas como um pilar de sustentação da sociedade.`}
            />

            <Heading as="h3">Entre as metas centrais do projeto estão:</Heading>
            <HighlightBox>
              Produzir e sistematizar informações sobre o cenário dos cuidados
              na Bahia
            </HighlightBox>
            <HighlightBox>
              Fortalecer capacidades locais de gestão e formulação de políticas
              de cuidado
            </HighlightBox>
            <HighlightBox>
              Promover a valorização das cuidadoras, tanto remuneradas quanto
              não remuneradas, reconhecendo seu papel fundamental na economia e
              na vida socia
            </HighlightBox>
            <HighlightBox>
              Contribuir para a integração entre diferentes políticas públicas —
              como saúde, educação, assistência social, mulheres e cultura — a
              partir da lente do cuidado.
            </HighlightBox>

            <Markdown
              children={`O público usuário principal do observatório do Bahia Cuida são gestoras e gestores que atuam em temáticas de gênero e dos cuidados, além de pesquisadoras/es sobre o tema dos cuidados. Já o público atingido pelas ações de toda a iniciativa do Bahia Cuida é diverso, englobando tanto quem cuida quanto quem é cuidado. No grupo de quem cuida, temos as cuidadoras não-remuneradas e profissionais remuneradas, além do público prioritário da Política Nacional de Cuidados: crianças, adolescentes, pessoas com deficiência e idosos.`}
            />
          </Flex>
          <PaperCard>
            <Flex direction="column" gap="6" p="5">
              <Heading
                style={{
                  fontWeight: 'bold',
                }}
                as="h2"
                align="center"
              >
                <strong>Construção coletiva</strong>
              </Heading>
              <Flex direction={{ xs: 'column-reverse', sm: 'row' }}>
                <Markdown
                  children={`Desde o seu início, o Bahia Cuida se caracteriza como uma construção coletiva, resultado da soma de esforços de diversas instituições, especialistas e gestoras públicas comprometidas com a agenda do cuidado. O projeto foi contemplado pelo edital Mover-se na Web, uma iniciativa do NIC.br e do Ceweb.br, que disponibilizou os recursos necessários para viabilizar a primeira etapa de desenvolvimento da plataforma digital do observatório. Esse apoio financeiro também tornou possível toda a articulação institucional com o município de Ilhéus, fortalecendo as bases para a implementação local da Política Nacional de Cuidados.

Além dos recursos financeiros, a construção conceitual e metodológica do Bahia Cuida foi realizada de forma colaborativa, reunindo especialistas e pesquisadoras da temática dos cuidados. Essa diversidade de perspectivas contribuiu para definir as frentes de atuação, os eixos temáticos e a linguagem do projeto, garantindo que ele refletisse tanto o rigor técnico quanto a sensibilidade social necessária para abordar o cuidado em sua complexidade.

No território, a atuação do Bahia Cuida também se dá por meio de articulação direta com o poder público municipal. Em Ilhéus, a iniciativa conta com a parceria ativa de cinco secretarias — Saúde, Educação, Cultura, Assistência Social e Mulheres —, que participam conjuntamente do planejamento e execução das ações. Essa cooperação intersetorial é um dos pilares da metodologia do projeto, assegurando que as políticas e práticas voltadas ao cuidado sejam integradas, coerentes e sustentáveis.`}
                />
                <Box
                  style={{
                    width: { xs: '100%', sm: '40%' },
                    flexShrink: 0,
                  }}
                >
                  <img
                    src="/assets/sobre/montagens/Sobre_Montagem_03.png"
                    alt=""
                    role="presentation"
                  />
                </Box>
              </Flex>
            </Flex>
          </PaperCard>
        </Flex>
      </SiteWidthContainer>
    </section>
  )
}
