import { ColorType } from '@/types/common/ColorType'

const RadioFieldDefaults = {
  options: () => [],
  fieldWrapperProps: () => ({}),
  appendIcon: undefined,
  centerAffix: undefined,
  color: 'primary' as ColorType,
  defaultsTarget: undefined,
  density: undefined,
  direction: undefined,
  disabled: false,
  error: undefined,
  // errorMessages: [] - omitted
  // falseIcon: '$checkboxOff',
  focused: false,
  height: undefined,
  // hideDetails: false - omitted
  hideSpinButtons: false,
  hint: undefined,
  id: undefined,
  inline: true,
  label: undefined,
  maxErrors: 1,
  maxWidth: undefined,
  messages: undefined,
  minWidth: undefined,
  // modelValue: undefined,
  name: undefined,
  persistentHint: false,
  readonly: false,
  prependIcon: undefined,
  // ripple: false - omitted
  rules: undefined,
  theme: undefined,
  trueIcon: undefined,
  type: 'radio',
  validateOn: undefined,
  validationValue: undefined,
  width: undefined,
}

export default RadioFieldDefaults
