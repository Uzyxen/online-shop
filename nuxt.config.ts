// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/fonts', '@nuxt/icon'],
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    }
  ],
  icon: {
    componentName: 'NuxtIcon',
    customCollections: [
      {
        prefix: 'mol-icon',
        dir: './assets/icons-collection'
      }
    ]
  },
  ssr: true
})