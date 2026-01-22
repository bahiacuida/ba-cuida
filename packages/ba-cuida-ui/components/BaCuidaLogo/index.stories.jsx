import { BaCuidaLogo } from './index'

const meta = {
  title: 'Components / BaCuidaLogo',
  component: BaCuidaLogo,
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
export const Basic = {}

export const Light = () => (
  <div
    style={{
      backgroundColor: 'black',
    }}
  >
    <BaCuidaLogo colorProfile="light" />
  </div>
)

export const Dark = {
  args: {
    colorProfile: 'dark',
  },
}
