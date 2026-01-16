import { Box, EvenSpacedList, Flex, Markdown } from '@orioro/react-ui-core'
import { PaperFramedSection } from '@/components/PaperFramedSection'
import { SiteWidthContainer } from '@/components/SiteWidthContainer'
import { PaperCard } from '@/components/PaperCard'
import { Heading } from '@radix-ui/themes'

export function About4() {
  return (
    <PaperFramedSection
      style={{
        backgroundColor: 'var(--roxo)',
      }}
    >
      <SiteWidthContainer py="100px">
        <Flex direction="column" gap="8">
          <Heading
            as="h2"
            style={{
              fontSize: '2rem',
              fontWeight: 'bold',
            }}
          >
            <strong>Metodologia geral da iniciativa</strong>
          </Heading>

          <Markdown
            children={`A pesquisa foi conduzida de forma integrada, articulando diferentes dimensões do cuidado. Ela reuniu simultaneamente: 1) o mapeamento de equipamentos públicos de cuidado; 2) a análise do perfil socioeconômico pessoas cuidadoras e as vulnerabilidades que enfrentam; e 3) o estudo das populações prioritárias, elencadas na lei da Política Nacional de Cuidados (PNC), a saber: crianças, adolescentes, pessoas idosas e pessoas com deficiência (PCD). O levantamento de dados evidenciou as lacunas na oferta pública de serviços, revelando a omissão e a insuficiência das esferas estatais na garantia do direito ao cuidado. Ao articular essas dimensões, o estudo expõe como a ausência de políticas públicas estruturadas agrava a sobrecarga sobre as cuidadoras e amplia as desigualdades no acesso aos cuidados essenciais.`}
          />

          <img
            src="/assets/sobre/infograficos/metodologia.png"
            alt="Infográfico descrevendo a metodologia envolvendo as etapas de (1) análise de dados e produção de conhecimento; (2) a indução de políticas públicas; e (3) a construção de redes, de maneira cíclica"
          />

          <Markdown
            children={`A metodologia do Bahia Cuida combina análise de dados, escuta social e cooperação intersetorial para compreender e fortalecer a agenda dos cuidados nos territórios. A iniciativa parte de uma abordagem territorial, reconhecendo que as práticas e políticas de cuidado se expressam de forma diversa em cada município e demandam soluções construídas a partir do diálogo entre poder público, sociedade civil e iniciativas comunitárias.

A implementação segue três etapas complementares. A primeira consiste no levantamento e sistematização de informações sobre políticas, programas e dados públicos relacionados às dimensões do cuidado — saúde, educação, assistência social, cultura e economia do cuidado. A segunda envolve a articulação institucional e comunitária, com reuniões, oficinas e rodas de diálogo entre secretarias municipais e organizações locais, voltadas à construção coletiva de diagnósticos e estratégias. Por fim, a terceira etapa dedica-se à análise integrada, com a produção de indicadores, painéis e informações que subsidiem a formulação de políticas públicas baseadas em evidências.

O processo é conduzido de forma participativa, com ênfase na intersetorialidade, na transparência e no fortalecimento das capacidades locais. Essa metodologia garante que o Bahia Cuida não apenas produza dados, mas também fomente aprendizados, redes e políticas sustentáveis no campo dos cuidados.`}
          />
          <PaperCard>
            <Flex
              p="6"
              style={{
                color: 'var(--marrom-texto)',
              }}
            >
              <Heading
                as="h3"
                style={{
                  fontSize: '2rem',
                  fontWeight: 'bold',
                }}
              >
                <strong>Metodologia de dados </strong>
              </Heading>

              <Markdown
                children={`A metodologia do Bahia Cuida combina análise de dados, escuta social e cooperação intersetorial para compreender e fortalecer a agenda dos cuidados nos territórios. A iniciativa parte de uma abordagem territorial, reconhecendo que as práticas e políticas de cuidado se expressam de forma diversa em cada município e demandam soluções construídas a partir do diálogo entre poder público, sociedade civil e iniciativas comunitárias.

A implementação segue três etapas complementares. A primeira consiste no levantamento e sistematização de informações sobre políticas, programas e dados públicos relacionados às dimensões do cuidado — saúde, educação, assistência social, cultura e economia do cuidado. A segunda envolve a articulação institucional e comunitária, com reuniões, oficinas e rodas de diálogo entre secretarias municipais e organizações locais, voltadas à construção coletiva de diagnósticos e estratégias. Por fim, a terceira etapa dedica-se à análise integrada, com a produção de indicadores, painéis e informações que subsidiem a formulação de políticas públicas baseadas em evidências.

O processo é conduzido de forma participativa, com ênfase na intersetorialidade, na transparência e no fortalecimento das capacidades locais. Essa metodologia garante que o Bahia Cuida não apenas produza dados, mas também fomente aprendizados, redes e políticas sustentáveis no campo dos cuidados.`}
              />
            </Flex>
          </PaperCard>
        </Flex>
      </SiteWidthContainer>
    </PaperFramedSection>
  )
}
