// DatePickerField.stories.ts
import { Meta, StoryFn } from '@storybook/vue3'

import DatePickerField from '@/components/common/inputs/DatePickerField/DatePickerField.vue'
import { DatePickerFieldProps } from '@/types/inputs/DatePickerProps'
import DatePickerFieldArgTypes from '@/stories/components/argTypes/components/DatePickerFieldArgTypes'

export default {
  title: 'components/common/inputs/DatePickerField',
  component: DatePickerField,
  argTypes: DatePickerFieldArgTypes,
} as Meta

const Template: StoryFn<DatePickerFieldProps> = (args) => ({
  components: { DatePickerField },
  setup() {
    const model = ref()
    const modelPeriod = ref()

    return { args, model, modelPeriod }
  },
  template: `
    <div class="storybook-field" style="height: 550px">
      <div class="storybook-field-view">
        <DatePickerField v-model="model" v-bind="args" class="form-control"></DatePickerField>
        <DatePickerField v-model="modelPeriod" label="Laikotarpis" range></DatePickerField>
      </div>
      <div class="storybook-field-previews">
        <div class="storybook-field-previews-title">State previews</div>
        <DatePickerField class="form-control" label="Read-only" readonly v-model="modelReadOnly"></DatePickerField>
        <DatePickerField class="form-control" label="Disabled" disabled v-model="modelDisabled"></DatePickerField>
        <DatePickerField label="Error" error="Klaidos pranešimas"></DatePickerField>
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
