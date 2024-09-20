// CheckboxField.stories.ts
import { Meta, StoryFn } from '@storybook/vue3'
import { ref } from 'vue'

import RcSesCheckboxField from '@/components/common/inputs/Checkboxes/CheckboxField/RcSesCheckboxField.vue'
import { CheckboxFieldProps } from '@/components/common/inputs/Checkboxes/CheckboxField/types'

export default {
  title: 'components/common/inputs/CheckboxField',
  component: RcSesCheckboxField,

  tags: ['autodocs'],
} as Meta

const lorem =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard."

const Template: StoryFn<CheckboxFieldProps> = (args) => ({
  components: { RcSesCheckboxField },
  setup() {
    const model = ref(false)
    const modelReadOnly = ref(true)
    const modelError = ref(true)

    return { args, modelReadOnly, model, modelError, lorem }
  },
  template: `
    <div class="storybook-field">
      <div class="storybook-field-view">
        <RcSesCheckboxField v-bind="args" v-model="model">{{ lorem }}</RcSesCheckboxField>
      </div>
      <div class="storybook-field-previews">
        <div class="storybook-field-previews-title">State previews</div>
        <RcSesCheckboxField class="form-control" label="Read-only" readonly v-model="modelReadOnly">{{ lorem }}</RcSesCheckboxField>
        <RcSesCheckboxField class="form-control" label="Disabled" disabled v-model="modelDisabled">{{ lorem }}</RcSesCheckboxField>
        <RcSesCheckboxField v-model="modelError" label="Error" error="Klaidos pranešimas">{{ lorem }}</RcSesCheckboxField>
      </div>
    </div>
  `,
})

export const Main = Template.bind({})
Main.args = {
  label: 'Sutikimas',
  name: 'sutikimas',
}
