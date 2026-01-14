import styled from 'styled-components'
import { SiteWidthContainer } from '../../SiteWidthContainer'
import { Flex } from '@orioro/react-ui-core'
import { Heading } from '@radix-ui/themes'
import { Markdown } from '@orioro/react-ui-core'

const HighlightImg = styled.img``

export function HomeHighlight() {
  return (
    <section
      style={{
        backgroundImage: 'url("/assets/home/01_banner/Banner-Home_BG.png")',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        minHeight: '600px',
      }}
    >
      <SiteWidthContainer>
        <Flex direction="column" alignItems="center" py="9" gap="6">
          <HighlightImg
            style={{
              maxWidth: '800px',
              width: '70vw',
            }}
            src="/assets/home/01_banner/Banner-Home_Mulher.png"
            alt={
              'Fotografia de uma mulher negra com roupa e turbante ' +
              'estampados em preto e branco, em destaque no centro, ' +
              'tocando levemente a cabeça com as mãos. Atrás dela há ' +
              'formas coloridas em roxo, laranja e verde e palavras ' +
              'sobrepostas em estilo manuscrito, incluindo ‘tarefas domésticas’, ' +
              '‘remunerar’, ‘reconhecer’, ‘auto cuidado’ e ‘PCD’. ' +
              'Um recorte verde ao lado traz a frase ‘Quem cuida de quem cuida?’. ' +
              'A composição tem tom reflexivo e aborda temas de cuidado e reconhecimento ' +
              'do trabalho de quem cuida.'
            }
          />

          <Flex
            maxWidth="800px"
            alignItems="center"
            gap="4"
            style={{
              textAlign: 'center',
              color: 'white',
            }}
          >
            <Heading size="9" as="h1">
              Bahia Cuida!
            </Heading>

            <Markdown
              children={
                'O cuidado atravessa nossas vidas todos os dias — cuidamos de alguém, ' +
                'de nós mesmas, das nossas casas, famílias e comunidades. Apesar ' +
                'disso, esse trabalho essencial continua invisível e desvalorizado. O ' +
                'Bahia Cuida nasce para trazer o cuidado ao centro do debate público, ' +
                'tornando visível a crise que vivemos e fortalecendo o compromisso ' +
                'coletivo com quem cuida e é cuidado.\n\n' +
                'Aqui, você encontra dados, ' +
                'mapas e materiais que revelam a realidade do cuidado na Bahia e ' +
                'inspiram políticas, práticas e ações para transformar essa pauta em ' +
                'uma responsabilidade compartilhada entre pessoas, setores e governos.'
              }
            />
          </Flex>
        </Flex>
      </SiteWidthContainer>
    </section>
  )
}
