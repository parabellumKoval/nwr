// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    pageTransition: { name: 'page-tr', mode: 'out-in' },
    layoutTransition: { name: 'layout-tr', mode: 'out-in' }
  },

  css: [
    '@/assets/scss/main.scss'
  ],

  modules: [
    [
      '@nuxtjs/google-fonts',
      {
        families: {
          "Open+Sans": {
            wght: [300, 400, 600, 800]
          },
        },
        display: 'swap',
        preload: true
      }
    ],
    [
      '@nuxt/image-edge',
      {
        screens: {
          mobile: 320,
          tablet: 768,
          desktop: 1024,
          large: 1440,
        },
        domains: [process.env.DOMAIN],
        alias: {
          server: process.env.SERVER_URL
        }
      }
    ],
  ]
})
