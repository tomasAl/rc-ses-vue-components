import { FieldProps } from '@/types/inputs/FieldProps'
import { ColorType } from '@/types/common/ColorType'

export type CheckboxProps = Omit<FieldProps, 'description' | 'label' | 'placeholder'> & {
  color?: ColorType
  card?: boolean
  content?: string
}

export type CheckboxFieldProps = Omit<FieldProps, 'placeholder'> & {
  color?: ColorType
  card?: boolean
  content?: string
}
