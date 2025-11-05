import { fn } from 'storybook/test'

import { SiteHeader } from './index'

const meta = {
  title: 'SiteHeader',
  component: SiteHeader,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  // tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
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
