import { createVuetify } from 'vuetify'
import { en, lt } from 'vuetify/locale'
import 'vuetify/styles'

import { aliases, rcIcons } from '@/assets/icons/iconSet'
import { darkTheme, lightTheme } from '@/theme/themes'

import defaults from '../theme'

const createRcSesVuetify = (): ReturnType<typeof createVuetify> =>
  createVuetify({
    defaults,
    locale: {
      locale: 'lt',
      fallback: 'en',
      messages: { lt, en },
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

export default createRcSesVuetify
