import { Collapsible } from 'radix-ui'
import styled, { keyframes } from 'styled-components'
import { Icon } from '@mdi/react'
import { mdiMenuDown } from '@mdi/js'
import { useEffect, useRef, useState } from 'react'
import { Heading } from '@radix-ui/themes'
import { SiteWidthContainer } from '../SiteWidthContainer'

const TRANSITION_DURATION = '300ms'

export const CollapsibleContent = styled(Collapsible.Content)`
  overflow: hidden;
  opacity: 0;

  transition: opacity ${TRANSITION_DURATION} ease-out;
  transition-duration: ${TRANSITION_DURATION} !important;

  &[data-state='open'] {
    opacity: 1;
    height: var(--radix-collapsible-content-height);
  }

  &[data-state='closed'] {
    height: 0;
    opacity: 0;
  }
`
const Trigger = styled(Collapsible.Trigger)`
  width: 100%;
  background-color: #f9f9f9;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0;
  text-align: left;
  border: none;
  border-radius: 24px;
  padding: 8px 24px;
  min-height: 100px;
  cursor: pointer;

  &:hover {
    background-color: #e9e9e9;
  }
`

const TriggerLabel = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;

  > span:nth-child(1) {
    font-size: 2.5rem;
    margin-right: 10px;
  }

  > span:nth-child(2) {
    font-size: 1.75rem;
    text-transform: uppercase;
  }
`

const ToggleIcon = styled.div`
  flex-shrink: 0;
  flex-grow: 0;
  margin-left: 20px;
  background-color: #8c7d7d;
  border-radius: 8px;
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export function LargeToggleBlock({ number, label, children, color, ...props }) {
  const [open, setOpen] = useState(false)
  const contentRef = useRef(null)

  useEffect(() => {
    if (!open) {
      return
    }

    const raf = requestAnimationFrame(() => {
      //
      // Run in next af, so that content is already open
      //
      contentRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    })

    return () => cancelAnimationFrame(raf)
  }, [open])
  return (
    <Collapsible.Root open={open} onOpenChange={setOpen}>
      <SiteWidthContainer>
        <Heading as="h2" ref={contentRef} style={{ scrollMarginTop: 20 }}>
          <Trigger {...props}>
            <TriggerLabel>
              <span>{number}. </span>
              <span>{label}</span>
            </TriggerLabel>
            <ToggleIcon
              style={{
                backgroundColor: color,
              }}
            >
              <Icon
                style={{
                  transition: `transform ${TRANSITION_DURATION} ease-out`,
                  transform: open ? 'rotate(180deg)' : '',
                }}
                path={mdiMenuDown}
                size="48px"
                color="white"
              />
            </ToggleIcon>
          </Trigger>
        </Heading>
      </SiteWidthContainer>
      <CollapsibleContent tabIndex={open ? '0' : '-1'} forceMount={true}>
        {children}
      </CollapsibleContent>
    </Collapsible.Root>
  )
}
