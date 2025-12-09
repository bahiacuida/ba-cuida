import { CONDICOES_TRAB_CUIDADO_REMUNERADO } from '../../IndicatorSpecs/condicoes_trab_cuidado_remunerado'
import { Chart } from '../Chart'

const meta = {
  title: 'Chart / 03_condicoes_trabalhadores_cuidado_remunerado',
  component: Chart,
  parameters: {
    // layout: 'fullscreen',
  },
}

export default meta
export const media_salarial = {
  args: CONDICOES_TRAB_CUIDADO_REMUNERADO.charts[0],
}

export const carteira_assinada = {
  args: CONDICOES_TRAB_CUIDADO_REMUNERADO.charts[1],
}

export const previdencia = {
  args: CONDICOES_TRAB_CUIDADO_REMUNERADO.charts[2],
}

export const horas_trabalhadas = {
  args: CONDICOES_TRAB_CUIDADO_REMUNERADO.charts[3],
}
