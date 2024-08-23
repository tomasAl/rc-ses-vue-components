export type AccordionState = {
  defaultExpanded?: boolean | undefined
  disabled?: boolean | undefined
  expanded?: boolean | undefined
  state: 'active' | 'completed' | 'pending'
  title: string
}

// Same as state only all props are optional!
// except id which links to the record and must be provided
export type AccordionProps = {
  id: string
  defaultExpanded?: boolean | undefined
  disabled?: boolean | undefined
  expanded?: boolean | undefined
  state?: 'active' | 'completed' | 'pending'
  title?: string
}

export type AccordionControllerState = Record<string, AccordionState>
