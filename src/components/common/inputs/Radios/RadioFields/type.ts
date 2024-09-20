import type { VRadioGroup } from 'vuetify/components'

import type { ColorType } from '@/types/common/ColorType'
import type { OptionType } from '@/types/common/OptionType'
import type { FieldProps, InputProps } from '@/types/inputs/FieldProps'

export type RadioGroupFieldProps = FieldProps &
  InputProps & {
    options: Array<OptionType>
    variant?: 'text' | 'outlined'
    fieldWrapperProps?: object

    appendIcon?: VRadioGroup['$props']['appendIcon']
    centerAffix?: VRadioGroup['$props']['centerAffix']
    color?: ColorType
    defaultsTarget?: VRadioGroup['$props']['defaultsTarget']
    density?: VRadioGroup['$props']['density']
    direction?: VRadioGroup['$props']['direction']
    falseIcon?: VRadioGroup['$props']['falseIcon']
    focused?: VRadioGroup['$props']['focused']
    height?: VRadioGroup['$props']['height']
    // hideDetails?: VRadioGroup['$props']['hideDetails'] - omitted
    hideSpinButtons?: VRadioGroup['$props']['hideSpinButtons']
    hint?: VRadioGroup['$props']['hint']
    id?: VRadioGroup['$props']['id']
    inline?: VRadioGroup['$props']['inline']
    label?: VRadioGroup['$props']['label']
    maxErrors?: VRadioGroup['$props']['maxErrors']
    maxWidth?: VRadioGroup['$props']['maxWidth']
    messages?: VRadioGroup['$props']['messages']
    minWidth?: VRadioGroup['$props']['minWidth']
    persistentHint?: VRadioGroup['$props']['persistentHint']
    prependIcon?: VRadioGroup['$props']['prependIcon']
    rules?: VRadioGroup['$props']['rules']
    theme?: VRadioGroup['$props']['theme']
    trueIcon?: VRadioGroup['$props']['trueIcon']
    type?: VRadioGroup['$props']['type']
    validateOn?: VRadioGroup['$props']['validateOn']
    validationValue?: VRadioGroup['$props']['validationValue']
    width?: VRadioGroup['$props']['width']
  }
