// FileInputField.stories.ts
import { Meta, StoryFn } from '@storybook/vue3'

import RcSesFileInputField from '@/components/common/inputs/FileInputs/FileInputField/RcSesFileInputField.vue'
import { FileInputFieldProps } from '@/components/common/inputs/FileInputs/FileInputField/type'
import FileInputFieldArgTypes from '@/stories/components/argTypes/components/FileInputFieldArgTypes'

export default {
  title: 'components/common/inputs/FileInputField',
  component: RcSesFileInputField,
  argTypes: FileInputFieldArgTypes,
} as Meta

const Template: StoryFn<FileInputFieldProps> = (args) => ({
  components: { RcSesFileInputField },
  setup() {
    return { args }
  },
  template: `
    <div class="storybook-field">
      <div class="storybook-field-view">
        <RcSesFileInputField v-bind="args"></RcSesFileInputField>
      </div>
      <div class="storybook-field-previews">
        <div class="storybook-field-previews-title">State previews</div>
        <RcSesFileInputField class="form-control" label="Read-only" readonly></RcSesFileInputField>
        <RcSesFileInputField class="form-control" label="Disabled" disabled></RcSesFileInputField>
        <RcSesFileInputField label="Error" error="Klaidos pranešimas"></RcSesFileInputField>
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
