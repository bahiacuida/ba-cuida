import { EMPREGABILIDADE } from '../../IndicatorSpecs'
import { Chart } from '../Chart'

const meta = {
  title: 'Chart / 01_motivo_nao_procurar_trabalho',
  component: Chart,
  parameters: {
    // layout: 'fullscreen',
  },
}

export default meta

export const geral = {
  args: EMPREGABILIDADE.charts[0],
}
