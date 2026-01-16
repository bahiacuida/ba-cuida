import { Sora } from 'next/font/google'

import '@/app/globals.css'
import '@radix-ui/themes/styles.css'
import 'maplibre-gl/dist/maplibre-gl.css'
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'

import { StyledComponentsRegistry } from './StyledComponentsRegistry'
import { LayoutClient } from './LayoutClient'
const sora = Sora({ subsets: ['latin'], weight: ['400', '700'] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${sora.className}`}>
        <a href="#conteudo-principal" className="skip-link">
          Pular para o conteúdo
        </a>
        <StyledComponentsRegistry>
          <LayoutClient>{children}</LayoutClient>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}

export const metadata = {
  title: {
    template: '%s | Bahia Cuida',
    default: 'Bahia Cuida',
  },
  description: 'Observatório de dados do estado da Bahia',
}
