import type { useForm } from 'vee-validate'

import type useAccordionController from '@/components/common/Accordion/hooks/useAccordionController'
import { FormWrapperPanelProps } from '@/types/forms/FormWrapperProps'

export type StepPageLayoutItemProps = FormWrapperPanelProps

export type ServiceFormContainerProps = {
  accordionController: ReturnType<typeof useAccordionController>
  formController?: ReturnType<typeof useForm>
  singleForm?: boolean
}
