/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */
import { createApp } from 'vue'

import registerPlugins from '@/plugins'
import '@/styles/shared/index.scss'

import App from './App.vue'
import router from './router'

const app = createApp(App)

registerPlugins(app)
app.use(router)

app.mount('#app')
