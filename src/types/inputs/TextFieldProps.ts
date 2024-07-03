import { VTextField } from 'vuetify/components'

import { FieldProps, InputProps } from '@/types/inputs/FieldProps'
import { InputType } from '@/types/inputs/InputType'

export type TextInputProps = InputProps & {
  type?: InputType

  appendIcon?: string
  prependInnerIcon?: string
}

export type TextFieldProps = FieldProps & TextInputProps

type InputProps2 = {
  placeholder?: string
}

interface TextFieldInterface extends /* @vue-ignore */ Partial<VTextField['$props']> {
  foo?: string
}

export type TextFieldProps2 = InputProps2 &
  Omit<TextFieldInterface, 'key' | 'ref' | '$children'>

/*
interface TextFieldInterface {
  foo?: string
  fieldProps?: VTextField['$props']
}

export type TextFieldProps2 = TextFieldInterface
*/
