import { Container } from '@radix-ui/themes'
import { forwardRef } from 'react'

export const SiteWidthContainer = forwardRef(function SiteWidthContainerInner(
  { style = {}, ...props },
  ref,
) {
  return (
    <Container
      px={{
        initial: '5',
        md: '9',
      }}
      ref={ref}
      style={{
        // overflow: 'hidden',
        ...style,
      }}
      {...props}
    />
  )
})
