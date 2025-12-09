import { PERFIL_TRAB_CUIDADO_N_REMUNERADO } from '../../IndicatorSpecs/perfil_trab_cuidado_n_remunerado'
import { Chart } from '../Chart'

const meta = {
  title: 'Chart / 04_perfil_trabalhadoras_cuidado_n_remunerado',
  component: Chart,
  parameters: {
    // layout: 'fullscreen',
  },
}

export default meta
export const geral = {
  args: PERFIL_TRAB_CUIDADO_N_REMUNERADO.charts[0],
}

export const raca = {
  args: PERFIL_TRAB_CUIDADO_N_REMUNERADO.charts[1],
}

export const idade = {
  args: PERFIL_TRAB_CUIDADO_N_REMUNERADO.charts[2],
}
