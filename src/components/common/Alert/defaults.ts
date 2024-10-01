import type { VAlert } from 'vuetify/components'

import { AlertTypes, AlertVariants } from '@/components/common/Alert/types'

export default {
  id: undefined,
  variant: 'light' as AlertVariants,
  closable: false,
  color: undefined,
  border: false,
  borderColor: undefined,
  closeIcon: '$close',
  closeLabel: '$vuetify.close',
  density: 'default' as VAlert['$props']['density'],
  elevation: undefined,
  height: undefined,
  icon: undefined,
  location: undefined,
  maxHeight: undefined,
  maxWidth: undefined,
  minHeight: undefined,
  minWidth: undefined,
  position: undefined,
  prominent: false,
  tag: 'div',
  text: undefined,
  theme: undefined,
  tile: false,
  title: undefined,
  type: 'info' as AlertTypes,
  width: undefined,
}
