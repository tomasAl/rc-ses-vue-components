// TimePickerField.stories.ts
import { Meta, StoryFn } from '@storybook/vue3'
import { ref } from 'vue'

import RcSesTimePickerField from '@/components/common/inputs/TimePickerField/RcSesTimePickerField.vue'
import { TimepickerFieldProps } from '@/components/common/inputs/TimePickerField/type'

export default {
  title: 'components/common/inputs/TimePickerField',
  component: RcSesTimePickerField,
  // argTypes: DatePickerFieldArgTypes,
} as Meta

const Template: StoryFn<TimepickerFieldProps> = (args) => ({
  components: { RcSesTimePickerField },
  setup() {
    const model = ref()

    return { args, model }
  },
  template: `
    <div class="storybook-field" style="height: 550px">
      <div class="storybook-field-view">
        <RcSesTimePickerField v-model="model" v-bind="args" class="form-control"></RcSesTimePickerField>
      </div>
      <div class="storybook-field-previews">
        <div class="storybook-field-previews-title">State previews</div>
        <RcSesTimePickerField class="form-control" label="Read-only" readonly v-model="modelReadOnly"></RcSesTimePickerField>
        <RcSesTimePickerField class="form-control" label="Disabled" disabled v-model="modelDisabled"></RcSesTimePickerField>
        <RcSesTimePickerField label="Error" error="Klaidos pranešimas"></RcSesTimePickerField>
      </div>
    </div>
  `,
})

export const Main = Template.bind({})
Main.args = {
  fieldLabel: 'Antraštė',
  fieldDescription:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.",
  name: 'antraste',
}
