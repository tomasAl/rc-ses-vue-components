import type { VTextField } from 'vuetify/components'

import type { FieldProps, InputFieldOmits, InputProps } from '@/types/inputs/FieldProps'
import type { ReservedKeys } from '@/types/reserved/ReservedKeys'

interface TextFieldInterface extends /* @vue-ignore */ Partial<VTextField['$props']> {}

export interface TextFieldProps
  extends FieldProps,
    InputProps,
    Omit<TextFieldInterface, ReservedKeys | InputFieldOmits> {
  counter?: string | number | boolean
  messages?: string | readonly string[]
}
