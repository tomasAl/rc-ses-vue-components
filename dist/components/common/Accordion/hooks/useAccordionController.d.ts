import { AccordionControllerState } from '../types/AccordionControllerState';
import { Ref } from 'vue';

declare function useAccordionController(initialState: AccordionControllerState): {
    collapseAll: () => void;
    expandAll: () => void;
    state: Ref<AccordionControllerState>;
    toggleAccordion: (id: string, isExpanded: boolean) => void;
};
export default useAccordionController;
