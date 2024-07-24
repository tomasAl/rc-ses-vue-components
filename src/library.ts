import { defineAsyncComponent } from 'vue'
import type { App } from 'vue'

import Alert from '@/components/common/Alert/Alert.vue'
import Button from '@/components/common/buttons/Button/Button.vue'
import FormWrapper from '@/components/common/forms/FormWrapper/FormWrapper.vue'
import Checkbox from '@/components/common/inputs/CheckboxField/Checkbox.vue'
import CheckboxField from '@/components/common/inputs/CheckboxField/CheckboxField.vue'
import Datepicker from '@/components/common/inputs/DatePickerField/VueDatepicker.vue'
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
import rcCreateVuetify from '@/plugins/vuetify'
import '@/styles/shared/index.scss'

// eslint-disable-next-line symbol-description
export const globalOptions = Symbol()

export function createRcSesComponents(options: object = {}) {
  const install = (app: App) => {
    app.provide(globalOptions, options)

    app.component(
      'FieldWrapper',
      defineAsyncComponent(
        () => import('@/components/common/inputs/FieldWrapper/FieldWrapper.vue'),
      ),
    )

    app.component(
      'FormWrapper',
      defineAsyncComponent(
        () => import('@/components/common/forms/FormWrapper/FormWrapper.vue'),
      ),
    )

    app.component(
      'VerticalStepper',
      defineAsyncComponent(
        () => import('@/components/common/steppers/VerticalStepper/VerticalStepper.vue'),
      ),
    )

    app.component(
      'FormActionPanel',
      defineAsyncComponent(
        () => import('@/components/common/panels/FormActionPanel/FormActionPanel.vue'),
      ),
    )

    app.component(
      'FormPanel',
      defineAsyncComponent(
        () => import('@/components/common/panels/FormPanel/FormPanel.vue'),
      ),
    )

    app.component(
      'StepFormLayout',
      defineAsyncComponent(() => import('@/components/layouts/StepFormLayout.vue')),
    )

    app.component(
      'HeaderPanel',
      defineAsyncComponent(
        () => import('@/components/common/panels/HeaderPanel/HeaderPanel.vue'),
      ),
    )

    app.component(
      'Alert',
      defineAsyncComponent(() => import('@/components/common/Alert/Alert.vue')),
    )

    app.component(
      'Button',
      defineAsyncComponent(() => import('@/components/common/buttons/Button/Button.vue')),
    )

    app.component(
      'Checkbox',
      defineAsyncComponent(
        () => import('@/components/common/inputs/CheckboxField/Checkbox.vue'),
      ),
    )
    app.component(
      'CheckboxField',
      defineAsyncComponent(
        () => import('@/components/common/inputs/CheckboxField/CheckboxField.vue'),
      ),
    )

    app.component(
      'Datepicker',
      defineAsyncComponent(
        () => import('@/components/common/inputs/DatePickerField/VueDatepicker.vue'),
      ),
    )

    app.component(
      'FileInput',
      defineAsyncComponent(
        () => import('@/components/common/inputs/FileInputField/FileInput.vue'),
      ),
    )

    app.component(
      'NumberStepper',
      defineAsyncComponent(
        () => import('@/components/common/inputs/NumberStepperField/NumberStepper.vue'),
      ),
    )
    app.component(
      'NumberStepperField',
      defineAsyncComponent(
        () =>
          import('@/components/common/inputs/NumberStepperField/NumberStepperField.vue'),
      ),
    )

    app.component(
      'Radio',
      defineAsyncComponent(
        () => import('@/components/common/inputs/RadioFields/Radio.vue'),
      ),
    )
    app.component(
      'RadioButtonsField',
      defineAsyncComponent(
        () => import('@/components/common/inputs/RadioFields/RadioButtonsField.vue'),
      ),
    )
    app.component(
      'RadioField',
      defineAsyncComponent(
        () => import('@/components/common/inputs/RadioFields/RadioField.vue'),
      ),
    )

    app.component(
      'SearchableArea',
      defineAsyncComponent(
        () => import('@/components/common/inputs/SearchableArea/SearchableArea.vue'),
      ),
    )
    app.component(
      'SearchField',
      defineAsyncComponent(() => import('@/components/common/inputs/SearchField.vue')),
    )
    app.component(
      'SelectField',
      defineAsyncComponent(
        () => import('@/components/common/inputs/SelectField/SelectField.vue'),
      ),
    )

    app.component(
      'TextField',
      defineAsyncComponent(
        () => import('@/components/common/inputs/TextField/TextField.vue'),
      ),
    )
  }

  return { install }
}

export { rcCreateVuetify }
export { FormActionPanel, FormPanel, HeaderPanel }
export { FieldWrapper, FormWrapper, VerticalStepper }
export { Alert, Button }
export { Checkbox, CheckboxField }
export { FileInput }
export { Datepicker }
export { StepFormLayout }
export { NumberStepper, NumberStepperField }
export { Radio, RadioButtonsField, RadioField }
export { SearchableArea, SelectField, SearchField }
export { TextField }
