import { StoryFn } from '@storybook/vue3'

import RcSesButton from '@/components/common/buttons/Button/RcSesButton.vue'
import type { ButtonProps } from '@/components/common/buttons/Button/types'
import ButtonArgTypes from '@/stories/components/argTypes/components/ButtonArgTypes'

export default {
  components: { RcSesButton },
  title: 'components/common/buttons/Button',
  component: RcSesButton,
  tags: ['autodocs'],
  argTypes: ButtonArgTypes,
}

const Template: StoryFn<ButtonProps> = (args) => ({
  components: { RcSesButton },
  setup() {
    return { args }
  },
  template: `
    <div class="storybook-field">
      <div class="storybook-field-view">
        <RcSesButton v-bind="args">Click Me!</RcSesButton>
      </div>
      <div class="storybook-field-previews">
        <div class="storybook-field-previews-title">State previews</div>
        <RcSesButton color="secondary">Click Me!</RcSesButton>
        <RcSesButton color="error">Click Me!</RcSesButton>
        <RcSesButton color="warning">Click Me!</RcSesButton>
      </div>
    </div>
  `,
})

export const Primary = Template.bind({})
Primary.args = {
  color: 'primary',
  loading: false,
}
