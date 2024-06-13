import { Component, h } from 'vue'
import type { IconAliases, IconProps, IconSet } from 'vuetify'

import CaretDownFilledIcon from '@/assets/icons/filled/CaretDownFilledIcon.vue'
import CheckIcon from '@/assets/icons/regular/CheckIcon.vue'

import CaretLeftIcon from './regular/CaretLeftIcon.vue'
import CaretUpIcon from './regular/CaretUpIcon.vue'
import MagnifyingGlassIcon from './regular/MagnifyingGlassIcon.vue'
import XIcon from './regular/XIcon.vue'

const Icon16px = (icon: Component, color?: string) => h(icon, { size: 16, color })

const aliases: IconAliases = {
  calendar: undefined,
  checkboxIndeterminate: undefined,
  checkboxOff: undefined,
  checkboxOn: undefined,
  clear: undefined,
  delete: undefined,
  delimiter: undefined,
  dropdown: Icon16px(CaretDownFilledIcon),
  edit: undefined,
  error: undefined,
  expand: CaretDownFilledIcon,
  file: undefined,
  first: undefined,
  info: undefined,
  last: undefined,
  loading: undefined,
  menu: undefined,
  minus: undefined,
  next: undefined,
  plus: undefined,
  prev: undefined,
  radioOff: undefined,
  radioOn: undefined,
  ratingEmpty: undefined,
  ratingFull: undefined,
  ratingHalf: undefined,
  sortAsc: undefined,
  sortDesc: undefined,
  subgroup: undefined,
  success: undefined,
  unfold: undefined,
  warning: undefined,
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
