import { FieldProps } from '@/types/inputs/FieldProps'
import { InputType } from '@/types/inputs/InputType'

export type TextFieldProps = FieldProps & {
  type?: InputType

  appendIcon?: string
  prependInnerIcon?: string
}
