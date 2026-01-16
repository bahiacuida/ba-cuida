'use client'
import { SiteHeader } from '@/components/SiteHeader'
import { CuidadosPage } from '@/components/CuidadosPage'

export function PageClient() {
  return (
    <>
      <SiteHeader />
      <main tabIndex={-1} id="conteudo-principal">
        <CuidadosPage />
      </main>
    </>
  )
}
