import type { TextFieldProps } from '@/components/common/inputs/TextField/type'

export type SearchableFieldProps = Omit<TextFieldProps, 'prependInnerIcon'> & {
  modalComponent?: any
  modalProps?: any
}
