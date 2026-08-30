import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: '/pangasinan-heritage-digital-showcase/',
  plugins: [vue()],
  server: {
    host: 'localhost',
    port: 5173
  }
})
