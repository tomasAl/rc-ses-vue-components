// RadioButtonsField.stories.ts
import { Meta, StoryFn } from '@storybook/vue3'
import { ref } from 'vue'

import RcSesRadioButtonsField from '@/components/common/inputs/RadioButtonsField/RcSesRadioButtonsField.vue'
import { RadioButtonsFieldProps } from '@/components/common/inputs/RadioButtonsField/type'
import FieldArgTypes from '@/stories/components/argTypes/common/FieldArgTypes'

export default {
  title: 'components/common/inputs/RadioButtonsField',
  component: RcSesRadioButtonsField,
  argTypes: FieldArgTypes,
  tags: ['autodocs'],
} as Meta

const lorem =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard."

const options = [
  { label: 'Pasirinkimas 1', value: 'p1' },
  { label: 'Pasirinkimas 2', value: 'p2' },
  { label: 'Pasirinkimas 3', value: 'p3' },
  { label: 'Pasirinkimas 4', value: 'p4' },
]

const Template: StoryFn<RadioButtonsFieldProps> = (args) => ({
  components: { RcSesRadioButtonsField },
  setup() {
    const model = ref('p1')
    const modelDisabled = ref('p4')
    const modelReadOnly = ref('p2')
    const modelError = ref('p3')

    return { args, modelReadOnly, model, modelError, modelDisabled, lorem, options }
  },
  template: `
    <div class="storybook-field">
      <div class="storybook-field-view">
        <RcSesRadioButtonsField v-bind="args" v-model="model"></RcSesRadioButtonsField>
      </div>
      <div class="storybook-field-previews">
        <div class="storybook-field-previews-title">State previews</div>
        <RcSesRadioButtonsField v-model="modelReadOnly" class="form-control" fieldLabel="Read-only" :options="options" readonly>{{ lorem }}</RcSesRadioButtonsField>
        <RcSesRadioButtonsField v-model="modelDisabled" class="form-control" fieldLabel="Disabled" :options="options" disabled>{{ lorem }}</RcSesRadioButtonsField>
        <RcSesRadioButtonsField v-model="modelError" fieldLabel="Error" :options="options" error="Klaidos pranešimas">{{ lorem }}</RcSesRadioButtonsField>
      </div>
    </div>
  `,
})

export const Main = Template.bind({})
Main.args = {
  fieldLabel: 'Pasirinkimas',
  fieldDescription: lorem,
  name: 'pasirinkimas',
  options,
}
