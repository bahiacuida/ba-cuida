import type { Preview } from '@storybook/nextjs'
import '@/app/globals.css'
import { GlobalProviders } from '@/components/GlobalProviders'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <GlobalProviders>
        <Story />
      </GlobalProviders>
    ),
  ],
}

export default preview
