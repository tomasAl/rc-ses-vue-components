import type { useForm } from 'vee-validate'

import type useAccordionController from '@/components/common/Accordion/hooks/useAccordionController'

export type FormContainerProps = {
  accordionController: ReturnType<typeof useAccordionController>
  formController?: ReturnType<typeof useForm>
  singleForm?: boolean
}
