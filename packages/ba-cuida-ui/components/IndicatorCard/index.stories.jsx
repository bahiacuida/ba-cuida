import { EMPREGABILIDADE } from '../IndicatorSpecs/empregabilidade'
import { IndicatorCard } from './index'

const meta = {
  title: 'Components / IndicatorCard',
  component: IndicatorCard,
}

export default meta
export const Basic = {
  args: { indicator: EMPREGABILIDADE },
}
