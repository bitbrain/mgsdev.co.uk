import { defineConfig } from 'vite'
import { geaPlugin } from '@geajs/vite-plugin'

export default defineConfig({
  plugins: [geaPlugin()],
  build: {
    modulePreload: { polyfill: false },
    rollupOptions: {
      output: {
        format: 'esm',
      },
    },
  },
  ssr: {
    noExternal: true,
    target: 'node',
  },
})
