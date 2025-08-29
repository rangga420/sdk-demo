import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'

export default defineConfig({
  plugins: [preact()],
  build: {
    lib: {
      entry: './src/main.jsx',
      name: 'SimpleChatSDK',
      formats: ['iife'],
      fileName: 'simple-chat-sdk'
    },
    rollupOptions: {
      output: {
        inlineDynamicImports: true,
        manualChunks: undefined,
        extend: true,
        // Pastikan IIFE exports ke window
        globals: {
          'SimpleChatSDK': 'SimpleChatSDK'
        }
      }
    },
    cssCodeSplit: false,
    minify: false
  }
})