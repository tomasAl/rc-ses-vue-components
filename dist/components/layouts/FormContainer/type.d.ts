import { useForm } from 'vee-validate';
import { default as useAccordionController } from '../../common/Accordion/hooks/useAccordionController';

export type FormContainerProps = {
    accordionController: ReturnType<typeof useAccordionController>;
    formController?: ReturnType<typeof useForm>;
    showAccordionCollapseControls?: boolean;
    showProgressStepper?: boolean;
};
