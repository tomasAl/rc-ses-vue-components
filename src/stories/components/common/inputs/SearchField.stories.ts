// SearchField.stories.ts
import { Meta, StoryFn } from '@storybook/vue3'

import RcSesSearchField from '@/components/common/inputs/SearchField/RcSesSearchField.vue'
import type { SearchFieldProps } from '@/components/common/inputs/SearchField/type'
import TextFieldArgTypes from '@/stories/components/argTypes/components/TextFieldArgTypes'

const meta = {
  title: 'components/common/inputs/SearchField',
  component: RcSesSearchField,
  argTypes: TextFieldArgTypes,
} as Meta

export default meta

const Template: StoryFn<SearchFieldProps> = (args) => ({
  components: { RcSesSearchField },
  setup() {
    const modelMain = ref(undefined)
    const modelError = ref('')
    const modelReadOnly = ref('Negalima redaguoti')
    const modelDisabled = ref('Neaktyvus laukas')

    return { args, modelReadOnly, modelDisabled, modelMain, modelError }
  },
  template: `
    <div class="storybook-field">
      <div class="storybook-field-view">
        <RcSesSearchField v-bind="args" v-model="modelMain"></RcSesSearchField>
      </div>
      <div class="storybook-field-previews">
        <div class="storybook-field-previews-title">State previews</div>
        <RcSesSearchField class="form-control" label="Read-only" readonly v-model="modelReadOnly"></RcSesSearchField>
        <RcSesSearchField class="form-control" label="Disabled" disabled v-model="modelDisabled"></RcSesSearchField>
        <RcSesSearchField label="Error" error="Klaidos pranešimas" v-model="modelError"></RcSesSearchField>
      </div>
    </div>
  `,
})

export const Main = Template.bind({})
Main.args = {
  fieldLabel: 'Paieška',
  fieldDescription:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.",
  name: 'antraste',
  disabled: false,
  error: undefined,
  placeholder: 'Ieškoti',
}
