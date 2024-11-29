import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Inspect from 'vite-plugin-inspect';
import federation from '@originjs/vite-plugin-federation';

// https://vite.dev/config/
export default defineConfig({
  cacheDir: false,
  plugins: [
    react(),
    Inspect(),
    federation({
      name: 'vite-host', // Define the module federation app name
      filename: 'remoteEntry.js',
      exposes: {
        './Button': './src/components/Button.js', // Expose Button module
      },
      remotes: {
        mfvite: 'http://localhost:3001/remoteEntry.js', // Consume remote module
      },
      shared: ['react', 'react-dom'], // Shared dependencies
      outputFormat: 'esm', // Ensure ESM output
    }),
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
