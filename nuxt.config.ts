export default defineNuxtConfig({
  devtools: { enabled: true },
  alias: { '@': '/' },
  modules: ['@pinia/nuxt', '@nuxtjs/tailwindcss'],

  build: {
    transpile: ['primevue']
  },

  css: [
    '~/assets/css/main.css',
    'primevue/resources/themes/lara-light-blue/theme.css',
    'primeicons/primeicons.css'
  ],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },

  typescript: {
    strict: true
  },

  ssr: true,

  hooks: {
    ready: () => {
      console.log('Nuxt is ready!')
    }
  },

  compatibilityDate: '2024-09-02'
})