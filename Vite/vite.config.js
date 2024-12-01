import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

export default defineConfig({
  plugins: [
    react(),
    // federation({
    //   name: 'layout',
    //   filename: 'remoteEntry.js',
    //   exposes: {
    //     './Button': './src/components/Button.jsx',
    //   },
    //   format: 'cjs',
    //   shared: ['react', 'react-dom'],
    // })
    federation({
      name: 'remoteApp',
      filename: 'remoteEntry.js',
      exposes: {
        './Button': './src/components/Button.jsx'
      },
      shared: ['react', 'react-dom']
    })
  ],
  build: {
    target: 'esnext',
    modulePreload: false, // Disable preload for compatibility with Module Federation
    minify: false, // Disable minification for debugging
  },
  server: {
    cors: true, // Enables CORS
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization",
    },
  },
})