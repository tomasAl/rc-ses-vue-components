import {
  ComponentFieldBindingObject,
  FieldBindingObject,
  FieldContext,
  FieldMeta,
} from 'vee-validate'

import type { TextFieldProps } from '../TextField/type'

export interface PhoneInputCountry {
  name: string
  code: string
  iso: string
  flag: string
  mask: string
}

export type PhoneInputFieldProps = Omit<TextFieldProps, 'placeholder'> & {
  defaultIso?: string
  veeField?: FieldSlotProps
}

export type PhoneInputModel = {
  country: PhoneInputCountry | undefined
  value?: string
}

export interface FieldSlotProps<TValue = unknown>
  extends Pick<
    FieldContext,
    | 'validate'
    | 'resetField'
    | 'handleChange'
    | 'handleReset'
    | 'handleBlur'
    | 'setTouched'
    | 'setErrors'
    | 'setValue'
  > {
  field: FieldBindingObject<TValue>
  componentField: ComponentFieldBindingObject<TValue>
  value: TValue
  meta: FieldMeta<TValue>
  errors: string[]
  errorMessage: string | undefined
  handleInput: FieldContext['handleChange']
}
