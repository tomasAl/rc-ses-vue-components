export type InputProps = {
  error?: string
  disabled?: boolean
  readonly?: boolean
}

export type FieldProps = InputProps & {
  name?: string
  label?: string
  description?: string
  placeholder?: string
}
