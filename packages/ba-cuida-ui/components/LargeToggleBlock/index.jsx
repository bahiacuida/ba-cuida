import { Collapsible } from 'radix-ui'
import styled, { keyframes } from 'styled-components'
import { Icon } from '@mdi/react'
import { mdiMenuDown } from '@mdi/js'
import { useEffect, useRef, useState } from 'react'

export const CollapsibleContent = styled(Collapsible.Content)`
  overflow: hidden;
  opacity: 0;

  transition:
    height 300ms ease-out,
    opacity 300ms ease-out;
  transition-duration: 300ms !important;

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

    contentRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }, [open])
  return (
    <Collapsible.Root open={open} onOpenChange={setOpen}>
      <h2
        ref={contentRef}
        style={{ scrollMarginTop: 20, marginTop: 0, marginBottom: 0 }}
      >
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
                transition: 'transform .3s ease',
                transform: open ? 'rotate(180deg)' : '',
              }}
              path={mdiMenuDown}
              size="48px"
              color="white"
            />
          </ToggleIcon>
        </Trigger>
      </h2>
      <CollapsibleContent tabIndex={open ? '0' : '-1'} forceMount={true}>
        {children}
      </CollapsibleContent>
    </Collapsible.Root>
  )
}
