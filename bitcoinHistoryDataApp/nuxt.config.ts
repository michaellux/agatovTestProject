// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['primevue/resources/themes/lara-dark-green/theme.css'],
  modules: [
    '@nuxtjs/tailwindcss',
    '@bg-dev/nuxt-naiveui',
    'nuxt-primevue'
  ],
  typescript: {
    shim: false
  },
  primevue: {
    /* Options */
  }
})
