import type { VCheckbox } from 'vuetify/components'

import { ColorType } from '@/types/common/ColorType'
import { FieldProps, InputFieldOmits, InputProps } from '@/types/inputs/FieldProps'

export type CheckboxProps = InputProps & {
  fieldProps?: Omit<VCheckbox['$props'], InputFieldOmits | 'label'>
  color?: ColorType
  label?: string
}

export type CheckboxFieldProps = FieldProps & CheckboxProps
