// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  alias: {
    '@': '/', // Optional, but you can adjust the alias if needed
  },
  modules: [], // Add any Nuxt modules you need here
  components: true, // Auto-import components
  ssr: true, // Enable or disable server-side rendering (SSR)
  css: [
    '~/assets/css/main.css' // Link to your main.css file in the assets folder
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
