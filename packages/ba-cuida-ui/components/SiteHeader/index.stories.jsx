import { fn } from 'storybook/test'
import { SiteHeader } from './index'

const meta = {
  title: 'SiteHeader',
  component: SiteHeader,
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    onLogin: fn(),
    onLogout: fn(),
    onCreateAccount: fn(),
  },
}

export default meta
export const Basic = {
  args: {
    user: {
      name: 'Jane Doe',
    },
  },
}
