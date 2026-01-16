'use client'
import { SiteHeader } from '@/components/SiteHeader'
import { About } from '@/components/About'

export function PageClient() {
  return (
    <>
      <SiteHeader />
      <main tabIndex={-1} id="conteudo-principal">
        <About />
      </main>
    </>
  )
}
