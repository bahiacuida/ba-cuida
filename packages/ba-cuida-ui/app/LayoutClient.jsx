'use client'
import { useState, useEffect } from 'react'
import { GlobalProviders } from '@/components/GlobalProviders'

import { GoogleAnalytics } from './GoogleAnalytics'
import CookieConsent, { getCookieConsentValue } from 'react-cookie-consent'

export function LayoutClient({ children }) {
  const [hasAcceptedCookies, setHasAcceptedCookies] = useState(false)

  useEffect(() => {
    setHasAcceptedCookies(getCookieConsentValue() || false)
  }, [])

  console.log('hasAcceptedCookies', hasAcceptedCookies)

  return (
    <>
      {/* Global site tag (gtag.js) - Google Analytics */}
      {hasAcceptedCookies ? <GoogleAnalytics /> : null}
      <GlobalProviders>{children}</GlobalProviders>
      <CookieConsent
        location="bottom"
        style={{ background: 'var(--roxo)' }}
        buttonStyle={{
          background: 'var(--orange-10)',
          fontWeight: 'bold',
          color: 'white',
        }}
        buttonText="Aceitar"
        onAccept={() => {
          setHasAcceptedCookies(true)
        }}
      >
        Usamos cookies em nosso site para oferecer uma melhor experiência,
        lembrando suas preferências e visitas repetidas. Ao clicar em “Aceitar”,
        você concorda com o uso de cookies descrito na nossa{' '}
        <a
          target="_blank"
          href="/termos/politica-de-privacidade.pdf"
          style={{
            fontWeight: 'bold',
            textDecoration: 'underline',
            color: 'inherit',
          }}
        >
          Política de Privacidade
        </a>
        .
      </CookieConsent>
    </>
  )
}
