import { FieldProps, InputProps } from '@/types/inputs/FieldProps'

export type DatePickerProps = InputProps & {
  range?: boolean
  maxWidth?: number
}

export type DatePickerFieldProps = DatePickerProps & FieldProps
