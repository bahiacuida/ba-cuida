import { Box, EvenSpacedList, Flex, Markdown } from '@orioro/react-ui-core'
import { PaperFramedSection } from '@/components/PaperFramedSection'
import { SiteWidthContainer } from '@/components/SiteWidthContainer'
import { Heading } from '@radix-ui/themes'

export function About6() {
  return (
    <PaperFramedSection
      style={{
        backgroundColor: 'var(--verde)',
      }}
    >
      <SiteWidthContainer py="100px">
        <Flex direction="column" gap="8">
          <Flex direction={{ xs: 'column', sm: 'row' }} alignItems="center">
            <Box>
              <img
                src="/assets/sobre/montagens/Sobre_Montagem_06.png"
                alt=""
                role="presentation"
              />
            </Box>

            <Flex
              direction="column"
              gap="6"
              style={{
                width: { xs: '100%', sm: '50%' },
                flexShrink: 0,
              }}
            >
              <Heading
                as="h2"
                style={{
                  fontSize: '2rem',
                  fontWeight: 'bold',
                }}
              >
                Sobre software livre
              </Heading>

              <Markdown
                children={`O software livre representa um pilar fundamental para a construção de tecnologias mais democráticas, transparentes e sustentáveis. Ao permitir que o código-fonte de um sistema seja aberto, auditável e modificável, ele promove a autonomia tecnológica e o compartilhamento de conhecimento entre pessoas, instituições e territórios. Essa lógica de abertura e colaboração é especialmente importante no contexto das políticas públicas, pois garante que as ferramentas digitais estejam a serviço do bem comum, e não de interesses restritos a empresas ou grupos privados.`}
              />
            </Flex>
          </Flex>

          <Markdown
            children={`Além de favorecer a transparência, o uso de software livre estimula a inovação social e o fortalecimento de comunidades locais de desenvolvimento. Em vez de depender de soluções prontas e fechadas, cada território pode adaptar as tecnologias às suas realidades e desafios específicos. Isso fortalece a capacidade pública de criar, aprender e evoluir de forma contínua — e também contribui para o uso mais eficiente dos recursos públicos, já que as soluções livres evitam custos elevados de licenciamento e podem ser reutilizadas por diferentes instituições.

Outro aspecto central do software livre é seu potencial para ampliar a inclusão digital e a participação cidadã. Ao tornar a tecnologia acessível e aberta, ele possibilita que pessoas e organizações se tornem coautoras de processos tecnológicos e não apenas usuárias passivas. Essa democratização do conhecimento técnico abre espaço para que novas vozes, saberes e práticas — muitas vezes invisibilizadas — façam parte da construção de soluções coletivas e mais justas.`}
          />

          <Flex direction={{ xs: 'column', sm: 'row' }} alignItems="center">
            <Flex
              direction="column"
              gap="6"
              style={{
                width: { xs: '100%', sm: '50%' },
                flexShrink: 0,
              }}
            >
              <Markdown
                children={`Além de favorecer a transparência, o uso de software livre estimula a inovação social e o fortalecimento de comunidades locais de desenvolvimento. Em vez de depender de soluções prontas e fechadas, cada território pode adaptar as tecnologias às suas realidades e desafios específicos. Isso fortalece a capacidade pública de criar, aprender e evoluir de forma contínua — e também contribui para o uso mais eficiente dos recursos públicos, já que as soluções livres evitam custos elevados de licenciamento e podem ser reutilizadas por diferentes instituições.

Outro aspecto central do software livre é seu potencial para ampliar a inclusão digital e a participação cidadã. Ao tornar a tecnologia acessível e aberta, ele possibilita que pessoas e organizações se tornem coautoras de processos tecnológicos e não apenas usuárias passivas. Essa democratização do conhecimento técnico abre espaço para que novas vozes, saberes e práticas — muitas vezes invisibilizadas — façam parte da construção de soluções coletivas e mais justas.`}
              />
            </Flex>
            <Box>
              <img
                src="/assets/sobre/montagens/Sobre_Montagem_07.png"
                alt=""
                role="presentation"
              />
            </Box>
          </Flex>
        </Flex>
      </SiteWidthContainer>
    </PaperFramedSection>
  )
}
