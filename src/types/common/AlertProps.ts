import type { Alert } from '@/library'

export interface AlertProps {
  id?: string
  text?: string
  title?: string
  type?: 'warning' | 'info' | 'error' | 'success'
  variant?: 'light' | 'dark'
  closeable?: boolean
}

declare module 'vue' {
  interface GlobalComponents {
    Alert: typeof Alert
  }
}

