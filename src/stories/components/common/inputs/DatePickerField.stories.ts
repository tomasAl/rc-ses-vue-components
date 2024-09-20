// DatePickerField.stories.ts
import { Meta, StoryFn } from '@storybook/vue3'
import { ref } from 'vue'

import RcSesDatePickerField from '@/components/common/inputs/Datepickers/DatePickerField/RcSesDatePickerField.vue'
import { DatePickerFieldProps } from '@/components/common/inputs/Datepickers/DatePickerField/types'
import DatePickerFieldArgTypes from '@/stories/components/argTypes/components/DatePickerFieldArgTypes'

export default {
  title: 'components/common/inputs/DatePickerField',
  component: RcSesDatePickerField,
  argTypes: DatePickerFieldArgTypes,
} as Meta

const Template: StoryFn<DatePickerFieldProps> = (args) => ({
  components: { RcSesDatePickerField },
  setup() {
    const model = ref()
    const modelPeriod = ref()

    return { args, model, modelPeriod }
  },
  template: `
    <div class="storybook-field" style="height: 550px">
      <div class="storybook-field-view">
        <RcSesDatePickerField v-model="model" v-bind="args" class="form-control"></RcSesDatePickerField>
        <RcSesDatePickerField v-model="modelPeriod" label="Laikotarpis" range></RcSesDatePickerField>
      </div>
      <div class="storybook-field-previews">
        <div class="storybook-field-previews-title">State previews</div>
        <RcSesDatePickerField class="form-control" label="Read-only" readonly v-model="modelReadOnly"></RcSesDatePickerField>
        <RcSesDatePickerField class="form-control" label="Disabled" disabled v-model="modelDisabled"></RcSesDatePickerField>
        <RcSesDatePickerField label="Error" error="Klaidos pranešimas"></RcSesDatePickerField>
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
