'use client'
import { Sora } from 'next/font/google'

import '@/app/globals.css'
import '@radix-ui/themes/styles.css'
import { GlobalProviders } from '@/components/GlobalProviders'
import { StyledComponentsRegistry } from './StyledComponentsRegistry'
const sora = Sora({ subsets: ['latin'], weight: ['400', '700'] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${sora.className}`}>
        <StyledComponentsRegistry>
          <GlobalProviders>{children}</GlobalProviders>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
