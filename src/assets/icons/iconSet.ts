import { defineComponent, h } from 'vue'
import type { IconAliases, IconProps, IconSet } from 'vuetify'

import CaretDoubleLeftBoldIcon from '@/assets/icons/bold/CaretDoubleLeftBoldIcon.vue'
import CaretDoubleRightBoldIcon from '@/assets/icons/bold/CaretDoubleRightBoldIcon.vue'
import CaretLeftBoldIcon from '@/assets/icons/bold/CaretLeftBoldIcon.vue'
import CaretRightBoldIcon from '@/assets/icons/bold/CaretRightBoldIcon.vue'
import CaretDownFilledIcon from '@/assets/icons/filled/CaretDownFilledIcon.vue'
import CheckCircleFilledIcon from '@/assets/icons/filled/CheckCircleFilledIcon.vue'
import InfoFilledIcon from '@/assets/icons/filled/InfoFilledIcon.vue'
import WarningDiamondFilledIcon from '@/assets/icons/filled/WarningDiamondFilledIcon.vue'
import WarningFilledIcon from '@/assets/icons/filled/WarningFilledIcon.vue'
import XCircleFilledIcon from '@/assets/icons/filled/XCircleFilledIcon.vue'
import CheckboxOffIcon from '@/assets/icons/inputs/CheckboxOffIcon.vue'
import CheckboxOnIcon from '@/assets/icons/inputs/CheckboxOnIcon.vue'
import RadioOffIcon from '@/assets/icons/inputs/RadioOffIcon.vue'
import RadioOnIcon from '@/assets/icons/inputs/RadioOnIcon.vue'
import { ScrollIcon, TrashIcon } from '@/assets/icons/regular'
import CalendarBlankIcon from '@/assets/icons/regular/CalendarBlankIcon.vue'
import CaretDownIcon from '@/assets/icons/regular/CaretDownIcon.vue'
import CaretLeftIcon from '@/assets/icons/regular/CaretLeftIcon.vue'
import CaretRightIcon from '@/assets/icons/regular/CaretRightIcon.vue'
import CaretUpIcon from '@/assets/icons/regular/CaretUpIcon.vue'
import CheckIcon from '@/assets/icons/regular/CheckIcon.vue'
import CheckSuccessIcon from '@/assets/icons/regular/CheckSuccessIcon.vue'
import MagnifyingGlassIcon from '@/assets/icons/regular/MagnifyingGlassIcon.vue'
import MinusIcon from '@/assets/icons/regular/MinusIcon.vue'
import PaperclipIcon from '@/assets/icons/regular/PaperclipIcon.vue'
import PlusIcon from '@/assets/icons/regular/PlusIcon.vue'
import QuestionIcon from '@/assets/icons/regular/QuestionIcon.vue'
import UploadIcon from '@/assets/icons/regular/UploadIcon.vue'
import XIcon from '@/assets/icons/regular/XIcon.vue'

function createIconComponent(icon: any, size: number) {
  return defineComponent({
    setup(_, { attrs }) {
      return () => h(icon, { ...attrs, size })
    },
  })
}

const Icon16pxCaretDown = createIconComponent(CaretDownFilledIcon, 16)

const aliases: Partial<IconAliases> = {
  calendar: CalendarBlankIcon,
  checkboxIndeterminate: CheckboxOffIcon,
  checkboxOff: CheckboxOffIcon,
  checkboxOn: CheckboxOnIcon,
  clear: XCircleFilledIcon,
  delete: TrashIcon,
  delimiter: undefined,
  dropdown: Icon16pxCaretDown,
  edit: undefined,
  error: WarningDiamondFilledIcon,
  expand: CaretDownIcon,
  file: PaperclipIcon,
  first: undefined,
  info: InfoFilledIcon,
  last: undefined,
  loading: undefined,
  menu: undefined,
  minus: MinusIcon,
  next: CaretRightIcon,
  plus: PlusIcon,
  prev: CaretLeftIcon,
  radioOff: RadioOffIcon,
  radioOn: RadioOnIcon,
  ratingEmpty: undefined,
  ratingFull: undefined,
  ratingHalf: undefined,
  sortAsc: undefined,
  sortDesc: undefined,
  subgroup: QuestionIcon,
  success: CheckCircleFilledIcon,
  unfold: undefined,
  warning: WarningFilledIcon,
  collapse: CaretUpIcon,
  complete: CheckIcon,
  cancel: undefined,
  close: XIcon,
  closeFilled: XCircleFilledIcon,
  back: CaretLeftIcon,
  search: MagnifyingGlassIcon,
  checkPrimary: CheckIcon,
  upload: UploadIcon,
  tooltip: QuestionIcon,
  scroll: ScrollIcon,
}

const rcIcons: IconSet = {
  component: (props: IconProps) => {
    switch (props.icon) {
      case 'rc-caret-left':
        return h(CaretLeftIcon, props)

      case 'rc-success':
        return h(CheckSuccessIcon, props)

      case 'rc-caret-down-filled':
        return h(CaretDownFilledIcon, props)

      case 'rc-caret-double-right-bold':
        return h(CaretDoubleRightBoldIcon, props)

      case 'rc-caret-double-left-bold':
        return h(CaretDoubleLeftBoldIcon, props)

      case 'rc-caret-right-bold':
        return h(CaretRightBoldIcon, props)

      case 'rc-caret-left-bold':
        return h(CaretLeftBoldIcon, props)

      // Add other cases here
      default:
        return h('span') // Fallback if the icon is not found
    }
  },
}

export { aliases, rcIcons }
