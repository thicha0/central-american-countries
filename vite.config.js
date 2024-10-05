import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue2'
import viteCompression from 'vite-plugin-compression'

const path = require("path");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    viteCompression(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  }
})