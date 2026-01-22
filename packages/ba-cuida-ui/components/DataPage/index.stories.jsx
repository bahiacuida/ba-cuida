import { STATIC_INDICATORS } from '../IndicatorSpecs'
import { DataPage } from './index'

const meta = {
  title: 'Pages / DataPage',
  component: DataPage,
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
export const Basic = {
  args: {
    fetchIndicators: () => {
      return STATIC_INDICATORS
    },
  },
}
