import { fileURLToPath, URL } from 'node:url'
import { resolve } from 'node:path'

import { defineConfig, PluginOption } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import { createFilter } from '@rollup/pluginutils'

// strip data-vitest-id from sfc output code in build
function stripVitestAttributesPlugin(options: { include?: []; exclude?: [] } = {}): PluginOption {
  function removeVitestIdAttribute(code: string) {
    const regex = /"data-vitest-id"\s*:\s*"[^"]*"\s*,?/g
    return code.replace(regex, '')
  }
  const filter = createFilter(options.include, options.exclude)

  return {
    name: 'strip-vitest-attributes',
    transform(code, id) {
      // skip if not in production
      if (process.env.NODE_ENV !== 'production') {
        return null
      }

      const isVueSFC = filter(id) && id.endsWith('.vue')

      if (!isVueSFC) {
        return null
      }

      return {
        code: removeVitestIdAttribute(code),
        map: { mappings: '' } // Empty source map to avoid Rollup warnings
      }
    }
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), stripVitestAttributesPlugin(), dts()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    lib: {
      entry: resolve(__dirname, './src/build.ts'),
      name: 'Vue-Page-Builder',
      fileName: 'vue-page-builder',
      formats: ['es', 'umd']
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})
