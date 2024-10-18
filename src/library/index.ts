import type { App, Plugin } from 'vue'

import RcSesAccordion from '@/components/common/Accordion/RcSesAccordion.vue'
import RcSesAlert from '@/components/common/Alert/RcSesAlert.vue'
import RcSesError from '@/components/common/Error/RcSesError.vue'
import RcSesButton from '@/components/common/buttons/Button/RcSesButton.vue'
import RcSesFormControl from '@/components/common/forms/RcSesFormControl.vue'
import RcSesCheckbox from '@/components/common/inputs/Checkboxes/Checkbox/RcSesCheckbox.vue'
import RcSesCheckboxField from '@/components/common/inputs/Checkboxes/CheckboxField/RcSesCheckboxField.vue'
import RcSesDatePicker from '@/components/common/inputs/Datepickers/DatePicker/RcSesDatePicker.vue'
import RcSesDatePickerField from '@/components/common/inputs/Datepickers/DatePickerField/RcSesDatePickerField.vue'
import RcSesFieldWrapper from '@/components/common/inputs/FieldWrapper/RcSesFieldWrapper.vue'
import RcSesFileDropzone from '@/components/common/inputs/FileDropzones/FileDropzone/RcSesFileDropzone.vue'
import RcSesFileDropzoneField from '@/components/common/inputs/FileDropzones/FileDropzoneField/RcSesFileDropzoneField.vue'
import RcSesFileInput from '@/components/common/inputs/FileInputs/FileInput/RcSesFileInput.vue'
import RcSesFileInputField from '@/components/common/inputs/FileInputs/FileInputField/RcSesFileInputField.vue'
import RcSesNumberStepper from '@/components/common/inputs/NumberSteppers/NumberStepper/RcSesNumberStepper.vue'
import RcSesNumberStepperField from '@/components/common/inputs/NumberSteppers/NumberStepperField/RcSesNumberStepperField.vue'
import RcSesPhoneField from '@/components/common/inputs/PhoneField/RcSesPhoneField.vue'
import RcSesRadioButtonsField from '@/components/common/inputs/RadioButtonsField/RcSesRadioButtonsField.vue'
import RcSesRadio from '@/components/common/inputs/Radios/Radio/RcSesRadio.vue'
import RcSesRadioField from '@/components/common/inputs/Radios/RadioFields/RcSesRadioField.vue'
import RcSesSearchField from '@/components/common/inputs/SearchField/RcSesSearchField.vue'
import RcSesSearchableArea from '@/components/common/inputs/SearchableArea/RcSesSearchableArea.vue'
import RcSesSearchableField from '@/components/common/inputs/SearchableField/RcSesSearchableField.vue'
import RcSesSelectField from '@/components/common/inputs/SelectField/RcSesSelectField.vue'
import RcSesTextField from '@/components/common/inputs/TextField/RcSesTextField.vue'
import RcSesTimePickerField from '@/components/common/inputs/TimePickerField/RcSesTimePickerField.vue'
import RcSesTable from '@/components/common/tables/table/RcSesTable.vue'
import RcSesTab from '@/components/common/tabs/RcSesTab.vue'
import RcSesTooltip from '@/components/common/tooltip/RcSesTooltip.vue'
import RcSesFormActions from '@/components/layouts/FormActions/RcSesFormActions.vue'
import RcSesFormContainer from '@/components/layouts/FormContainer/RcSesFormContainer.vue'
import RcSesFormStepper from '@/components/layouts/FormStepper/RcSesFormStepper.vue'
import RcSesFormTabContainer from '@/components/layouts/FormTabContainer/RcSesFormTabContainer.vue'
import RcSesHeader from '@/components/layouts/Header/RcSesHeader.vue'
import createRcSesVuetify from '@/plugins/vuetify'
import '@/styles/shared/index.scss'

// eslint-disable-next-line symbol-description
export const globalOptions = Symbol()

export function createRcSesComponents(options: object = {}): Plugin<[]> {
  const install = (app: App) => {
    app.provide(globalOptions, options)

    // Layout components
    app
      .component('RcSesHeader', RcSesHeader)
      .component('RcSesFieldWrapper', RcSesFieldWrapper)
      .component('RcSesFormContainer', RcSesFormContainer)
      .component('RcSesTabFormContainer', RcSesFormTabContainer)
      .component('RcSesFormStepper', RcSesFormStepper)
      .component('RcSesFormActions', RcSesFormActions)

    app.component('RcSesAccordion', RcSesAccordion)

    app
      .component('RcSesError', RcSesError)
      .component('RcSesFormControl', RcSesFormControl)

    app.component('RcSesAlert', RcSesAlert)

    // eslint-disable-next-line vue/no-reserved-component-names
    app.component('RcSesButton', RcSesButton)

    app.component('RcSesCheckbox', RcSesCheckbox)

    app.component('RcSesCheckboxField', RcSesCheckboxField)

    app
      .component('RcSesDatePicker', RcSesDatePicker)
      .component('RcSesDatePickerField', RcSesDatePickerField)

    app
      .component('RcSesFileInput', RcSesFileInput)
      .component('RcSesFileInputField', RcSesFileInputField)

    app
      .component('RcSesFileDropzone', RcSesFileDropzone)
      .component('RcSesFileDropzoneField', RcSesFileDropzoneField)

    app
      .component('RcSesNumberStepper', RcSesNumberStepper)
      .component('RcSesNumberStepperField', RcSesNumberStepperField)

    app.component('RcSesPhoneField', RcSesPhoneField)

    app
      .component('RcSesRadio', RcSesRadio)
      .component('RcSesRadioField', RcSesRadioField)
      .component('RcSesRadioButtonsField', RcSesRadioButtonsField)

    app
      .component('RcSesSearchableArea', RcSesSearchableArea)
      .component('RcSesSearchField', RcSesSearchField)
      .component('RcSesSearchableField', RcSesSearchableField)

    app.component('RcSesSelectField', RcSesSelectField)

    app.component('RcSesTextField', RcSesTextField)

    app.component('RcSesTimePickerField', RcSesTimePickerField)

    app.component('RcSesTable', RcSesTable)
    app.component('RcSesTab', RcSesTab)
    app.component('RcSesTooltip', RcSesTooltip)
  }

  return { install }
}

export { createRcSesVuetify }

export {
  RcSesHeader,
  RcSesFieldWrapper,
  RcSesFormContainer,
  RcSesFormTabContainer,
  RcSesFormStepper,
  RcSesFormActions,
}
export { RcSesAlert, RcSesButton }
export { RcSesCheckbox, RcSesCheckboxField }
export { RcSesFileInput, RcSesFileInputField }
export { RcSesDatePicker, RcSesDatePickerField }
export { RcSesNumberStepper, RcSesNumberStepperField }
export { RcSesPhoneField }
export { RcSesRadio, RcSesRadioButtonsField, RcSesRadioField }
export { RcSesSearchableArea, RcSesSelectField, RcSesSearchField }
export { RcSesTextField }
export { RcSesAccordion }
export { RcSesError, RcSesFormControl }
export { RcSesFileDropzone, RcSesFileDropzoneField }
export { RcSesSearchableField }
export { RcSesTable }
export { RcSesTab }
export { RcSesTooltip }
