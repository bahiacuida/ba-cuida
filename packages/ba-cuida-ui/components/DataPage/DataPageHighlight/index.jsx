import styled from 'styled-components'
import { SiteWidthContainer } from '../../SiteWidthContainer'
import { PaperScrap } from '../../PaperScrap'
import { Flex } from '@orioro/react-ui-core'
import { Heading } from '@radix-ui/themes'
import { Markdown } from '@orioro/react-ui-core'

const HighlightImg = styled.img`
  max-width: 400px;
  width: 50%;
  margin-right: -100px;
`

const BottomImg = styled.div`
  position: absolute;
  z-index: 999;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  overflow: hidden;

  > img {
    width: 100%;

    @media (max-width: 600px) {
      width: 200%;
    }
  }

  &::after {
    content: '';
    display: block;
    position: absolute;
    top: 50%;
    bottom: 0;
    width: 100%;
    background-color: white;
  }
`

export function DataPageHighlight() {
  return (
    <section
      style={{
        position: 'relative',
        paddingBottom: '30px',
        backgroundImage: 'url("/assets/paper_framed_section/noise.png")',
        backgroundSize: '100%',
        backgroundRepeat: 'repeat',
        /* Apply a solid color on top */
        backgroundColor: 'var(--marrom)',
        color: 'white',
        backgroundBlendMode: 'hard-light',
        overflow: 'hidden',
      }}
    >
      <SiteWidthContainer maxWidth="1000px">
        <img
          src="/assets/home/06_fundos_narrativa/bg_mancha_verde.svg"
          alt=""
          role="presentation"
          style={{
            position: 'absolute',
            top: '0',
            left: '0',
            width: 1000,
            zIndex: 1,
            opacity: 0.8,
            transform: 'translate(-50%, 60%)',
          }}
        />
        <img
          src="/assets/home/06_fundos_narrativa/bg_mancha_laranja.svg"
          alt=""
          role="presentation"
          style={{
            position: 'absolute',
            top: '0',
            right: '0',
            width: 1000,
            zIndex: 1,
            opacity: 0.8,
            transform: 'translate(30%, -30%) scale(1.2)',
          }}
        />
        <Flex
          style={{
            position: 'relative',
            zIndex: 2,
          }}
          direction={{
            xs: 'column',
            md: 'row',
          }}
          alignItems="center"
          py="9"
          gap="6"
        >
          <HighlightImg
            src="/assets/dados_bahia/montagens/Dados_Montagem_01.png"
            alt="Montagem com Maria Felipa, figura história marisqueira e quilombola combatente na Guerra de Independência do Brasil, em pose séria, ao centro. Ela aparece em preto e branco, com um turbante na cabeça. Ao fundo, elementos coloridos remetem à culinária e à cultura baiana, como coco e um acarajé, além do Farol da Barra, monumento localizado em Salvador. Formas gráficas abstratas em tons vibrantes nas cores laranja, verde e roxa completam a composição. A montagem simboliza o estado da Bahia."
          />

          <PaperScrap p="100px">
            <Flex
              direction="column"
              gap="3"
              style={{
                color: 'black',
              }}
            >
              <Heading size="8" as="h1">
                ESTADO DA <strong>BAHIA</strong>
              </Heading>
              <Markdown
                children={
                  'Boas-vindas à página do Estado da Bahia! Para acessar ' +
                  'dados dos cuidados, navegue pelo painel de dados, pelo ' +
                  'mapa georreferenciado e pelo infográfico.'
                }
              />
            </Flex>
          </PaperScrap>
        </Flex>

        <BottomImg>
          <img
            src="/assets/paper_framed_section/bottom_1.png"
            alt=""
            role="presentation"
          />
        </BottomImg>
      </SiteWidthContainer>
    </section>
  )
}
