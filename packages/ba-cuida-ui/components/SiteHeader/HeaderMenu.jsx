import { Flex } from '@orioro/react-ui-core'
import Link from 'next/link'
import styled from 'styled-components'

const HeaderLink = styled(Link)``

const ITEMS = [
  {
    label: 'Quem cuida na Bahia',
    href: '',
  },
  {
    label: 'Dados',
    href: '',
  },
  {
    label: 'Cuidados',
    href: '',
  },
  {
    label: 'Biblioteca',
    href: '',
  },
  {
    label: 'Glossário',
    href: '',
  },
  {
    label: 'Sobre',
    href: '',
  },
]

export function HeaderMenu() {
  return (
    <Flex direction="row">
      {ITEMS.map((item, idx) => (
        <HeaderLink key={idx} href={item.href}>
          {item.label}
        </HeaderLink>
      ))}
    </Flex>
  )
}
