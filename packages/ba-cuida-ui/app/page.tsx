'use client'
import { SiteHeader } from '@/components/SiteHeader'
import { Home } from '@/components/Home'

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main tabIndex={-1} id="conteudo-principal">
        <Home />
      </main>
    </>
  )
}
