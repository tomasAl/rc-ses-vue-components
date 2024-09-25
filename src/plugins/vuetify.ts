import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { en, lt } from 'vuetify/locale'

import { aliases, rcIcons } from '@/assets/icons/iconSet'
import { darkTheme, lightTheme } from '@/theme/themes'

import defaults from '../theme'

const createRcSesVuetify = (): ReturnType<typeof createVuetify> =>
  createVuetify({
    components,
    directives,
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
