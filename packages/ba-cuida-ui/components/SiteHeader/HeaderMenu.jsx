'use client'
import { Flex } from '@orioro/react-ui-core'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styled from 'styled-components'

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  position: relative;

  &:hover,
  &.active {
    &::after {
      content: '';
      display: block;
      position: absolute;
      top: calc(100% + 6px);
      left: 0;
      right: 0;
      height: 4px;
      background-color: var(--orange-9);
    }
  }
`

function normalizePath(p) {
  if (!p) return '/'
  // remove trailing slash (except root)
  return p.length > 1 && p.endsWith('/') ? p.slice(0, -1) : p
}

function HeaderLink({ href, children, active }) {
  const pathname = usePathname()
  const computedActive =
    typeof active !== 'boolean'
      ? normalizePath(pathname) === normalizePath(href)
      : !!active

  return (
    <StyledLink
      href={href}
      aria-current={computedActive ? 'page' : undefined}
      className={computedActive ? 'active' : undefined}
    >
      {children}
    </StyledLink>
  )
}

const ITEMS = [
  {
    label: 'Quem cuida na Bahia',
    href: '/',
  },
  {
    label: 'Dados',
    href: '/dados/',
  },
  {
    label: 'Cuidados',
    href: '/cuidados/',
  },
  {
    label: 'Biblioteca',
    href: '/biblioteca/',
  },
  {
    label: 'Sobre',
    href: '/sobre/',
  },
]

export function HeaderMenu() {
  return (
    <Flex
      direction={{ xs: 'column', md: 'row' }}
      style={{ backgroundColor: 'white' }}
      gap="5"
      px={{
        xs: '4',
        md: '0',
      }}
      py={{
        xs: '4',
        md: '0',
      }}
    >
      {ITEMS.map((item, idx) => (
        <HeaderLink key={idx} href={item.href}>
          {item.label}
        </HeaderLink>
      ))}
    </Flex>
  )
}
