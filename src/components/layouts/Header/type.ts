import type { VBreadcrumbs } from 'vuetify/components'

export interface HeaderPanelProps {
  breadcrumbs?: VBreadcrumbs['$props']['items']
  title?: string
  description?: string
  dropShadow?: boolean
}
