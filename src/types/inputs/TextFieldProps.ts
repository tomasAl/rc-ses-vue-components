import { FieldProps, InputProps } from '@/types/inputs/FieldProps'
import { InputType } from '@/types/inputs/InputType'

export type TextInputProps = InputProps & {
  type?: InputType

  appendIcon?: string
  prependInnerIcon?: string
}

export type TextFieldProps = FieldProps & TextInputProps
