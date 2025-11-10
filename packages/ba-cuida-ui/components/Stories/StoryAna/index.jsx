import { Intro } from './01_Intro'
import { Trabalho } from './02_Trabalho'
import { Genero } from './03_Genero'
import { Emprego } from './04_Emprego'
import { Creche } from './05_Creche'
import { PessoasIdosas } from './06_PessoasIdosas'
import { OutrosImpactos } from './07_OutrosImpactos'

export function StoryAna() {
  return (
    <>
      <Intro />
      <Trabalho />
      <Genero />
      <Emprego />
      <Creche />
      <PessoasIdosas />
      <OutrosImpactos />
    </>
  )
}
