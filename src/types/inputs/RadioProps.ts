import { VRadio } from 'vuetify/components'

import type { ColorType } from '@/types/common/ColorType'
import { ReservedKeys } from '@/types/reserved/ReservedKeys'

interface RadioInterface extends /* @vue-ignore */ Partial<VRadio['$props']> {}

export type RadioProps = Omit<RadioInterface, ReservedKeys | 'color' | 'variant'> & {
  color?: ColorType
}
