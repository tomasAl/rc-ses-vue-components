import type { VCheckbox } from 'vuetify/components'

import type { ColorType } from '@/types/common/ColorType'
import type { InputProps } from '@/types/inputs/FieldProps'

export type CheckboxProps = InputProps & {
  fieldWrapperProps?: object
  appendIcon?: VCheckbox['$props']['appendIcon']
  baseColor?: VCheckbox['$props']['baseColor']
  centerAffix?: VCheckbox['$props']['centerAffix']
  color?: ColorType
  defaultsTarget?: VCheckbox['$props']['defaultsTarget']
  density?: VCheckbox['$props']['density']
  direction?: VCheckbox['$props']['direction']
  falseIcon?: VCheckbox['$props']['falseIcon']
  falseValue?: VCheckbox['$props']['falseValue']
  focused?: VCheckbox['$props']['focused']
  hideSpinButtons?: VCheckbox['$props']['hideSpinButtons']
  hint?: VCheckbox['$props']['hint']
  id?: VCheckbox['$props']['id']
  indeterminate?: VCheckbox['$props']['indeterminate']
  indeterminateIcon?: VCheckbox['$props']['indeterminateIcon']
  label?: VCheckbox['$props']['label']
  maxErrors?: VCheckbox['$props']['maxErrors']
  maxWidth?: VCheckbox['$props']['maxWidth']
  messages?: VCheckbox['$props']['messages']
  minWidth?: VCheckbox['$props']['minWidth']
  persistentHint?: VCheckbox['$props']['persistentHint']
  rules?: VCheckbox['$props']['rules']
  theme?: VCheckbox['$props']['theme']
  trueIcon?: VCheckbox['$props']['trueIcon']
  trueValue?: VCheckbox['$props']['trueValue']
  type?: VCheckbox['$props']['type']
  validateOn?: VCheckbox['$props']['validateOn']
  value?: VCheckbox['$props']['value']
  validationValue?: VCheckbox['$props']['validationValue']
  width?: VCheckbox['$props']['width']
  // modelValue?: VCheckbox['$props']['modelValue'] - ommited because of v-model usage
}
