import Link from 'next/link'
import { AppHeader, Flex } from '@orioro/react-ui-core'
import { BaCuidaLogo } from '../BaCuidaLogo'
import { HeaderMenu } from './HeaderMenu'
import { IconButton } from '@radix-ui/themes'
import { Icon } from '@mdi/react'
import { mdiClose, mdiMenu } from '@mdi/js'

export function SiteHeader() {
  return (
    <AppHeader.Root>
      <AppHeader.Logo
        style={{
          height: '95%',
        }}
      >
        <Link href="/">
          <BaCuidaLogo />
        </Link>
      </AppHeader.Logo>
      <AppHeader.Main>
        <Flex
          direction="row"
          justifyContent="flex-end"
          display={{
            xs: 'none',
            sm: 'none',
            md: 'flex',
          }}
        >
          <HeaderMenu />
        </Flex>
      </AppHeader.Main>
      <AppHeader.OverlayMenu
        hideAt="md"
        trigger={({ menuOpen }) => (
          <IconButton variant="ghost" size="1" highContrast>
            <Icon path={menuOpen ? mdiClose : mdiMenu} size="24px" />
          </IconButton>
        )}
      >
        HELLO
      </AppHeader.OverlayMenu>
    </AppHeader.Root>
  )
}
