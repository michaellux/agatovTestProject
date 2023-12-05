// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['primevue/resources/themes/lara-dark-green/theme.css'],
  modules: [
     '@nuxtjs/tailwindcss',
     'nuxt-primevue'
  ],
  primevue: { 
    cssLayerOrder: 'tailwind-base, primevue, tailwind-utilities'
  },
  build: {
    transpile: ["@vuepic/vue-datepicker"],
  },
  devtools: { enabled: true },
  tailwindcss: {
    exposeConfig: true,
    viewer: true,
    // and more...
  },
})
