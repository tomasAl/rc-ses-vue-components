// NumberStepperField.stories.ts
import { Meta, StoryFn } from '@storybook/vue3'
import { ref } from 'vue'

import RcSesNumberStepperField from '@/components/common/inputs/NumberSteppers/NumberStepperField/RcSesNumberStepperField.vue'
import { NumberStepperFieldProps } from '@/components/common/inputs/NumberSteppers/NumberStepperField/type'
import NumberStepperArgTypes from '@/stories/components/argTypes/components/NumberStepperArgTypes'

export default {
  title: 'components/common/inputs/NumberStepperField',
  component: RcSesNumberStepperField,
  argTypes: NumberStepperArgTypes,
  tags: ['autodocs'],
} as Meta

const Template: StoryFn<NumberStepperFieldProps> = (args) => ({
  components: { RcSesNumberStepperField },
  setup() {
    const modelReadOnly = ref('Negalima redaguoti')
    const modelDisabled = ref('Neaktyvus laukas')

    return { args, modelReadOnly, modelDisabled }
  },
  template: `
    <div class="storybook-field">
      <div class="storybook-field-view">
        <RcSesNumberStepperField v-bind="args"></RcSesNumberStepperField>
      </div>
      <div class="storybook-field-previews">
        <div class="storybook-field-previews-title">State previews</div>
        <RcSesNumberStepperField class="form-control" label="Read-only" readonly v-model="modelReadOnly"></RcSesNumberStepperField>
        <RcSesNumberStepperField class="form-control" label="Disabled" disabled v-model="modelDisabled"></RcSesNumberStepperField>
        <RcSesNumberStepperField label="Error" error="Klaidos pranešimas"></RcSesNumberStepperField>
      </div>
    </div>
  `,
})

export const Main = Template.bind({})
Main.args = {
  fieldLabel: 'Egzempliorių skaičius',
  fieldDescription:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.",
  name: 'kiekis',
}
