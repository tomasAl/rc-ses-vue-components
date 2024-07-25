import { TextFieldProps } from './TextFieldProps'

export type PhoneInputFieldProps = Omit<TextFieldProps, 'placeholder'> & {
  defaultIso?: string
}
