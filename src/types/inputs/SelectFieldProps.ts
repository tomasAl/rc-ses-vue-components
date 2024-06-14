import { ColorType } from '@/types/common/ColorType'
import { FieldProps } from '@/types/inputs/FieldProps'

export type SelectFieldItemType = {
  title: string
  value: string | number
  subtitle?: string
}

export type SelectFieldProps = FieldProps & {
  items: Array<SelectFieldItemType>
  searchable?: boolean
  color?: ColorType
  multiple?: boolean
  direction?: 'vertical' | 'horizontal'
}
