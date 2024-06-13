/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */
import { createVuetify } from 'vuetify'
import 'vuetify/styles'

import { aliases, rcIcons } from '@/assets/icons/iconSet'
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
    defaultSet: 'rc',
    aliases,
    sets: {
      rc: rcIcons,
    },
  },
})
