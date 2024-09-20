// FileDropzoneField.stories.ts
import { Meta, StoryFn } from '@storybook/vue3'

import RcSesFileDropzoneField from '@/components/common/inputs/FileDropzones/FileDropzoneField/RcSesFileDropzoneField.vue'
import { FileDropzoneFieldProps } from '@/components/common/inputs/FileDropzones/FileDropzoneField/type'

export default {
  title: 'components/common/inputs/FileDropzoneField',
  component: RcSesFileDropzoneField,
  // argTypes: FileInputFieldArgTypes,
} as Meta

const Template: StoryFn<FileDropzoneFieldProps> = (args) => ({
  components: { RcSesFileDropzoneField },
  setup() {
    return { args }
  },
  template: `
    <div class="storybook-field">
      <div class="storybook-field-view">
        <RcSesFileDropzoneField v-bind="args"></RcSesFileDropzoneField>
      </div>
      <div class="storybook-field-previews">
        <div class="storybook-field-previews-title">State previews</div>
        <RcSesFileDropzoneField class="form-control" label="Disabled" disabled></RcSesFileDropzoneField>
        <RcSesFileDropzoneField label="Error" error="Klaidos pranešimas"></RcSesFileDropzoneField>
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
