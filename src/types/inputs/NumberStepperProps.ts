import { FieldProps } from '@/types/inputs/FieldProps'


export type NumberStepperProps = FieldProps & {
  max?: number,
  min?: number,
  step?: number,
}
