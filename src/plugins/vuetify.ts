/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */
// Styles
// import '@mdi/font/css/materialdesignicons.css'
// Composables
import { createVuetify } from 'vuetify'
import 'vuetify/styles'

import { aliases, custom } from '@/assets/icons/iconSet'
import { darkTheme, lightTheme } from '@/theme/themes'

import defaults from '../theme'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  defaults,
  theme: {
    defaultTheme: 'light',
    themes: {
      light: lightTheme,
      dark: darkTheme,
    },
  },
  icons: {
    defaultSet: 'custom',
    aliases,
    sets: {
      custom,
    },
  },
})
