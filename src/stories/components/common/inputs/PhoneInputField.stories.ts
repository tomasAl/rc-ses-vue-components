// PhoneInputField.stories.ts
import { Meta, StoryFn } from '@storybook/vue3'

import TextFieldArgTypes from '@/stories/components/argTypes/components/TextFieldArgTypes'
import PhoneInputField from '@/components/common/inputs/PhoneField/PhoneInputField.vue'
import { PhoneInputFieldProps } from '@/types/inputs/PhoneInputFieldProps'

export default {
  title: 'components/common/inputs/PhoneInputField',
  component: PhoneInputField,
  argTypes: TextFieldArgTypes,
} as Meta

const Template: StoryFn<PhoneInputFieldProps> = (args) => ({
  components: { PhoneInputField },
  setup() {
    const modelReadOnly = ref('65900100')
    const modelDisabled = ref('65900100')

    return { args, modelReadOnly, modelDisabled }
  },
  template: `
    <div class="storybook-field">
      <div class="storybook-field-view">
        <PhoneInputField v-bind="args"></PhoneInputField>
      </div>
      <div class="storybook-field-previews">
        <div class="storybook-field-previews-title">State previews</div>
        <PhoneInputField class="form-control" field-label="Read-only" readonly v-model="modelReadOnly" default-iso="lt"></PhoneInputField>
        <PhoneInputField class="form-control" field-label="Disabled" disabled v-model="modelDisabled" default-iso="lt"></PhoneInputField>
        <PhoneInputField field-label="Error" error="Klaidos pranešimas" default-iso="lt"></PhoneInputField>
      </div>
    </div>
  `,
})

export const Main = Template.bind({})
Main.args = {
  fieldLabel: 'Telefono Nr.',
  fieldDescription:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.",
  name: 'telefonas',
  defaultIso: 'lt',
}
