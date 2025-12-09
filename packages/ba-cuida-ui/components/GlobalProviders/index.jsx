import { Theme } from '@radix-ui/themes'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useState } from 'react'
import { theme, InputProvider, INPUTS } from '@orioro/react-ui-core'
import { ThemeProvider } from 'styled-components'
import { DialogsProvider } from '../DialogSystem'

export function GlobalProviders({ children }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            // With SSR, we usually want to set some default staleTime
            // above 0 to avoid refetching immediately on the client
            staleTime: 60 * 1000,
            throwOnError: true,
          },
          mutations: {
            throwOnError: true,
          },
        },
      }),
  )

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme()}>
        <Theme
          accentColor="orange"
          grayColor="gray"
          radius="full"
          panelBackground="solid"
          appearance="light"
        >
          <InputProvider renderers={INPUTS} variant="labeled">
            <DialogsProvider>{children}</DialogsProvider>
          </InputProvider>
        </Theme>
      </ThemeProvider>
    </QueryClientProvider>
  )
}
