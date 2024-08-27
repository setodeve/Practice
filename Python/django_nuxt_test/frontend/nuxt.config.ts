// https://nuxt.com/docs/api/configuration/nuxt-config


// const apiUrl = 'http://localhost:8000/'
const apiUrl = 'http://django.django-nuxt-test.orb.local/'

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      apiUrl,
    },
  },
  routeRules: {
    '/questions': { ssr:true },
  }
})
