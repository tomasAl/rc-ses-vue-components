import type { App } from 'vue'

import i18n from './i18n'
import vuetify from './vuetify'

export default function registerPlugins(app: App) {
  app.use(i18n()).use(vuetify())
}
