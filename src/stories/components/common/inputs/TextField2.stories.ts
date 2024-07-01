// TextField.stories.ts
import { Meta, StoryFn } from '@storybook/vue3'

import { TextFieldProps2 } from '@/types/inputs/TextFieldProps'
import TextField2 from '@/components/common/inputs/TextField/TextField2.vue'

export default {
  title: 'components/common/inputs/TextField2',
  component: TextField2,

  tags: ['autodocs'],
} as Meta

const Template: StoryFn<TextFieldProps2> = (args) => ({
  components: { TextField2 },
  setup() {
    const modelReadOnly = ref('Negalima redaguoti')
    const modelDisabled = ref('Neaktyvus laukas')

    return { args, modelReadOnly, modelDisabled }
  },
  template: `
    <div class="storybook-field">
      <div class="storybook-field-view">
        <TextField2 v-bind="args"></TextField2>
      </div>
      <div class="storybook-field-previews">
        <div class="storybook-field-previews-title">State previews</div>
        <TextField2 class="form-control" label="Read-only" readonly v-model="modelReadOnly"></TextField2>
        <TextField2 class="form-control" label="Disabled" disabled v-model="modelDisabled"></TextField2>
        <TextField2 label="Error" error="Klaidos pranešimas"></TextField2>
      </div>
    </div>
  `,
})

export const Main = Template.bind({})
Main.args = {
/*  label: 'Antraštė',
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.",*/
  name: 'antraste',
}
