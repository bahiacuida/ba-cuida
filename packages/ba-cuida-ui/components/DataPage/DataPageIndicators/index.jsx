import { EvenSpacedList, Flex, Markdown } from '@orioro/react-ui-core'
import { IndicatorCard } from '../../IndicatorCard'
import {
  CONDICOES_TRAB_CUIDADO_REMUNERADO,
  CUIDADO_NAO_REMUNERADO,
  CUIDADO_REMUNERADO,
  EMPREGABILIDADE,
  PERFIL_POPULACIONAL,
  PERFIL_TRAB_CUIDADO_N_REMUNERADO,
  PERFIL_TRAB_CUIDADO_REMUNERADO,
  PESSOAS_C_DEFICIENCIA,
  POPULACAO_PRIORITARIA,
  TEMPO_GASTO_CUIDADO_N_REMUNERADO,
  TRABALHO_E_RENDA,
  EDUCACAO,
} from '../../IndicatorSpecs'

const CARDS = [
  {
    cardTitle: '2º maior motivo',
    cardDescription:
      'que leva mulheres a não buscarem emprego é para cuidar de alguém ou dos afazeres domésticos',
    axis: CUIDADO_REMUNERADO,
    categories: [TRABALHO_E_RENDA],
    indicator: EMPREGABILIDADE,
  },
  {
    cardTitle: '58% de mulheres negras',
    cardDescription:
      'é o perfil das pessoas que executam os trabalhos remunerados dos cuidados',
    axis: CUIDADO_REMUNERADO,
    categories: [TRABALHO_E_RENDA, PERFIL_POPULACIONAL],
    indicator: PERFIL_TRAB_CUIDADO_REMUNERADO,
  },
  {
    cardTitle: 'Até 1 salário mínimo',
    cardDescription: 'é a renda de 65% das trabalhadoras dos cuidados',
    axis: CUIDADO_REMUNERADO,
    categories: [TRABALHO_E_RENDA],
    indicator: CONDICOES_TRAB_CUIDADO_REMUNERADO,
  },
  {
    cardTitle: '64% sem carteira assinada',
    cardDescription:
      'Porcentagem das trabalhadoras dos cuidados sem vínculo trabalhista',
    axis: CUIDADO_REMUNERADO,
    categories: [TRABALHO_E_RENDA],
    indicator: CONDICOES_TRAB_CUIDADO_REMUNERADO,
  },
  {
    cardTitle: 'Jornada dupla',
    cardDescription:
      'Mulheres com emprego fora de casa ainda trabalham mais tempo em atividades domésticas do que homens desempregados',
    axis: CUIDADO_NAO_REMUNERADO,
    categories: [TRABALHO_E_RENDA],
    indicator: TEMPO_GASTO_CUIDADO_N_REMUNERADO,
  },
  {
    cardTitle: '11h semanais a mais',
    cardDescription:
      'são gastas a mais por mulheres em tarefas de cuidado do que homens',
    axis: CUIDADO_NAO_REMUNERADO,
    categories: [TRABALHO_E_RENDA],
    indicator: TEMPO_GASTO_CUIDADO_N_REMUNERADO,
  },
  {
    cardTitle: '80% de mulheres negras',
    cardDescription:
      'é o perfil das pessoas que executam os trabalhos não remunerados dos cuidados',
    axis: CUIDADO_NAO_REMUNERADO,
    categories: [PERFIL_POPULACIONAL],
    indicator: PERFIL_TRAB_CUIDADO_N_REMUNERADO,
  },
  {
    cardTitle: '25 a 49 anos',
    cardDescription:
      'é a média de idade das mulheres que mais realizam trabalho não remunerado de cuidados',
    axis: CUIDADO_NAO_REMUNERADO,
    categories: [PERFIL_POPULACIONAL],
    indicator: PERFIL_TRAB_CUIDADO_N_REMUNERADO,
  },
  {
    cardTitle: '1.903.719 pessoas com deficiência',
    cardDescription: 'Número de pessoas com deficiência (PCDs) na Bahia',
    axis: POPULACAO_PRIORITARIA,
    categories: [PERFIL_POPULACIONAL],
    indicator: PESSOAS_C_DEFICIENCIA,
  },
  {
    cardTitle: '44% das pessoas com deficiência são idosas',
    cardDescription:
      'Porcentagem de pessoas com deficiência (PCDs) com mais de 65 anos',
    axis: POPULACAO_PRIORITARIA,
    categories: [PERFIL_POPULACIONAL],
    indicator: PESSOAS_C_DEFICIENCIA,
  },
  {
    cardTitle: '57% das pessoas com deficiência são mulheres',
    cardDescription:
      'Perfil de gênero das pessoas com deficiência (PCDs) no Estado',
    axis: POPULACAO_PRIORITARIA,
    categories: [PERFIL_POPULACIONAL],
    indicator: PESSOAS_C_DEFICIENCIA,
  },
  {
    cardTitle: '79% das pessoas com deficiência são negras',
    cardDescription:
      'Perfil racial das pessoas com deficiência (PCDs) no Estado',
    axis: POPULACAO_PRIORITARIA,
    categories: [PERFIL_POPULACIONAL],
    indicator: PESSOAS_C_DEFICIENCIA,
  },
  {
    cardTitle: '71% das pessoas com deficiência não estão trabalhando',
    cardDescription:
      'Porcentagem das pessoas com deficiência (PCDs) fora do mercado de trabalho',
    axis: POPULACAO_PRIORITARIA,
    categories: [TRABALHO_E_RENDA],
    indicator: PESSOAS_C_DEFICIENCIA,
  },
  {
    cardTitle: 'Analfabetismo é 3x maior entre pessoas com deficiência',
    cardDescription:
      'Pessoas com deficiência (PCD) enfrentam uma taxa de analfabetismo superior à da população geral.',
    axis: POPULACAO_PRIORITARIA,
    categories: [EDUCACAO],
    indicator: PESSOAS_C_DEFICIENCIA,
  },
]

export function DataPageIndicators() {
  return (
    <Flex direction="column" alignItems="center">
      <Markdown
        style={{
          maxWidth: '500px',
          textAlign: 'center',
        }}
        children={
          'O painel de dados reune indicadores sociais dos cuidados. ' +
          'Cada cartão é interativo: ao clicar, você pode explorar ' +
          'gráficos e dados detalhados sobre cada tema. Os cartões ' +
          'que trazem o símbolo de atenção representam situações mais ' +
          'graves, que exigem ação rápida do poder público.'
        }
      />
      <EvenSpacedList
        columns={{ xs: 1, sm: 2, md: 3 }}
        justifyContent="center"
        gap="4"
      >
        {CARDS.map((card) => (
          <IndicatorCard {...card} />
        ))}
      </EvenSpacedList>
    </Flex>
  )
}
