import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // This alias is needed for Leaflet images
      '/': '/public',
    },
  },
})