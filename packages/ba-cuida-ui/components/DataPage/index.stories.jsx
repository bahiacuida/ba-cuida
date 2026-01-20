import { STATIC_INDICATORS } from '../IndicatorSpecs'
import { DataPage } from './index'

const meta = {
  title: 'DataPage',
  component: DataPage,
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
export const Basic = {
  fetchIndicators: () => {
    return STATIC_INDICATORS
  },
}
