import { FieldProps } from '@/types/inputs/FieldProps'
import { OptionType } from '@/types/common/OptionType'

export type RadioFieldProps = Omit<FieldProps, 'placeholder'> & {
  options: Array<OptionType>
  variant: 'text' | 'outlined'
}

export type RadioButtonsFieldProps = Omit<RadioFieldProps, 'variant'>
