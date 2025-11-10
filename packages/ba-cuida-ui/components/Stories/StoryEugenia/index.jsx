import { Intro } from './01_Intro'
import { Remuneracao } from './02_Remuneracao'
import { CarteiraAssinada } from './03_CarteiraAssinada'
import { Previdencia } from './04_Previdencia'
import { Genero } from './05_Genero'

export function StoryEugenia() {
  return (
    <>
      <Intro />
      <Remuneracao />
      <CarteiraAssinada />
      <Previdencia />
      <Genero />
    </>
  )
}
