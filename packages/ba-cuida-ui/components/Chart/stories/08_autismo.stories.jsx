import { AUTISMO } from '../../IndicatorSpecs/autismo'
import { Chart } from '../Chart'

const meta = {
  title: 'Components / Chart / 08_autismo',
  component: Chart,
  parameters: {
    // layout: 'fullscreen',
  },
}

export default meta

export const geral = {
  args: AUTISMO.charts[0],
}

export const genero = {
  args: AUTISMO.charts[1],
}

export const raca = {
  args: AUTISMO.charts[2],
}

export const idade = {
  args: AUTISMO.charts[3],
}
