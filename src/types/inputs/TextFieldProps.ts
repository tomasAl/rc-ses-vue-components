import type { VTextField } from 'vuetify/components'

import { FieldProps, InputProps } from '@/types/inputs/FieldProps'
import { ReservedKeys } from '@/types/reserved/ReservedKeys'

interface TextFieldInterface extends /* @vue-ignore */ Partial<VTextField['$props']> {}

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
  }

export type TextFieldProps2 = FieldProps &
  InputProps & {
    inputFieldProps?: VTextField['$props']
  }
