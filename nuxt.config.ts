import { defineNuxtConfig } from 'nuxt/config'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  alias: { '@': '/' },
  modules: [], // Add any Nuxt modules you need here
  hooks: {
    ready: () => {
      console.log('Nuxt is ready!')
    }
  },
  components: true,
  ssr: true,
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  }
})
