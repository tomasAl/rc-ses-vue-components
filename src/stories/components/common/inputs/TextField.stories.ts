// TextField.stories.ts
import { Meta, StoryFn } from '@storybook/vue3'
import { ref } from 'vue'

import RcSesTextField from '@/components/common/inputs/TextField/RcSesTextField.vue'
import { TextFieldProps } from '@/components/common/inputs/TextField/type'
import TextFieldArgTypes from '@/stories/components/argTypes/components/TextFieldArgTypes'

export default {
  title: 'components/common/inputs/TextField',
  component: RcSesTextField,
  argTypes: TextFieldArgTypes,
} as Meta

const Template: StoryFn<TextFieldProps> = (args) => ({
  components: { RcSesTextField },
  setup() {
    const modelReadOnly = ref('Negalima redaguoti')
    const modelDisabled = ref('Neaktyvus laukas')

    return { args, modelReadOnly, modelDisabled }
  },
  template: `
    <div class="storybook-field">
      <div class="storybook-field-view">
        <RcSesTextField v-bind="args"></RcSesTextField>
      </div>
      <div class="storybook-field-previews">
        <div class="storybook-field-previews-title">State previews</div>
        <RcSesTextField class="form-control" label="Read-only" readonly v-model="modelReadOnly"></RcSesTextField>
        <RcSesTextField class="form-control" label="Disabled" disabled v-model="modelDisabled"></RcSesTextField>
        <RcSesTextField label="Error" error="Klaidos pranešimas"></RcSesTextField>
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
