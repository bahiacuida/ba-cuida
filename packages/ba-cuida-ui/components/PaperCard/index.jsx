import { Box } from '@orioro/react-ui-core'
import styled from 'styled-components'

const Card = styled(Box)`
  position: relative;

  &::before {
    content: '';
    display: block;
    background-color: #49ac4f;

    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    transform: rotate(${({ $backdropAngle = '-3deg' }) => $backdropAngle});
  }
`

const Surface = styled(Box)`
  position: relative;
  z-index: 2;
  background-color: #f9efd9;
  padding: 10px 40px;
  box-shadow: 0px 8px 8px 0px rgba(0, 0, 0, 0.1);

  @media (max-width: 600px) {
    padding: 10px;
  }
`

export function PaperCard({ children, backdropAngle, ...props }) {
  return (
    <Card {...props} $backdropAngle={backdropAngle}>
      <Surface>{children}</Surface>
    </Card>
  )
}
