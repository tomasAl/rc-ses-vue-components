import { VBreadcrumbs } from 'vuetify/components'

export interface BreadcrumbItemObectType {
  title?: string
  disabled?: boolean
  href?: string
}

export interface HeaderPanelProps {
  breadcrumbs?: VBreadcrumbs['$props']['items']
  title?: string
  description?: string
  dropShadow?: boolean
}
