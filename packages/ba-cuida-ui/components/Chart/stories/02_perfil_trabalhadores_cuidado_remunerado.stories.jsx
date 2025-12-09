import { PERFIL_TRAB_CUIDADO_REMUNERADO } from '../../IndicatorSpecs/perfil_trab_cuidado_remunerado'
import { Chart } from '../Chart'

const meta = {
  title: 'Chart / 02_perfil_trabalhadores_cuidado_remunerado',
  component: Chart,
  parameters: {
    // layout: 'fullscreen',
  },
}

export default meta
export const geral = {
  args: PERFIL_TRAB_CUIDADO_REMUNERADO.charts[0],
}

export const genero = {
  args: PERFIL_TRAB_CUIDADO_REMUNERADO.charts[1],
}

export const raca = {
  args: PERFIL_TRAB_CUIDADO_REMUNERADO.charts[2],
}

export const idade = {
  args: PERFIL_TRAB_CUIDADO_REMUNERADO.charts[3],
}

export const escolaridade = {
  args: PERFIL_TRAB_CUIDADO_REMUNERADO.charts[4],
}
