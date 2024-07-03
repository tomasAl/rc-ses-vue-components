import { VRadio } from 'vuetify/components'

import { InputProps } from '@/types/inputs/FieldProps'
import { ReservedKeys } from '@/types/reserved/ReservedKeys'
import { ColorType } from '@/types/common/ColorType'

interface RadioInterface extends /* @vue-ignore */ Partial<VRadio['$props']> {}

export type RadioProps = Omit<RadioInterface, ReservedKeys | 'color' | 'variant'> & {
  color?: ColorType
}
