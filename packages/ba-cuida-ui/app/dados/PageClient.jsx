'use client'
import { SiteHeader } from '@/components/SiteHeader'
import { DataPage } from '@/components/DataPage'
import { STATIC_INDICATORS } from '@/components/IndicatorSpecs'

export function PageClient() {
  return (
    <>
      <SiteHeader />
      <main tabIndex={-1} id="conteudo-principal">
        <DataPage
          fetchIndicators={
            //
            // In case no NEXT_PUBLIC_API_URL
            // is set or NEXT_PUBLIC_INDICATOR_SRC is set to 'static',
            // use static built-in indicators.
            //
            // This is used for transition period when
            // no additional indicators are required
            // from API.
            //
            process.env.NEXT_PUBLIC_INDICATOR_SRC === 'static' ||
            !process.env.NEXT_PUBLIC_API_URL
              ? () => STATIC_INDICATORS
              : undefined
          }
        />
      </main>
    </>
  )
}
