import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  // devtools: { enabled: true },
  debug: true,
  alias: { '@': '/' },
  modules: [],
  ssr: true,
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  nitro: {
    devProxy: {
      '/api': {
        target: 'https://mockapi.io/',
        changeOrigin: true
      }
    }
  }
})
