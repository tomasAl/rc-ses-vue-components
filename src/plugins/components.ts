import { defineAsyncComponent } from 'vue'
import type { App, Plugin } from 'vue'

import '@/styles/shared/index.scss'

import RCButton from '../components/common/buttons/Button/Button.vue'

/*


const RCComponents: Plugin = {
  install: (app: App) => {
    app.component(
      'RCButton',
      defineAsyncComponent(
        () => import('../components/common/buttons/Button/Button.vue'),
      ),
    )
    // Add more component registrations here as needed
  },
}

export default RCComponents

export { RCButton }

// Type declarations
declare module 'vue' {
  interface GlobalComponents {
    RCButton: typeof RCButton
  }
}
*/

export { default as rcCreateVuetify } from '@/plugins/vuetify'

const rcComponents = (): Plugin => {
  return {
    install: (app: App) => {
      app.component(
        'RCButton',
        defineAsyncComponent(
          () => import('../components/common/buttons/Button/Button.vue'),
        ),
      )
      // Add more component registrations here as needed
    },
  }
}
export default rcComponents
export { rcComponents }

// Type declarations
declare module 'vue' {
  interface GlobalComponents {
    RCButton: typeof RCButton
  }
}
