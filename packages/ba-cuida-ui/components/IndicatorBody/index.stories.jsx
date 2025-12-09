import {
  CONDICOES_TRAB_CUIDADO_REMUNERADO,
  EMPREGABILIDADE,
  PESSOAS_C_DEFICIENCIA,
} from '../IndicatorSpecs'
import { IndicatorBody } from './index'

const meta = {
  title: 'IndicatorBody',
  component: IndicatorBody,
}

export default meta
export const empregabilidade = {
  args: { indicator: EMPREGABILIDADE },
}

export const condicoes_trab_cuidado_remunerado = {
  args: { indicator: CONDICOES_TRAB_CUIDADO_REMUNERADO },
}

export const pessoas_c_deficiencia = {
  args: { indicator: PESSOAS_C_DEFICIENCIA },
}
