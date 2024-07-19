// FileInputField.stories.ts
import { Meta, StoryFn } from '@storybook/vue3'

import { FileInputFieldProps } from '@/types/inputs/FileInputProps'
import FileInputField from '@/components/common/inputs/FileInputField/FileInputField.vue'
import FileInputFieldArgTypes from '@/stories/components/argTypes/components/FileInputFieldArgTypes'

export default {
  title: 'components/common/inputs/FileInputField',
  component: FileInputField,
  argTypes: FileInputFieldArgTypes,
} as Meta

const Template: StoryFn<FileInputFieldProps> = (args) => ({
  components: { FileInputField },
  setup() {
    return { args }
  },
  template: `
    <div class="storybook-field">
      <div class="storybook-field-view">
        <FileInputField v-bind="args"></FileInputField>
      </div>
      <div class="storybook-field-previews">
        <div class="storybook-field-previews-title">State previews</div>
        <FileInputField class="form-control" label="Read-only" readonly></FileInputField>
        <FileInputField class="form-control" label="Disabled" disabled></FileInputField>
        <FileInputField label="Error" error="Klaidos pranešimas"></FileInputField>
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
