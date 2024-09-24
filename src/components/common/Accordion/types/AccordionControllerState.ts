export type AccordionState = {
  disabled?: boolean | undefined
  expanded?: boolean | undefined
  state: 'active' | 'completed' | 'error' | 'pending'
  title: string
}

// Same as state only all props are optional!
// except id which links to the record and must be provided
export type AccordionProps = {
  id: string
  disabled?: boolean | undefined
  expanded?: boolean | undefined
  state?: 'active' | 'completed' | 'error' | 'pending'
  title?: string
}

export type AccordionControllerState = Record<string, AccordionState>
