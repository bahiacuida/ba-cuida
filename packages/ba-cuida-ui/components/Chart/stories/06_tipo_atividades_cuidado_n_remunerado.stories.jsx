import { TIPO_ATV_CUIDADO_N_REMUNERADO } from '../../IndicatorSpecs/tipo_atv_cuidado_n_remunerado'
import { Chart } from '../Chart'

const meta = {
  title: 'Chart / 06_tipo_atividades_cuidado_n_remunerado',
  component: Chart,
  parameters: {
    // layout: 'fullscreen',
  },
}

export default meta

export const atv_domestica = {
  args: TIPO_ATV_CUIDADO_N_REMUNERADO.charts[0],
}

export const outras_atv = {
  args: TIPO_ATV_CUIDADO_N_REMUNERADO.charts[1],
}
