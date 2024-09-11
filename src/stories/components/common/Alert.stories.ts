// Alert.stories.ts
import { Meta, StoryFn } from '@storybook/vue3'

import RcSesAlert from '@/components/common/Alert/RcSesAlert.vue'
import type { AlertProps } from '@/components/common/Alert/types'

export default {
  title: 'components/common/Alert',
  component: RcSesAlert,

  tags: ['autodocs'],
} as Meta

const lorem =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard."

const Template: StoryFn<AlertProps> = (args) => ({
  components: { RcSesAlert },
  setup() {
    return { args, lorem }
  },
  template: `
    <div class="storybook-field">
      <div class="storybook-field-view">
        <RcSesAlert v-bind="args"></RcSesAlert>
      </div>
      <div class="storybook-field-previews">
        <div class="storybook-field-previews-title">State previews</div>
        <RcSesAlert class="form-control" title="Info" type="info" >{{ lorem }}</RcSesAlert>
        <RcSesAlert class="form-control" title="Warning" type="warning" >{{ lorem }}</RcSesAlert>
        <RcSesAlert class="form-control" title="Error" type="error" >{{ lorem }}</RcSesAlert>
        <RcSesAlert class="form-control" title="Success" type="success" >{{ lorem }}</RcSesAlert>

      </div>
    </div>
  `,
})

export const Main = Template.bind({})
Main.args = {
  text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.",
  id: 'sutikimas',
}
