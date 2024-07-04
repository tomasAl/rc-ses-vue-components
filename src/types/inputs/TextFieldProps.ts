import { VTextField } from 'vuetify/components'

import { FieldProps, InputProps } from '@/types/inputs/FieldProps'
import { ReservedKeys } from '@/types/reserved/ReservedKeys'

interface TextFieldInterface extends /* @vue-ignore */ Partial<VTextField['$props']> {}

export type TextFieldProps = FieldProps & InputProps &
  Omit<TextFieldInterface, ReservedKeys | 'error' | 'color' | 'hideDetails' | 'errorMessages' | 'modelValue' | 'value'>

/*
interface TextFieldInterface {
  foo?: string
  fieldProps?: VTextField['$props']
}

export type TextFieldProps2 = TextFieldInterface
*/
