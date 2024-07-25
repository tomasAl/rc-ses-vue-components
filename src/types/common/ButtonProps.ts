import type { VBtn } from 'vuetify/components'

import type Button from '@/components/common/buttons/Button/Button.vue'
import type { ColorType } from '@/types/common/ColorType'

export interface ButtonProps {
  active?: VBtn['$props']['active']
  appendIcon?: VBtn['$props']['appendIcon']
  block?: VBtn['$props']['block']
  color?: ColorType
  density?: VBtn['$props']['density']
  loading?: VBtn['$props']['loading']
  variant?: 'tonal' | 'outlined' | 'text'
}

declare module 'vue' {
  interface GlobalComponents {
    Button: typeof Button
  }
}
