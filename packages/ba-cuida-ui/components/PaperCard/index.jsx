import { Box } from '@orioro/react-ui-core'
import styled from 'styled-components'

const Card = styled(Box)`
  background-color: #f9efd9;
  padding: 10px 40px;
  box-shadow: 0px 8px 8px 0px rgba(0, 0, 0, 0.1);

  @media (max-width: 600px) {
    padding: 10px;
  }
`

export function PaperCard({ children, ...props }) {
  return <Card {...props}>{children}</Card>
}
