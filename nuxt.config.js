import colors from 'vuetify/es5/util/colors'

export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    htmlAttrs: {
      lang: 'en'
    },
    titleTemplate: '%s - Pepper',
    title: 'Pepper',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, minimum-scale=1' },
      { hid: 'description', name: 'description', content: 'Pepper' },
      { name:"theme-color", content:"#6534FF"}
    ],
    link: [
      { rel:"apple-touch-icon", href:"/example.png"},
      { href:"https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap", rel:"stylesheet", media:"print", onload:"this.media='all'"},
      { href:"https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@200;300;400;600;700;900&display=swap", rel:"stylesheet",  media:"print", onload:"this.media='all'"},
      { href:"https://fonts.gstatic.com", crossorigin:"anonymous", media:"print", onload:"this.media='all'"},
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico', media:"print", onload:"this.media='all'" },
      { href:"hover-min.css", rel:"stylesheet", media:"print", onload:"this.media='all'"},
      { rel:"stylesheet" ,href:"https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css", media:"print", onload:"this.media='all'"}
    ],
    script:[
      { src:"https://use.fontawesome.com/f4e7411ff2.js"},
      { src:'mixitup.min.js' ,body:true},
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Vuetify module configuration (https://go.nuxtjs.dev/config-vuetify)
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
