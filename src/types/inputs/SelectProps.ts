import { ColorType } from '@/types/common/ColorType'

export type SelectProps = {
  label?: string
  description?: string
  placeholder?: string
  error?: string

  items: Array<string>
  disabled?: boolean
  color?: ColorType
}
