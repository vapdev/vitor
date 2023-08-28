// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    [
      '@nuxtjs/i18n',
      { vueI18n: './i18n.config.ts' }
    ],
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    '@pinia/nuxt',
  ],
  vite: {
    server: {
      watch: {
        usePolling: true
      }
    }
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
})
