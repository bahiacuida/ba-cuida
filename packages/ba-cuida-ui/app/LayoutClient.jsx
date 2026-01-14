'use client'
import { GlobalProviders } from '@/components/GlobalProviders'

export function LayoutClient({ children }) {
  return <GlobalProviders>{children}</GlobalProviders>
}
