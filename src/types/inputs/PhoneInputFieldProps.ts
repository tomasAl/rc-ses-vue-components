import type { TextFieldProps } from './TextFieldProps'

// export interface PhoneInputFieldProps
//   extends /* @vue-ignore */ Omit<TextFieldProps, 'placeholder'> {
//   defaultIso?: string
// }

export type PhoneInputFieldProps = Omit<TextFieldProps, 'placeholder'> & {
  defaultIso?: string
}
