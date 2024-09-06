import type { TextFieldProps } from '../../components/common/inputs/TextField/type'

// export interface PhoneInputFieldProps
//   extends /* @vue-ignore */ Omit<TextFieldProps, 'placeholder'> {
//   defaultIso?: string
// }

export type PhoneInputFieldProps = Omit<TextFieldProps, 'placeholder'> & {
  defaultIso?: string
}
