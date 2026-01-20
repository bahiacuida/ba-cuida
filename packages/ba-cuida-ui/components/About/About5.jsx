import styled from 'styled-components'
import { SiteWidthContainer } from '../SiteWidthContainer'
import { EvenSpacedList, Flex, Box } from '@orioro/react-ui-core'
import { Heading } from '@radix-ui/themes'
import { Markdown } from '@orioro/react-ui-core'

const HighlightImg = styled.img``

// const ORGS = [
//   {
//     logo: 'ADR_Logo.svg',
//     alt: 'Agência de Desenvolvimento Regional Sul da Bahia',
//   },
//   {

//   }
// ]

export function About5() {
  return (
    <section>
      <SiteWidthContainer>
        <Flex direction="column" gap="6" p="5">
          <Heading
            style={{
              fontWeight: 'bold',
            }}
            as="h2"
            align="center"
          >
            <strong>Próximos passos</strong>
          </Heading>
          <Flex
            direction={{
              xs: 'column',
              sm: 'row',
            }}
          >
            <Markdown
              children={`Nos próximos meses, o Bahia Cuida seguirá fortalecendo sua atuação no território de Ilhéus, com foco na implementação da primeira versão da página do município de Ilhéus, composto por dados primários fornecidos pelas secretarias municipais parceiras.

A partir dos dados e da articulação realizada, nossa equipa ajudará a identificar potenciais planos e ações intersetoriais dos cuidados que podem ser formulados e implementados junto às secretarias e equipamentos municipais. O objetivo é transformar as formações, os diagnósticos e as articulações realizadas até aqui em ações concretas e sustentáveis, capazes de gerar impactos reais na vida das cuidadoras e das pessoas que demandam cuidados. Além disso, estão previstas novas oficinas territoriais e rodas de diálogo comunitárias, que irão ampliar a escuta social e integrar as vozes da população no processo de formulação das políticas locais de cuidado.

Paralelamente, o projeto se prepara para expandir sua metodologia para outros municípios do sul da Bahia, estimulando a criação de uma rede dos cuidados. Essa expansão envolverá a sistematização das experiências e aprendizados da etapa piloto, a publicação de relatórios e materiais formativos, e o fortale cimento de parcerias com universidades, organizações sociais e instâncias governamentais. Com isso, o Bahia Cuida busca consolidar-se como uma referência nacional em inovação social e política pública do cuidado, inspirando outras regiões do país a desenvolverem iniciativas baseadas em dados, cooperação e valorização dos trabalhos dos cuidados.`}
            />
            <Box
              style={{
                width: {
                  xs: '100%',
                  sm: '40%',
                },
                flexShrink: 0,
              }}
            >
              <img
                src="/assets/sobre/montagens/Sobre_Montagem_05.png"
                alt="Colagem artística que representa o município de Ilhéus. No centro está Mãe Ilza Mukalê, importante líder religiosa e matriarca do candomblé na região, usando turbante e roupas tradicionais enquanto segura um microfone. À direita, aparecem mãos segurando sementes de cacau, com um fruto de cacau ao fundo. À esquerda, vê-se uma tilápia e, abaixo dela, a Igreja de São Sebastião, monumento religioso histórico da cidade. Os elementos — o cacau, o peixe e a igreja — simbolizam pilares econômicos locais, como agricultura, pesca e turismo, compondo uma imagem que sintetiza aspectos culturais e produtivos de Ilhéus."
              />
              <cite>
                Nosso muito obrigada à{' '}
                <a
                  href="https://www.instagram.com/gongombira.ong/"
                  target="_blank"
                  rel="noreferrer noopener"
                  style={{
                    color: 'var(--orange-11)',
                  }}
                >
                  Organização Gongombira (@gongombira.ong)
                </a>{' '}
                por ceder o direito de uso da imagem de Mãe Ilza para o projeto
                Bahia Cuida.
              </cite>
            </Box>
          </Flex>
        </Flex>
      </SiteWidthContainer>
    </section>
  )
}
