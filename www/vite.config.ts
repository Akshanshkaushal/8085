import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import wasm from 'vite-plugin-wasm'
import topLevelAwait from 'vite-plugin-top-level-await'
import path from 'path'

export default defineConfig(({ command }) => ({
  base:  '/8085/',  
  build: {
    outDir: path.resolve(__dirname, 'build'),
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
}))
