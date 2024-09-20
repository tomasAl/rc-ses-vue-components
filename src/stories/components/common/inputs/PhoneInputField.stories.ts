// PhoneInputField.stories.ts
import { Meta, StoryFn } from '@storybook/vue3'
import { ref } from 'vue'

import RcSesPhoneField from '@/components/common/inputs/PhoneField/RcSesPhoneField.vue'
import { PhoneInputFieldProps } from '@/components/common/inputs/PhoneField/type'
import TextFieldArgTypes from '@/stories/components/argTypes/components/TextFieldArgTypes'

export default {
  title: 'components/common/inputs/PhoneField',
  component: RcSesPhoneField,
  argTypes: TextFieldArgTypes,
} as Meta

const Template: StoryFn<PhoneInputFieldProps> = (args) => ({
  components: { RcSesPhoneField },
  setup() {
    const modelReadOnly = ref('65900100')
    const modelDisabled = ref('65900100')

    return { args, modelReadOnly, modelDisabled }
  },
  template: `
    <div class="storybook-field">
      <div class="storybook-field-view">
        <RcSesPhoneField v-bind="args"></RcSesPhoneField>
      </div>
      <div class="storybook-field-previews">
        <div class="storybook-field-previews-title">State previews</div>
        <RcSesPhoneField class="form-control" field-label="Read-only" readonly v-model="modelReadOnly" default-iso="lt"></RcSesPhoneField>
        <RcSesPhoneField class="form-control" field-label="Disabled" disabled v-model="modelDisabled" default-iso="lt"></RcSesPhoneField>
        <RcSesPhoneField field-label="Error" error="Klaidos pranešimas" default-iso="lt"></RcSesPhoneField>
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
