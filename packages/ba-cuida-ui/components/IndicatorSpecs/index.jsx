import { AUTISMO } from './autismo'
import { TIPO_ATV_CUIDADO_N_REMUNERADO } from './tipo_atv_cuidado_n_remunerado'

import {
  POPULACAO_PRIORITARIA,
  CUIDADO_REMUNERADO,
  CUIDADO_NAO_REMUNERADO,
  TRABALHO_E_RENDA,
  PERFIL_POPULACIONAL,
  EDUCACAO,
} from './constants'
import { CONDICOES_TRAB_CUIDADO_REMUNERADO } from './condicoes_trab_cuidado_remunerado'
import { EMPREGABILIDADE } from './empregabilidade'
import { PERFIL_TRAB_CUIDADO_N_REMUNERADO } from './perfil_trab_cuidado_n_remunerado'
import { PERFIL_TRAB_CUIDADO_REMUNERADO } from './perfil_trab_cuidado_remunerado'
import { PESSOAS_C_DEFICIENCIA } from './pessoas_c_deficiencia'
import { TEMPO_GASTO_CUIDADO_N_REMUNERADO } from './tempo_gasto_cuidado_n_remunerado'

export * from './autismo'
export * from './constants'
export * from './condicoes_trab_cuidado_remunerado'
export * from './empregabilidade'
export * from './perfil_trab_cuidado_n_remunerado'
export * from './perfil_trab_cuidado_remunerado'
export * from './pessoas_c_deficiencia'
export * from './tempo_gasto_cuidado_n_remunerado'
export * from './tipo_atv_cuidado_n_remunerado'

export const STATIC_INDICATORS = [
  {
    ...EMPREGABILIDADE,
    cardTitle: '2º maior motivo',
    cardDescription:
      'que leva mulheres a não buscarem emprego é para cuidar de alguém ou dos afazeres domésticos',
    axis: CUIDADO_REMUNERADO,
    categories: [TRABALHO_E_RENDA],
  },
  {
    ...PERFIL_TRAB_CUIDADO_REMUNERADO,
    cardTitle: '58% de mulheres negras',
    cardDescription:
      'é o perfil das pessoas que executam os trabalhos remunerados dos cuidados',
    axis: CUIDADO_REMUNERADO,
    categories: [TRABALHO_E_RENDA, PERFIL_POPULACIONAL],
  },
  {
    ...CONDICOES_TRAB_CUIDADO_REMUNERADO,
    cardTitle: 'Até 1 salário mínimo',
    cardDescription: 'é a renda de 65% das trabalhadoras dos cuidados',
    axis: CUIDADO_REMUNERADO,
    categories: [TRABALHO_E_RENDA],
  },
  {
    ...CONDICOES_TRAB_CUIDADO_REMUNERADO,
    cardTitle: '64% sem carteira assinada',
    cardDescription:
      'Porcentagem das trabalhadoras dos cuidados sem vínculo trabalhista',
    axis: CUIDADO_REMUNERADO,
    categories: [TRABALHO_E_RENDA],
  },
  {
    ...TEMPO_GASTO_CUIDADO_N_REMUNERADO,
    cardTitle: 'Jornada dupla',
    cardDescription:
      'Mulheres com emprego fora de casa ainda trabalham mais tempo em atividades domésticas do que homens desempregados',
    axis: CUIDADO_NAO_REMUNERADO,
    categories: [TRABALHO_E_RENDA],
  },
  {
    ...TEMPO_GASTO_CUIDADO_N_REMUNERADO,
    cardTitle: '11h semanais a mais',
    cardDescription:
      'são gastas a mais por mulheres em tarefas de cuidado do que homens',
    axis: CUIDADO_NAO_REMUNERADO,
    categories: [TRABALHO_E_RENDA],
  },
  {
    ...PERFIL_TRAB_CUIDADO_N_REMUNERADO,
    cardTitle: '80% de mulheres negras',
    cardDescription:
      'é o perfil das pessoas que executam os trabalhos não remunerados dos cuidados',
    axis: CUIDADO_NAO_REMUNERADO,
    categories: [PERFIL_POPULACIONAL],
  },
  {
    ...PERFIL_TRAB_CUIDADO_N_REMUNERADO,
    cardTitle: '25 a 49 anos',
    cardDescription:
      'é a média de idade das mulheres que mais realizam trabalho não remunerado de cuidados',
    axis: CUIDADO_NAO_REMUNERADO,
    categories: [PERFIL_POPULACIONAL],
  },
  {
    ...PESSOAS_C_DEFICIENCIA,
    cardTitle: '1.903.719 pessoas com deficiência',
    cardDescription: 'Número de pessoas com deficiência (PCDs) na Bahia',
    axis: POPULACAO_PRIORITARIA,
    categories: [PERFIL_POPULACIONAL],
  },
  {
    ...PESSOAS_C_DEFICIENCIA,
    cardTitle: '44% das pessoas com deficiência são idosas',
    cardDescription:
      'Porcentagem de pessoas com deficiência (PCDs) com mais de 65 anos',
    axis: POPULACAO_PRIORITARIA,
    categories: [PERFIL_POPULACIONAL],
  },
  {
    ...PESSOAS_C_DEFICIENCIA,
    cardTitle: '57% das pessoas com deficiência são mulheres',
    cardDescription:
      'Perfil de gênero das pessoas com deficiência (PCDs) no Estado',
    axis: POPULACAO_PRIORITARIA,
    categories: [PERFIL_POPULACIONAL],
  },
  {
    ...PESSOAS_C_DEFICIENCIA,
    cardTitle: '79% das pessoas com deficiência são negras',
    cardDescription:
      'Perfil racial das pessoas com deficiência (PCDs) no Estado',
    axis: POPULACAO_PRIORITARIA,
    categories: [PERFIL_POPULACIONAL],
  },
  {
    ...PESSOAS_C_DEFICIENCIA,
    cardTitle: '71% das pessoas com deficiência não estão trabalhando',
    cardDescription:
      'Porcentagem das pessoas com deficiência (PCDs) fora do mercado de trabalho',
    axis: POPULACAO_PRIORITARIA,
    categories: [TRABALHO_E_RENDA],
  },
  {
    ...PESSOAS_C_DEFICIENCIA,
    cardTitle: 'Analfabetismo é 3x maior entre pessoas com deficiência',
    cardDescription:
      'Pessoas com deficiência (PCD) enfrentam uma taxa de analfabetismo superior à da população geral.',
    axis: POPULACAO_PRIORITARIA,
    categories: [EDUCACAO],
  },
]
