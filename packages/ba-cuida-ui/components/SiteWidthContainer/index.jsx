import { Container } from '@radix-ui/themes'
import { forwardRef } from 'react'

export const SiteWidthContainer = forwardRef(
  function SiteWidthContainerInner(props, ref) {
    return (
      <Container
        px={{
          initial: '5',
          md: '9',
        }}
        ref={ref}
        {...props}
      />
    )
  },
)
