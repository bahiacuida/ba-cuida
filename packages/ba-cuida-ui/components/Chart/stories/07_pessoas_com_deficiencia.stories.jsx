import { PESSOAS_C_DEFICIENCIA } from '../../IndicatorSpecs/pessoas_c_deficiencia'
import { Chart } from '../Chart'

const meta = {
  title: 'Components / Chart / 07_pessoas_com_deficiencia',
  component: Chart,
  parameters: {
    // layout: 'fullscreen',
  },
}

export default meta

export const geral = {
  args: PESSOAS_C_DEFICIENCIA.charts[0],
}

export const genero = {
  args: PESSOAS_C_DEFICIENCIA.charts[1],
}

export const raca = {
  args: PESSOAS_C_DEFICIENCIA.charts[2],
}

export const idade = {
  args: PESSOAS_C_DEFICIENCIA.charts[3],
}

export const tipos_dificuldade = {
  args: PESSOAS_C_DEFICIENCIA.charts[4],
}

export const qtd_dificuldades = {
  args: PESSOAS_C_DEFICIENCIA.charts[5],
}

export const analfabetismo = {
  args: PESSOAS_C_DEFICIENCIA.charts[6],
}

export const trabalho = {
  args: PESSOAS_C_DEFICIENCIA.charts[7],
}
