import { FormWrapperPanelProps } from '../forms/FormWrapperProps'
import { VerticalStepperItemProps } from '../steppers/VerticalStepperProps'
import type useAccordionController from '@/components/common/Accordion/hooks/useAccordionController'

export type StepPageLayoutItemProps = VerticalStepperItemProps & FormWrapperPanelProps

export type StepFormLayoutProps = {
  // items: Array<StepPageLayoutItemProps>
  accordionController: ReturnType<typeof useAccordionController>
  singleForm?: boolean
}
