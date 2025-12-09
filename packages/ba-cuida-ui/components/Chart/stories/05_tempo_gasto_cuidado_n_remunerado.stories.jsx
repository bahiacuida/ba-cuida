import { TEMPO_GASTO_CUIDADO_N_REMUNERADO } from '../../IndicatorSpecs/tempo_gasto_cuidado_n_remunerado'
import { Chart } from '../Chart'

const meta = {
  title: 'Chart / 05_tempo_gasto_cuidado_n_remunerado',
  component: Chart,
  parameters: {
    // layout: 'fullscreen',
  },
}

export default meta

export const geral = {
  args: TEMPO_GASTO_CUIDADO_N_REMUNERADO.charts[0],
}

export const raca = {
  args: TEMPO_GASTO_CUIDADO_N_REMUNERADO.charts[1],
}

export const idade = {
  args: TEMPO_GASTO_CUIDADO_N_REMUNERADO.charts[2],
}

export const ocupacao = {
  args: TEMPO_GASTO_CUIDADO_N_REMUNERADO.charts[3],
}
