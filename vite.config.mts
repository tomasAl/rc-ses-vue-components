import vue from '@vitejs/plugin-vue'
import { URL, fileURLToPath } from 'node:url'
import autoImport from 'unplugin-auto-import/vite'
import fonts from 'unplugin-fonts/vite'
import components from 'unplugin-vue-components/vite'
import vueRouter from 'unplugin-vue-router/vite'
import { defineConfig } from 'vite'
import layouts from 'vite-plugin-vue-layouts'
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineConfig({
  define: { 'process.env': {} },
  plugins: [
    vueRouter({
      dts: 'src/typed-router.d.ts',
    }),
    layouts(),
    autoImport({
      dts: 'src/auto-imports.d.ts',
      imports: [
        'vue',
        {
          vue: ['CSSProperties'],
          vuetify: ['useTheme'],
          'vue-router/auto': ['useRoute', 'useRouter'],
        },
      ],
      vueTemplate: true,
    }),
    components({
      dts: 'src/components.d.ts',
    }),
    vue({
      template: { transformAssetUrls },
    }),
    vuetify({
      autoImport: true,
      styles: {
        configFile: 'src/styles/vuetify/settings.scss',
      },
    }),
    fonts({
      google: {
        families: [
          {
            name: 'Public Sans',
            styles: 'wght@300;400;500;600;700;900',
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
    extensions: ['.js', '.json', '.jsx', '.mjs', '.mts', '.ts', '.tsx', '.vue'],
  },
  server: {
    port: 3000,
  },
})
