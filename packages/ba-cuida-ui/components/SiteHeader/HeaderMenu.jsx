import { Flex } from '@orioro/react-ui-core'
import Link from 'next/link'
import styled from 'styled-components'

const HeaderLink = styled(Link)`
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

const ITEMS = [
  {
    label: 'Quem cuida na Bahia',
    href: '/',
  },
  {
    label: 'Dados',
    href: '/dados',
  },
  // {
  //   label: 'Cuidados',
  //   href: '',
  // },
  // {
  //   label: 'Biblioteca',
  //   href: '',
  // },
  // {
  //   label: 'Glossário',
  //   href: '',
  // },
  // {
  //   label: 'Sobre',
  //   href: '',
  // },
]

export function HeaderMenu() {
  return (
    <Flex direction={{ xs: 'column', md: 'row' }} gap="5">
      {ITEMS.map((item, idx) => (
        <HeaderLink
          key={idx}
          href={item.href}
          className={item.active ? 'active' : ''}
        >
          {item.label}
        </HeaderLink>
      ))}
    </Flex>
  )
}
