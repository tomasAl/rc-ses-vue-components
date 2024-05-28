import { h } from 'vue'
import type { IconSet, IconAliases, IconProps } from 'vuetify'
import CaretLeftIcon from "./regular/CaretLeftIcon.vue";
import CaretDownIcon from "./regular/CaretDownIcon.vue";

// Import other custom icons here

const aliases: IconAliases = {
  calendar: undefined,
  checkboxIndeterminate: undefined,
  checkboxOff: undefined,
  checkboxOn: undefined,
  clear: undefined,
  delete: undefined,
  delimiter: undefined,
  dropdown: CaretDownIcon,
  edit: undefined,
  error: undefined,
  expand: undefined,
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
  collapse: undefined,
  complete: undefined,
  cancel: undefined,
  close: undefined,
  back: CaretLeftIcon,
}

const custom: IconSet = {
  component: (props: IconProps) => {
    switch (props.icon) {
      case 'CaretLeftIcon':
        return h(CaretLeftIcon, props)

      // Add other cases here
      default:
        return h('span')  // Fallback if the icon is not found
    }
  }
}

export { aliases, custom }
