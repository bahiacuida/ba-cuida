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
          <PaperCard backdropAngle="-2deg">
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
                children={`A pesquisa realizada para a coleta e análise dos dados apresentados no Observatório seguiu uma metodologia quantitativa descritiva de dados públicos secundários relacionados às diferentes dimensões do cuidado. 

Como primeiro passo, a partir de uma revisão da literatura sobre o tema, elaboramos uma versão inicial de uma matriz de indicadores capaz de mensurar a situação do cuidado no estado da Bahia. Essa matriz organizou os indicadores em quatro eixos, tomando como referência a Política Nacional de Cuidados: direito ao cuidado, direito a cuidar, direito ao autocuidado e economia do cuidado. Este último eixo foi incorporado pela equipe de pesquisa, considerando a relevância de dar visibilidade a uma dimensão historicamente invisibilizada.

Em seguida, realizamos uma oficina de validação da matriz, com a participação de atrizes de diferentes setores que atuam direta ou indiretamente na temática do cuidado, incluindo academia, setor público e sociedade civil. As contribuições das participantes foram incorporadas, resultando na versão final da matriz de indicadores.

Com base nessa matriz, desenvolvemos uma etapa de pesquisa e mapeamento de dados secundários disponíveis em bases públicas, priorizando a obtenção do maior volume possível de informações, com desagregação em nível municipal e por raça e gênero. Posteriormente, realizamos a coleta, limpeza e análise descritiva dos dados, utilizando softwares de estatística (R) e Excel. Para a coleta e análise específica dos microdados da Pesquisa Nacional por Amostra de Domicílios Contínua (PNAD Contínua), produzidos pelo IBGE, utilizamos os pacotes PNADcIBGE e survey no R, com o script disponível aqui.

Nesta etapa, foi necessária a definição das profissões consideradas como ocupações de cuidado. Para isso, nos fundamentamos no trabalho de Guimarães e Pinheiro (2023), no qual as autoras identificam mais de 70 ocupações relacionadas ao cuidado, listadas na Classificação Nacional de Ocupações para Pesquisas Domiciliares (COD). Essa identificação se baseia em uma tipologia que considera três dimensões: (1) o contexto em que as relações de trabalho ocorrem (doméstico ou não doméstico); (2) o tipo de interação entre trabalhador e beneficiário do cuidado (direta ou indireta); e (3) a necessidade de continuidade do cuidado (recorrente ou não recorrente).

Considerando as limitações de pesquisa deste Observatório, incluímos em nossas análises ocupações de cuidado presentes em ambos os contextos (doméstico e não doméstico), com interação direta e indireta, e que envolvem cuidados de caráter recorrente e dependente. Dessa forma, foram consideradas como profissões de cuidado remunerado: (1) profissionais de enfermagem; (2) professores do ensino pré-escolar; (3) educadores para necessidades especiais; (4) profissionais de nível médio da enfermagem; (5) chefes de cozinha; (6) cozinheiros; (7) governantas e mordomos domésticos; (8) acompanhantes e criados particulares; (9) cuidadores de crianças; (10) ajudantes de professores; (11) trabalhadores de cuidados pessoais em instituições; (12) trabalhadores de cuidados pessoais a domicílio; (13) trabalhadores de cuidados pessoais nos serviços de saúde não classificados; (14) guardas de segurança; (15) agricultores e trabalhadores qualificados no cultivo de hortas, viveiros e jardins; (16) condutores de automóveis, táxis e caminhonetes; (17) trabalhadores dos serviços domésticos em geral; (18) outros trabalhadores da limpeza; (19) trabalhadores elementares da jardinagem e horticultura; e (20) ajudantes de cozinha.

A partir dos dados coletados, realizamos as análises descritivas e a criação da versão inicial dos gráficos por meio da plataforma Google Looker Studio, para otimizar o trabalho da equipe.`}
              />
            </Flex>
          </PaperCard>
        </Flex>
      </SiteWidthContainer>
    </PaperFramedSection>
  )
}
