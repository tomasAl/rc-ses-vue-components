// import type { useForm } from 'vee-validate'

import type useAccordionController from '@/components/common/Accordion/hooks/useAccordionController'
import { FormWrapperPanelProps } from '@/types/forms/FormWrapperProps'
import { VerticalStepperItemProps } from '@/types/steppers/VerticalStepperProps'

export type StepPageLayoutItemProps = VerticalStepperItemProps & FormWrapperPanelProps

export type ServiceFormContainerProps = {
  accordionController: ReturnType<typeof useAccordionController>
  // formController?: ReturnType<typeof useForm>
  singleForm?: boolean
}
