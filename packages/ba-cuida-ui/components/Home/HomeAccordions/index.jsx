import { Flex, Markdown } from '@orioro/react-ui-core'
import { SiteWidthContainer } from '@/components/SiteWidthContainer'
import { LargeToggleBlock } from '@/components/LargeToggleBlock'
import { StoryAna } from '@/components/Stories/StoryAna'
import { StoryEugenia } from '@/components/Stories/StoryEugenia'
import { StoryCriseDosCuidados } from '@/components/Stories/StoryCriseDosCuidados'
import { Heading } from '@radix-ui/themes'

export function HomeAccordions() {
  return (
    <Flex direction="column" gap="5" py="9">
      <SiteWidthContainer pb="6">
        <Flex
          direction={{
            xs: 'column',
            md: 'row',
          }}
          alignItems="center"
          gap="4"
          style={{
            maxWidth: '800px',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          <img
            src="/assets/home/02_ilustracao_home/Home.svg"
            style={{
              width: '40%',
            }}
          />
          <Flex
            style={{
              textAlign: {
                xs: 'center',
                md: 'left',
              },
            }}
          >
            <Heading as="h2">Conheça quem cuida na Bahia</Heading>
            <Markdown
              children={
                'Para compartilhar essa história, vamos contar com a ajuda de ' +
                'duas mulheres que cuidam: Ana e Eugênia.\n\n' +
                'Te convidamos a navegar por essa narrativa e a se engajar na ' +
                'luta por uma sociedade que reconheça, reduza, redistribua, ' +
                'represente e remunere o trabalho de cuidado.'
              }
            />
          </Flex>
        </Flex>
      </SiteWidthContainer>
      <Flex direction="column" gap="5" width="100%">
        <LargeToggleBlock
          number="1"
          label="Ana, uma cuidadora não remunerada e invisibilizada"
          style={{
            maxWidth: 'var(--container-4)',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          <StoryAna />
        </LargeToggleBlock>
        <LargeToggleBlock
          number="2"
          label="Eugênia, uma cuidadora remunerada"
          style={{
            maxWidth: 'var(--container-4)',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          <StoryEugenia />
        </LargeToggleBlock>
        <LargeToggleBlock
          number="3"
          label="A Crise dos Cuidados"
          style={{
            maxWidth: 'var(--container-4)',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          <StoryCriseDosCuidados />
        </LargeToggleBlock>
      </Flex>
    </Flex>
  )
}
