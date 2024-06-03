import {VerticalStepperItemProps} from "../steppers/VerticalStepperProps";
import {FormWrapperPanelProps} from "../forms/FormWrapperProps";

export type StepPageLayoutItemProps = VerticalStepperItemProps & {
  component?: any;
  panels?: Array<FormWrapperPanelProps>
}

export type StepFormLayoutProps = {
  items: Array<StepPageLayoutItemProps>
}
