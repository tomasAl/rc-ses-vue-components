// SearchField.stories.ts
import { Meta, StoryFn } from '@storybook/vue3'
import { ref } from 'vue'

import RcSesSearchableField from '@/components/common/inputs/SearchableField/RcSesSearchableField.vue'
import { SearchableFieldProps } from '@/components/common/inputs/SearchableField/type'
import SearchModal from '@/examples/modals/SearchModal.vue'
import TextFieldArgTypes from '@/stories/components/argTypes/components/TextFieldArgTypes'

const meta = {
  title: 'components/common/inputs/SearchField',
  component: RcSesSearchableField,
  argTypes: TextFieldArgTypes,
} as Meta

export default meta

const Template: StoryFn<SearchableFieldProps> = (args) => ({
  components: { RcSesSearchableField },
  setup() {
    const modelMain = ref(undefined)
    const modelError = ref('')
    const modelReadOnly = ref('Negalima redaguoti')
    const modelDisabled = ref('Neaktyvus laukas')

    return { args, modelReadOnly, modelDisabled, modelMain, modelError, SearchModal }
  },
  template: `
    <div class="storybook-field">
      <div class="storybook-field-view">
        <RcSesSearchableField v-bind="args" v-model="modelMain" :modal-component="SearchModal"></RcSesSearchableField>
      </div>
      <div class="storybook-field-previews">
        <div class="storybook-field-previews-title">State previews</div>
        <RcSesSearchableField class="form-control" label="Read-only" readonly v-model="modelReadOnly" :modal-component="SearchModal"></RcSesSearchableField>
        <RcSesSearchableField class="form-control" label="Disabled" disabled v-model="modelDisabled" :modal-component="SearchModal"></RcSesSearchableField>
        <RcSesSearchableField label="Error" error="Klaidos pranešimas" v-model="modelError" :modal-component="SearchModal"></RcSesSearchableField>
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
