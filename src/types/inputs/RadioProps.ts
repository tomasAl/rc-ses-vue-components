import { InputProps } from '@/types/inputs/FieldProps'

export type RadioProps = Omit<InputProps, 'error'> & {
  error?: boolean
}
