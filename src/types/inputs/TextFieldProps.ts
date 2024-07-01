import { FieldProps, InputProps } from '@/types/inputs/FieldProps'
import { InputType } from '@/types/inputs/InputType'

export type TextInputProps = InputProps & {
  type?: InputType

  appendIcon?: string
  prependInnerIcon?: string
}

export type TextFieldProps = FieldProps & TextInputProps

export type TextFieldProps2 = {
  name?: string
  error?: string
  disabled?: boolean
  what?: string
  /*readonly?: boolean
  placeholder?: string
  modelValue?: any
  value?: any*/
}
