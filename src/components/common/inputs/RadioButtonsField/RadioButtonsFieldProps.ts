/* import type { OptionType } from '@/types/common/OptionType'
import type { FieldProps, InputProps } from '@/types/inputs/FieldProps' */
import { RadioGroupFieldProps } from '@/types/inputs/RadioGroupFieldProps'

/*
 export type RadioButtonsFieldProps = FieldProps &
  InputProps & {
    options: Array<OptionType>
  }

*/

export type RadioButtonsFieldProps = Omit<RadioGroupFieldProps, 'variant'>
