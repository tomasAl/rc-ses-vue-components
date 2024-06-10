import { ColorType } from '@/types/common/ColorType'
import { FieldProps } from '@/types/inputs/FieldProps'

export type SelectProps = FieldProps & {
  items: Array<string>
  color?: ColorType
}
