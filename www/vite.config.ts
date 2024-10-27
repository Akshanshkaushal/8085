import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import wasm from 'vite-plugin-wasm'
import topLevelAwait from 'vite-plugin-top-level-await'

export default defineConfig({
  build: {
    outDir: 'build',
    target: 'esnext',
    rollupOptions: {
      external: ['wbg'],
    },
  },
  plugins: [
    react(),
    svgr(),
    wasm(),
    topLevelAwait(),
  ],
  optimizeDeps: {
    exclude: ['pp8085'],
  },
})