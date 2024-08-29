import { AccordionControllerState } from '../types/AccordionControllerState'

function useAccordionController(initialState: AccordionControllerState) {
  const state = ref<AccordionControllerState>(initialState)

  const toggleAccordion = (id: string, isExpanded: boolean) => {
    const nextState = { ...state.value }
    if (id in nextState && nextState[id]) nextState[id].expanded = isExpanded
    state.value = nextState
  }

  const collapseAll = () => {
    const nextState = { ...state.value }
    Object.keys(nextState).forEach((k) => {
      if (k in nextState && nextState[k]) {
        nextState[k].expanded = false
      }
    })
    state.value = nextState
  }

  const expandAll = () => {
    const nextState = { ...state.value }
    Object.keys(nextState).forEach((k) => {
      if (k in nextState && nextState[k]) {
        nextState[k].expanded = true
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
