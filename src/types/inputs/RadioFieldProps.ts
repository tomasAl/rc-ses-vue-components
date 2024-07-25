import type { VRadioGroup } from 'vuetify/components'

import type { OptionType } from '@/types/common/OptionType'
import { FieldProps, InputProps } from '@/types/inputs/FieldProps'

export type RadioFieldProps = FieldProps &
  Omit<InputProps, 'placeholder'> & {
    options: Array<OptionType>
    variant?: 'text' | 'outlined'
    name?: string
    vRadioGroupProps?: Partial<VRadioGroup['$props']>
  }

export type RadioButtonsFieldProps = Omit<RadioFieldProps, 'variant'>
