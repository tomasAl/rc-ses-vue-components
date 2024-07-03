import { VBtn } from 'vuetify/components'

import { ColorType } from '@/types/common/ColorType'

type ReservedKeys = 'key' | 'ref' | '$children'

interface ButtonInterface extends /* @vue-ignore */ Partial<VBtn['$props']> {}

export type ButtonProps = Omit<ButtonInterface, ReservedKeys | 'color' | 'variant'> & {
  color?: ColorType
  variant?: 'tonal' | 'outlined'
}
