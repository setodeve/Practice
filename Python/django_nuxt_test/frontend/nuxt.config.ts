// https://nuxt.com/docs/api/configuration/nuxt-config
const apiBaseUrl = 'http://localhost:8000/'
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      apiBaseUrl,
    },
  },
})
