/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */
import { createApp } from 'vue'
import 'vuetify/styles'

import registerPlugins from '@/plugins'
import '@/styles/shared/index.scss'
import '@/validators'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)
registerPlugins(app)

app.mount('#app')
