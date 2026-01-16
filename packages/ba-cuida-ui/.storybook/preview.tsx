import type { Preview } from '@storybook/nextjs'
import { Sora } from 'next/font/google'

import '@/app/globals.css'
import '@radix-ui/themes/styles.css'
import 'maplibre-gl/dist/maplibre-gl.css'
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'

import { GlobalProviders } from '@/components/GlobalProviders'
import { useEffect } from 'react'

const sora = Sora({ subsets: ['latin'], weight: ['400', '700'] })

//
// https://github.com/recharts/recharts/issues/3615
// https://stackoverflow.com/questions/75124430/react-beautiful-dnd-warning-defaultprops-will-be-removed
//
// For:
// - recharts
// - react-beautiful-dnd
//
const error = console.error
console.error = (...args) => {
  if (/defaultProps/.test(args[0])) return
  error(...args)
}

function Decorators({ children }) {
  //
  // Add font class to body element in order to make
  // the font available to all elements (including those using portals)
  //
  useEffect(() => {
    document.body.classList.add(sora.className)
    // document.body.classList.add(reddit_mono.className)
    return () => {
      document.body.classList.remove(sora.className)
      // document.body.classList.remove(reddit_mono.className)
    }
  }, [])

  return (
    <GlobalProviders cookieDomain="localhost">
      {/*<ReactQueryDevtools initialIsOpen={false} />*/}
      {children}
    </GlobalProviders>
  )
}

const preview: Preview = {
  decorators: [
    (Story) => (
      <Decorators>
        <Story />
      </Decorators>
    ),
  ],
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
}

export default preview
