import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Inspect from 'vite-plugin-inspect';
import { visualizer } from 'rollup-plugin-visualizer'
import { splitVendorChunkPlugin } from 'vite'
import analyzer from 'vite-bundle-analyzer'

// https://vite.dev/config/
export default defineConfig({
  cacheDir: false,
  plugins: [
    react(),
    Inspect(),
  ],
  server: {
    // Enable verbose logging
    hmr: { overlay: true },
    // Log performance metrics
  },
  build: {
    minify: false, // Disables minification
  },
  logLevel: 'info'
})
