import { ref } from 'vue'

import { AccordionControllerState } from '../types/AccordionControllerState'

function useAccordionController(initialState: AccordionControllerState) {
  const state = ref<AccordionControllerState>(initialState)

  const toggleAccordion = (id: string, isExpanded: boolean) => {
    const nextState = { ...state.value }
    if (id in nextState && nextState[id] !== undefined) {
      ;(nextState[id] as { expanded: boolean }).expanded = isExpanded
    }
    state.value = nextState
  }

  const collapseAll = () => {
    const nextState = { ...state.value }
    Object.keys(nextState).forEach((k) => {
      if (k in nextState && nextState[k] !== undefined) {
        ;(nextState[k] as { expanded: boolean }).expanded = false
      }
    })
    state.value = nextState
  }

  const expandAll = () => {
    const nextState = { ...state.value }
    Object.keys(nextState).forEach((k) => {
      if (k in nextState && nextState[k] !== undefined) {
        ;(nextState[k] as { expanded: boolean }).expanded = true
      }
    })
    state.value = nextState
  }

  return {
    collapseAll,
    expandAll,
    state,
    toggleAccordion,
  }
}

export default useAccordionController
