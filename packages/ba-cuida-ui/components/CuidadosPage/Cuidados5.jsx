import { Box, EvenSpacedList, Flex, Markdown } from '@orioro/react-ui-core'
import { PaperFramedSection } from '@/components/PaperFramedSection'
import { SiteWidthContainer } from '@/components/SiteWidthContainer'
import { Heading, Text } from '@radix-ui/themes'
import { PaperScrap } from '../PaperScrap'
import Link from 'next/link'

export function Cuidados5() {
  return (
    <PaperFramedSection>
      <SiteWidthContainer py="100px">
        <Flex direction="column" gap="5" alignItems="center">
          <Flex
            direction={{ xs: 'column', sm: 'row' }}
            gap="5"
            alignItems="center"
          >
            <Box
              style={{
                width: { xs: '100%', sm: 'calc(30% + 40px)' },
                marginLeft: '-40px',
              }}
            >
              <img
                src="/assets/cuidados/montagens/Cuidados_Montagem09.png"
                alt="ORI:ORO"
              />
            </Box>
            <Flex
              style={{
                width: { xs: '100%', sm: '70%' },
              }}
              direction="column"
            >
              <Markdown
                children={`Como podemos perceber, o trabalho de cuidar deve ser compartilhado entre famílias, comunidades, mercado e, principalmente, o Estado. Para isso, é essencial uma rede de equipamentos públicos que apoie e alivie a sobrecarga das mulheres. Na educação, isso inclui creches e escolas em tempo integral. Na saúde, atendimento domiciliar, centros-dias e instituições de longa permanência (ILPIs). Na assistência social, serviços como CRAS (Centro de Referência de Assistência Social), CREAS (Centro de Referência Especializado de Assistência Social — para pessoas em situação de risco pessoal ou social que demandam intervenções especializadas da proteção social especial) e CAPS (Centros de Atenção Psicossocial). E nas políticas para mulheres, equipamentos como DEAMs (Delegacia Especializada no Atendimento à Mulher) e CRAMs (Centro de Referência de Atendimento à Mulher). Cuidar é uma responsabilidade coletiva — e o Estado precisa fazer sua parte.

A atuação ativa do poder público é essencial na luta pela redistribuição das tarefas de cuidado. São essas mesmas tarefas que hoje tornam a vida das mulheres precarizadas e subtraem horas dos seus dias. 

Já imaginou se as cuidadoras pudessem dedicar parte do seu tempo ao **autocuidado**, em vez de estarem sempre sobrecarregadas com os outros e com atividades domésticas?`}
              />
            </Flex>
          </Flex>
          <PaperScrap
            style={{
              maxWidth: '850px',
            }}
            py={{
              xs: '100px',
              md: '130px',
            }}
            px={{
              xs: '50px',
              md: '130px',
            }}
          >
            <Markdown
              style={{
                fontSize: '1.25rem',
                color: 'var(--marrom-texto)',
              }}
              children={`O autocuidado seria a **"capacidade" de pessoas e comunidades de promoverem sua própria saúde e bem-estar**. No entanto, essa capacidade é determinada, em grande medida, pela disponibilidade de tempo livre — uma recurso que normalmente mulheres cuidadoras não dispõem — e de serviços públicos adequados que facilitem e possibilitem o acesso a esse autocuidado.`}
            />
          </PaperScrap>
          <Text
            style={{ textAlign: 'center', fontSize: '.85rem', maxWidth: 400 }}
          >
            Para conhecer mais profundamente sobre autocuidado e saúde mental,
            visite nossa{' '}
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
      </SiteWidthContainer>
    </PaperFramedSection>
  )
}
