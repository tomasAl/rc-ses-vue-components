import commonjs from '@rollup/plugin-commonjs'
import vue from '@vitejs/plugin-vue'
import { URL, fileURLToPath } from 'node:url'
import * as path from 'path'
import typescript from 'rollup-plugin-typescript2'
import autoImport from 'unplugin-auto-import/vite'
import { defineConfig } from 'vite'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'
import dts from 'vite-plugin-dts'
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
import { viteStaticCopy } from 'vite-plugin-static-copy'

import pkg from './package.json'

const scopedPackageName = pkg.name
const packageName = scopedPackageName.replace('/', '-').replace('@', '')
const entry = './src/library.ts'

export default defineConfig({
  publicDir: false,
  build: {
    lib: {
      entry,
      name: pkg.name,
      formats: ['es', 'cjs'],
      fileName: packageName,
    },
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, entry),
      },
      external: [...Object.keys(pkg.dependencies || {}), /^vuetify($|\/.+)/],
      output: {
        exports: 'named',
      },
    },
  },
  plugins: [
    commonjs(),
    autoImport({
      dts: false,
      imports: [
        'vue',
        {
          vue: ['CSSProperties'],
        },
      ],
      vueTemplate: true,
    }),
    vue({
      template: { transformAssetUrls },
    }),
    dts({
      insertTypesEntry: true,
      staticImport: true,
    }),
    typescript({
      check: true,
      include: ['./src/**/*.vue', './src/**/*.ts'],
    }),
    vuetify({
      autoImport: true,
      styles: 'none',
    }),
    cssInjectedByJsPlugin({ topExecutionPriority: false }),
		viteStaticCopy({
			targets: [
				{
					src: './src/styles/vuetify/*',
					dest: 'styles/vuetify',
				},
			]
		}),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
			'@types': fileURLToPath(new URL('./src/types', import.meta.url)),
    },
    extensions: ['.js', '.json', '.jsx', '.mjs', '.mts', '.ts', '.tsx', '.vue'],
  },
})
