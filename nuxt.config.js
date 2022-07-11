export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'BRQ Vagas - Venha ser fera com a gente!',
    htmlAttrs: {
      lang: 'pt-BR',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/axios',
    '~/plugins/vuex-init.client.js',
    '~/plugins/vuemask.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/google-fonts',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    '@nuxtjs/toast',
    'cookie-universal-nuxt'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: 'https://atend.workfacilit.com/app/prod/api/demandas',
  },

  auth: {
    strategies: {
      local: {
        token: {
          property: 'token',
          global: true,
          type: 'Basic'
        },
        user: {
          property: 'user',
        },
        endpoints: {
          login: { url: '/brqv/signin', method: 'post' },
          logout: false,
          user: { url: '/brqv/signin', method: 'post' }
        }
      }
    }
  },

  toast: {
    duration: 2000,
    position: "bottom-right",
    closeOnClick: false
  },

  bootstrapVue: {
    icons: true
  },

  googleFonts: {
    families: {
      Roboto: true,
      'Josefin+Sans': true,
      Lato: [100, 300],
      Raleway: {
        wght: [100, 400],
        ital: [100]
      },
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
