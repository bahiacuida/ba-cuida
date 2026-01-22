import { Text } from '@radix-ui/themes'
import { PaperCard } from './index'

const meta = {
  title: 'Components / PaperCard',
  component: PaperCard,
}

export default meta
export const Basic = {
  args: {
    children: (
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: '2rem',
          color: 'var(--marrom-texto)',
        }}
      >
        mulheres, negras, de 25 a 49 anos
      </Text>
    ),
  },
}
