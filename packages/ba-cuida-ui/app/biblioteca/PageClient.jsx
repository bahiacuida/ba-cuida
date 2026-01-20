'use client'
import { SiteHeader } from '@/components/SiteHeader'
import { Biblioteca } from '@/components/Biblioteca'

export function PageClient() {
  return (
    <>
      <SiteHeader />
      <main tabIndex={-1} id="conteudo-principal">
        <Biblioteca />
      </main>
    </>
  )
}
