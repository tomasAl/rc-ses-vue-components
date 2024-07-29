import type { OptionType } from '@/types/common/OptionType'
import type { FieldProps, InputProps } from '@/types/inputs/FieldProps'

export type RadioButtonsFieldProps = FieldProps &
  InputProps & {
    options: Array<OptionType>
  }
