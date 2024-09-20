// SelectField.stories.ts
import { Meta, StoryFn } from '@storybook/vue3'
import { ref } from 'vue'

import RcSesSelectField from '@/components/common/inputs/SelectField/RcSesSelectField.vue'
import type { SelectFieldProps } from '@/components/common/inputs/SelectField/type'
import { SelectFieldItemType } from '@/components/common/inputs/SelectField/type'
import SelectArgTypes from '@/stories/components/argTypes/components/SelectArgTypes'

export default {
  title: 'components/common/inputs/SelectField',
  component: RcSesSelectField,
  argTypes: SelectArgTypes,
  tags: ['autodocs'],
} as Meta

const selectItems: Array<SelectFieldItemType> = [
  {
    title: 'Pasirinkimas 1',
    value: 'pasirinkimas1',
    subtitle: 'Lorem ipsum as description',
  },
  {
    title: 'Pasirinkimas 2',
    value: 'pasirinkimas2',
    subtitle: 'Lorem ipsum as description',
  },
  {
    title: 'Pasirinkimas 3',
    value: 'pasirinkimas3',
    subtitle: 'Lorem ipsum as description',
  },
  {
    title: 'Pasirinkimas 4',
    value: 'pasirinkimas4',
    subtitle: 'Lorem ipsum as description',
  },
  {
    title: 'Pasirinkimas 5',
    value: 'pasirinkimas5',
    subtitle: 'Lorem ipsum as description',
  },
]

const Template: StoryFn<SelectFieldProps> = (args) => ({
  components: { RcSesSelectField },
  setup() {
    const modelReadOnly = ref('Pasirinkimas 5')
    const modelDisabled = ref('Pasirinkimas 2')
    const modelError = ref('Pasirinkimas 1')
    const items = ref(selectItems)

    return { args, modelReadOnly, modelDisabled, modelError, items }
  },
  template: `
    <div class="storybook-field">
      <div class="storybook-field-view">
        <RcSesSelectField v-bind="args" :items="items"></RcSesSelectField>
      </div>
      <div class="storybook-field-previews">
        <div class="storybook-field-previews-title">State previews</div>
         <RcSesSelectField class="form-control" field-label="Read-only" readonly v-model="modelReadOnly" :items="items"></RcSesSelectField>
         <RcSesSelectField class="form-control" field-label="Disabled" disabled v-model="modelDisabled" :items="items"></RcSesSelectField>
         <RcSesSelectField field-label="Error" error="Klaidos pranešimas" v-model="modelError" :items="items"></RcSesSelectField>
      </div>
    </div>
  `,
})

export const Main = Template.bind({})
Main.args = {
  fieldLabel: 'Pasirinkti',
  fieldDescription:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.",
  name: 'pasirinkti',
  placeholder: 'Pasirinkite',
  items: selectItems,
  searchable: false,
}
