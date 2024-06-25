import type { Meta, StoryObj } from '@storybook/vue3'
import type { ComponentProps } from 'vue-component-type-helpers'
import { VBtn } from 'vuetify/components'
import {
  extractComponentProps,
} from '@storybook/docs-tools'
import Button from '@/components/common/buttons/Button/Button.vue'

type ButtonProps = ComponentProps<typeof VBtn>

console.log('extracted', extractComponentProps(VBtn, 'props'))



const meta = {
  title: 'Example/VBtn',
  component: Button,
  tags: ['autodocs'],
  argTypes: extractComponentProps(Button, 'props'),
} satisfies Meta<ButtonProps>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    variant: 'outlined',
    color: 'primary',
  },
}

export const Secondary: Story = {
  args: {
    variant: 'tonal',
    color: 'secondary',
  },
}
