// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/ui'],
  runtimeConfig: {
    public: {
      UNSPLASH_ACCESS_KEY: process.env.VUE_APP_UNSPLASH_ACCESS_KEY,
    }
  }
})
