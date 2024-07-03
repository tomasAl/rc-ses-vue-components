import { OptionType } from '@/types/common/OptionType'
import { FieldProps } from '@/types/inputs/FieldProps'

export type RadioFieldProps = FieldProps & {
  options: Array<OptionType>
  variant: 'text' | 'outlined'
  name?: string
}

export type RadioButtonsFieldProps = Omit<RadioFieldProps, 'variant'>
