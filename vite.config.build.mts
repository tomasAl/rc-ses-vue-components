import * as path from 'path'
import commonjs from '@rollup/plugin-commonjs'
import vue from '@vitejs/plugin-vue'
import { URL, fileURLToPath } from 'node:url'
import typescript from 'rollup-plugin-typescript2'
import { defineConfig } from 'vite'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'
import dts from 'vite-plugin-dts'
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
import { viteStaticCopy } from 'vite-plugin-static-copy'

import pkg from './package.json'

const scopedPackageName = pkg.name
const packageName = scopedPackageName.replace('/', '-').replace('@', '')

export default defineConfig({
  publicDir: false,
  build: {
    cssCodeSplit: true,
    lib: {
      entry: './src/library/index.ts',
      name: pkg.name,
      formats: ['es', 'cjs'],
      fileName: packageName,
    },
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, './src/library/index.ts'),
        icons: path.resolve(__dirname, './src/library/icons.ts'),
      },
      external: [
        ...Object.keys(pkg.dependencies || {}),
        /^vuetify($|\/.+)/,
      ],
      output: {
        exports: 'named',
        preserveModules: false,
      },
    },
  },
  plugins: [
    commonjs(),
    vue({
      template: { transformAssetUrls },
    }),
    dts({
      insertTypesEntry: true,
      staticImport: true,
    }),
    typescript({
      check: true,
      tsconfig: './tsconfig.lib.json',
      include: [
        './src/**/*.{vue|ts|tsx|d.ts}',
        './src/typed-router.d.ts',
      ],
    }),
    vuetify({
      autoImport: true,
      styles: 'none',
    }),
    cssInjectedByJsPlugin({
      topExecutionPriority: false,
      relativeCSSInjection: true,
      jsAssetsFilterFunction: (outputChunk) => outputChunk.name === 'main',
    }),
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
    },
    extensions: ['.js', '.json', '.jsx', '.mjs', '.mts', '.ts', '.tsx', '.vue'],
  },
})
