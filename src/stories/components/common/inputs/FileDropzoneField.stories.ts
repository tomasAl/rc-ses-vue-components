// FileDropzoneField.stories.ts
import { Meta, StoryFn } from '@storybook/vue3'

import FileDropzoneField from '@/components/common/inputs/FileDropzoneField/FileDropzoneField.vue'
import { FileDropzoneFieldProps } from '@/components/common/inputs/FileDropzoneField/FileDropzoneType'

export default {
  title: 'components/common/inputs/FileDropzoneField',
  component: FileDropzoneField,
  // argTypes: FileInputFieldArgTypes,
} as Meta

const Template: StoryFn<FileDropzoneFieldProps> = (args) => ({
  components: { FileDropzoneField },
  setup() {
    return { args }
  },
  template: `
    <div class="storybook-field">
      <div class="storybook-field-view">
        <FileDropzoneField v-bind="args"></FileDropzoneField>
      </div>
      <div class="storybook-field-previews">
        <div class="storybook-field-previews-title">State previews</div>
        <FileDropzoneField class="form-control" label="Disabled" disabled></FileDropzoneField>
        <FileDropzoneField label="Error" error="Klaidos pranešimas"></FileDropzoneField>
      </div>
    </div>
  `,
})

export const Main = Template.bind({})
Main.args = {
  fieldLabel: 'Įkelk dokumentus',
  fieldDescription:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.",
  name: 'dokumentai',
}
