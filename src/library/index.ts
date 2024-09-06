import type { App, Plugin } from 'vue'

import Alert from '@/components/common/Alert/RcSesAlert.vue'
import Button from '@/components/common/buttons/Button/RcSesButton.vue'
import FormWrapper from '@/components/common/forms/FormWrapper/FormWrapper.vue'
import Checkbox from '@/components/common/inputs/Checkboxes/Checkbox/RcSesCheckbox.vue'
import CheckboxField from '@/components/common/inputs/Checkboxes/CheckboxField/RcSesCheckboxField.vue'
import DatePicker from '@/components/common/inputs/Datepickers/DatePicker/RcSesDatePicker.vue'
import DatePickerField from '@/components/common/inputs/Datepickers/DatePickerField/RcSesDatePickerField.vue'
import FieldWrapper from '@/components/common/inputs/FieldWrapper/FieldWrapper.vue'
import FileInput from '@/components/common/inputs/FileInputs/FileInput/RcSesFileInput.vue'
import FileInputField from '@/components/common/inputs/FileInputs/FileInputField/RcSesFileInputField.vue'
import NumberStepper from '@/components/common/inputs/NumberSteppers/NumberStepper/RcSesNumberStepper.vue'
import NumberStepperField from '@/components/common/inputs/NumberSteppers/NumberStepperField/RcSesNumberStepperField.vue'
import PhoneInputField from '@/components/common/inputs/PhoneField/PhoneInputField.vue'
import Radio from '@/components/common/inputs/Radios/Radio/RcSesRadio.vue'
import RadioButtonsField from '@/components/common/inputs/RadioButtonsField/RcSesRadioButtonsField.vue'
import RadioField from '@/components/common/inputs/Radios/RadioFields/RcSesRadioField.vue'
import SearchField from '@/components/common/inputs/SearchField/RcSesSearchField.vue'
import SearchableArea from '@/components/common/inputs/SearchableArea/RcSesSearchableArea.vue'
import SelectField from '@/components/common/inputs/SelectField/RcSesSelectField.vue'
import TextField from '@/components/common/inputs/TextField/RcSesTextField.vue'
import FormActionPanel from '@/components/common/panels/FormActionPanel/FormActionPanel.vue'
import FormPanel from '@/components/common/panels/FormPanel/FormPanel.vue'
import HeaderPanel from '@/components/common/panels/HeaderPanel/HeaderPanel.vue'
import VerticalStepper from '@/components/common/steppers/VerticalStepper/VerticalStepper.vue'
import ServiceFormContainer from '@/components/layouts/ServiceFormContainer/ServiceFormContainer.vue'
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
      .component('ServiceFormContainer', ServiceFormContainer)

    app.component('VerticalStepper', VerticalStepper)

    app.component('FormActionPanel', FormActionPanel)

    app.component('Alert', Alert)

    // eslint-disable-next-line vue/no-reserved-component-names
    app.component('Button', Button)

    app.component('Checkbox', Checkbox)

    app.component('CheckboxField', CheckboxField)

    app.component('DatePicker', DatePicker).component('DatePickerField', DatePickerField)

    app.component('FileInput', FileInput).component('FileInputField', FileInputField)

    app
      .component('NumberStepper', NumberStepper)
      .component('NumberStepperField', NumberStepperField)

    app.component('PhoneInputField', PhoneInputField)

    app
      .component('Radio', Radio)
      .component('RadioField', RadioField)
      .component('RadioButtonsField', RadioButtonsField)

    app.component('SearchableArea', SearchableArea).component('SearchField', SearchField)

    app.component('SelectField', SelectField)

    app.component('TextField', TextField)
  }

  return { install }
}

export { createRcSesVuetify }

export { FormActionPanel, FormPanel, HeaderPanel }
export { FieldWrapper, FormWrapper, VerticalStepper }
export { Alert, Button }
export { Checkbox, CheckboxField }
export { FileInput, FileInputField }
export { DatePicker, DatePickerField }
export { ServiceFormContainer }
export { NumberStepper, NumberStepperField }
export { PhoneInputField }
export { Radio, RadioButtonsField, RadioField }
export { SearchableArea, SelectField, SearchField }
export { TextField }
