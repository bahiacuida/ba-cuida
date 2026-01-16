import { Box, EvenSpacedList, Flex, Markdown } from '@orioro/react-ui-core'
import { PaperFramedSection } from '@/components/PaperFramedSection'
import { SiteWidthContainer } from '@/components/SiteWidthContainer'
import { Heading } from '@radix-ui/themes'

export function About2() {
  return (
    <PaperFramedSection>
      <SiteWidthContainer py="100px">
        <Flex direction="column" gap="8">
          <Heading
            as="h2"
            style={{
              fontSize: '2rem',
              fontWeight: 'bold',
            }}
          >
            Quem somos
          </Heading>
          <Flex
            direction={{
              xs: 'column',
              sm: 'row',
            }}
          >
            <Box
              style={{
                width: {
                  xs: '100%',
                  sm: '50%',
                },
              }}
            >
              <Markdown
                children={`A Agência de Desenvolvimento Regional (ADR) Sul da Bahia é uma organização sem fins lucrativos que contribui para o desenvolvimento sustentável dos municípios do Sul da Bahia por meio de iniciativas multissetoriais e parcerias estratégicas para alavancar e concretizar o potencial social, econômico e ambiental da região. Trabalhamos junto a gestores públicos no fortalecimento de políticas e na eficiência da gestão, com empresas e instituições privadas comprometidas com o desenvolvimento local e a responsabilidade social, e com a sociedade civil na construção de soluções que respondem às necessidades do território.

O Instituto Foz é uma organização não governamental e sem fins lucrativos que apoia governos e organizações da sociedade civil a fortalecerem os direitos de meninas e mulheres no Brasil. Provocamos mudanças na construção de políticas públicas para que todas, em sua diversidade, possam ter seus direitos assegurados. Acreditamos que assim alcançaremos um mudo mais justo e uma sociedade mais igualitária.`}
              />
            </Box>
            <Flex
              style={{
                width: {
                  xs: '100%',
                  sm: '50%',
                },
              }}
              direction="column"
            >
              <Markdown
                children={`O Instituto ORI:ORO é um instituto que trabalha com o desenvolvimento e implementação de tecnologia de interesse público, composta por uma equipe com mais de 15 anos de experiência em desenvolvimento de software. A ORI:ORO acredita na produção de tecnologias em código aberto como uma via importante para a democracia, transparência, segurança, colaboração, ampliação de uso e inovação de soluções tecnológicas pelo país.`}
              />
              <EvenSpacedList columns={{ xs: 2, sm: 3 }} gap="5px">
                <div>
                  <img
                    src="/assets/sobre/Marcas/ADR_Logo.svg"
                    alt="Agência de Desenvolvimento Regional Sul da Bahia"
                  />
                </div>
                <div>
                  <img
                    src="/assets/sobre/Marcas/Instituto_Foz_Logo.png"
                    alt="Instituto Foz"
                  />
                </div>
                <div>
                  <img
                    src="/assets/sobre/Marcas/OriOro_Logo.png"
                    alt="ORI:ORO"
                  />
                </div>
              </EvenSpacedList>
            </Flex>
          </Flex>
        </Flex>
      </SiteWidthContainer>
    </PaperFramedSection>
  )
}
