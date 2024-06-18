import { Component, h } from 'vue'
import type { IconAliases, IconProps, IconSet } from 'vuetify'

import CaretDownFilledIcon from '@/assets/icons/filled/CaretDownFilledIcon.vue'
import CheckboxOffIcon from '@/assets/icons/inputs/CheckboxOffIcon.vue'
import CheckboxOnIcon from '@/assets/icons/inputs/CheckboxOnIcon.vue'
import RadioOnIcon from '@/assets/icons/inputs/RadioOnIcon.vue'
import CheckIcon from '@/assets/icons/regular/CheckIcon.vue'

import RadioOffIcon from './inputs/RadioOffIcon.vue'
import CaretLeftIcon from './regular/CaretLeftIcon.vue'
import CaretUpIcon from './regular/CaretUpIcon.vue'
import MagnifyingGlassIcon from './regular/MagnifyingGlassIcon.vue'
import XIcon from './regular/XIcon.vue'
import MinusIcon from '@/assets/icons/regular/MinusIcon.vue'
import PlusIcon from '@/assets/icons/regular/PlusIcon.vue'
import WarningFilledIcon from '@/assets/icons/filled/WarningFilledIcon.vue'
import InfoFilledIcon from '@/assets/icons/filled/InfoFilledIcon.vue'
import WarningDiamondFilledIcon from '@/assets/icons/filled/WarningDiamondFilledIcon.vue'

const Icon16px = (icon: Component, color?: string) => h(icon, { size: 16, color })

const aliases: IconAliases = {
  calendar: undefined,
  checkboxIndeterminate: undefined,
  checkboxOff: CheckboxOffIcon,
  checkboxOn: CheckboxOnIcon,
  clear: undefined,
  delete: undefined,
  delimiter: undefined,
  dropdown: Icon16px(CaretDownFilledIcon),
  edit: undefined,
  error: WarningDiamondFilledIcon,
  expand: CaretDownFilledIcon,
  file: undefined,
  first: undefined,
  info: InfoFilledIcon,
  last: undefined,
  loading: undefined,
  menu: undefined,
  minus: MinusIcon,
  next: undefined,
  plus: PlusIcon,
  prev: undefined,
  radioOff: RadioOffIcon,
  radioOn: RadioOnIcon,
  ratingEmpty: undefined,
  ratingFull: undefined,
  ratingHalf: undefined,
  sortAsc: undefined,
  sortDesc: undefined,
  subgroup: undefined,
  success: undefined,
  unfold: undefined,
  warning: WarningFilledIcon,
  collapse: CaretUpIcon,
  complete: undefined,
  cancel: undefined,
  close: XIcon,
  back: CaretLeftIcon,
  search: MagnifyingGlassIcon,
  checkPrimary: Icon16px(CheckIcon, 'primary'),
}

const rcIcons: IconSet = {
  component: (props: IconProps) => {
    switch (props.icon) {
      case 'rc-caret-left':
        return h(CaretLeftIcon, props)

      // Add other cases here
      default:
        return h('span') // Fallback if the icon is not found
    }
  },
}

export { aliases, rcIcons }
