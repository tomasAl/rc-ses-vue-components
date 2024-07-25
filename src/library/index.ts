import type { App, Plugin } from 'vue'

import Alert from '@/components/common/Alert/Alert.vue'
import Button from '@/components/common/buttons/Button/Button.vue'
import FormWrapper from '@/components/common/forms/FormWrapper/FormWrapper.vue'
import Checkbox from '@/components/common/inputs/CheckboxField/Checkbox.vue'
import CheckboxField from '@/components/common/inputs/CheckboxField/CheckboxField.vue'
import DatePicker from '@/components/common/inputs/DatePickerField/DatePicker.vue'
import DatePickerField from '@/components/common/inputs/DatePickerField/DatePickerField.vue'
import FieldWrapper from '@/components/common/inputs/FieldWrapper/FieldWrapper.vue'
import FileInput from '@/components/common/inputs/FileInputField/FileInput.vue'
import NumberStepper from '@/components/common/inputs/NumberStepperField/NumberStepper.vue'
import NumberStepperField from '@/components/common/inputs/NumberStepperField/NumberStepperField.vue'
import Radio from '@/components/common/inputs/RadioFields/Radio.vue'
import RadioButtonsField from '@/components/common/inputs/RadioFields/RadioButtonsField.vue'
import RadioField from '@/components/common/inputs/RadioFields/RadioField.vue'
import SearchField from '@/components/common/inputs/SearchField.vue'
import SearchableArea from '@/components/common/inputs/SearchableArea/SearchableArea.vue'
import SelectField from '@/components/common/inputs/SelectField/SelectField.vue'
import TextField from '@/components/common/inputs/TextField/TextField.vue'
import FormActionPanel from '@/components/common/panels/FormActionPanel/FormActionPanel.vue'
import FormPanel from '@/components/common/panels/FormPanel/FormPanel.vue'
import HeaderPanel from '@/components/common/panels/HeaderPanel/HeaderPanel.vue'
import VerticalStepper from '@/components/common/steppers/VerticalStepper/VerticalStepper.vue'
import StepFormLayout from '@/components/layouts/StepFormLayout.vue'
import PhoneInputField from '@/components/common/inputs/PhoneField/PhoneInputField.vue'
import createRcSesVuetify from '@/plugins/vuetify'
import '@/styles/shared/index.scss'

// eslint-disable-next-line symbol-description
export const globalOptions = Symbol()

export function createRcSesComponents(options: object = {}): Plugin<[]> {
  const install = (app: App) => {
    app.provide(globalOptions, options)

    app
      .component('HeaderPanel', HeaderPanel)
      .component('FieldWrapper', FieldWrapper)
      .component('FormWrapper', FormWrapper)
      .component('FormPanel', FormPanel)
      .component('StepFormLayout', StepFormLayout)

    app.component('VerticalStepper', VerticalStepper)

    app.component('FormActionPanel', FormActionPanel)

    app.component('Alert', Alert)

    // eslint-disable-next-line vue/no-reserved-component-names
    app.component('Button', Button)

    app.component('Checkbox', Checkbox)

    app.component('CheckboxField', CheckboxField)

    app.component('DatePicker', DatePicker).component('DatePickerField', DatePickerField)

    app.component('FileInput', FileInput)

    app
      .component('NumberStepper', NumberStepper)
      .component('NumberStepperField', NumberStepperField)

    app
      .component('Radio', Radio)
      .component('RadioField', RadioField)
      .component('RadioButtonsField', RadioButtonsField)

    app.component('SearchableArea', SearchableArea).component('SearchField', SearchField)

    app.component('SelectField', SelectField)

    app.component('TextField', TextField)

    app.component('PhoneInputField', PhoneInputField)
  }

  return { install }
}

export { createRcSesVuetify }

export { FormActionPanel, FormPanel, HeaderPanel }
export { FieldWrapper, FormWrapper, VerticalStepper }
export { Alert, Button }
export { Checkbox, CheckboxField }
export { FileInput }
export { DatePicker, DatePickerField }
export { StepFormLayout }
export { NumberStepper, NumberStepperField }
export { Radio, RadioButtonsField, RadioField }
export { SearchableArea, SelectField, SearchField }
export { TextField }
export { PhoneInputField }
