/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */
import { createVuetify } from 'vuetify'
import 'vuetify/styles'

import { aliases, rcIcons } from '@/assets/icons/iconSet'
import { darkTheme, lightTheme } from '@/theme/themes'

import { lt, en } from 'vuetify/locale'

import defaults from '../theme'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  defaults,
  locale: {
    locale: 'lt',
    fallback: 'en',
    messages: { lt, en }
  },
  theme: {
    defaultTheme: 'light',
    themes: {
      light: lightTheme,
      dark: darkTheme,
    },
  },
  icons: {
    defaultSet: 'rc',
    aliases,
    sets: {
      rc: rcIcons,
    },
  },
})
