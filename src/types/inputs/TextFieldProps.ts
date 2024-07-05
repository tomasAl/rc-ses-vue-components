import type { VTextField } from 'vuetify/components'

import { FieldProps, InputFieldOmits, InputProps } from '@/types/inputs/FieldProps'

export type TextFieldProps = FieldProps &
  InputProps & {
    inputFieldProps?: Omit<VTextField['$props'], InputFieldOmits>
  }

/* interface TextFieldInterface extends /!* @vue-ignore *!/ Partial<VTextField['$props']> {}

export type TextFieldProps = FieldProps &
  InputProps &
  Omit<
    TextFieldInterface,
    | ReservedKeys
    | 'error'
    | 'color'
    | 'hideDetails'
    | 'errorMessages'
    | 'modelValue'
    | 'value'
  > & {
    // appendIcon?: any
    appendIcon?: any
    prependInnerIcon?: any
    suffix?: string
    prefix?: string
  } */

export type TextFieldProps2 = FieldProps &
  InputProps & {
    inputFieldProps?: Omit<
      VTextField['$props'],
      'error' | 'color' | 'hideDetails' | 'errorMessages' | 'modelValue' | 'value'
    >
  }
