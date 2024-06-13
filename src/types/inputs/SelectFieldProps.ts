import { ColorType } from '@/types/common/ColorType'
import { FieldProps } from '@/types/inputs/FieldProps'

export type SelectFieldProps = FieldProps & {
  items: Array<string>
  searchable?: boolean
  color?: ColorType
}
