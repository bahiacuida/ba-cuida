import styled from 'styled-components'
import { Flex } from '@orioro/react-ui-core'
import { Badge, Heading, Text } from '@radix-ui/themes'
import { useDialogs } from '../DialogSystem'
import { IndicatorBody } from '../IndicatorBody'

const Container = styled.button`
  background: none;
  border: #c6c6c6 1px solid;
  padding: 30px;
  border-top-left-radius: 30px;
  font-family: inherit;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  > * + * {
    margin-top: 20px;
  }

  cursor: pointer;
`

export function IndicatorCard({
  indicator,
  axis,
  categories = [],
  cardTitle,
  cardDescription,
  ...props
}) {
  const dialogs = useDialogs()

  return (
    <Container
      onClick={async (e) => {
        e.preventDefault()
        await dialogs.view({
          maxWidth: '1000px',
          children: <IndicatorBody indicator={indicator} />,
        })
      }}
      {...props}
    >
      <Flex direction="column" gap="20px">
        {axis && (
          <Flex direction="row" gap="3">
            <img
              src={`/assets/dados_bahia/icones_eixos/${axis.slug}.svg`}
              alt={axis.iconAlt}
              style={{
                width: 50,
                height: 50,
              }}
            />
            <Flex
              direction="column"
              alignItems="flex-start"
              justifyContent="center"
              gap="0"
            >
              <Text
                style={{
                  fontSize: '12px',
                  color: '#817D7D',
                  textTransform: 'uppercase',
                  textAlign: 'left',
                }}
              >
                Eixo
              </Text>
              <Text
                as="h4"
                style={{
                  margin: 0,
                  fontSize: '13px',
                  // color: '#523A30',
                  color: 'var(--orange-9)',
                  textAlign: 'left',
                }}
              >
                {axis.label}
              </Text>
            </Flex>
          </Flex>
        )}
        {cardTitle && (
          <Heading
            as="h3"
            style={{
              fontSize: '1.75rem',
              color: '#FF6219',
            }}
          >
            {cardTitle}
          </Heading>
        )}
        {cardDescription && (
          <Text
            style={{
              fontSize: '13px',
              // color: '#523A30',
              color: 'var(--orange-9)',
            }}
          >
            {cardDescription}
          </Text>
        )}
      </Flex>
      <Flex direction="row" gap="2">
        {categories.map((category) => (
          <Badge color="orange" key={category}>
            {category}
          </Badge>
        ))}
      </Flex>
    </Container>
  )
}
