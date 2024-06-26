/**
 * plugins/index.ts
 *
 * Automatically included in `./src/main.ts`
 */
// Plugins
// Types
import type { App } from 'vue'

import router from '../router'
import pinia from '../stores'
import vuetify from './vuetify'
import i18n from './i18n'

export default function registerPlugins(app: App) {
  app
    .use(i18n)
    .use(vuetify)
    .use(router)
    .use(pinia)
}
