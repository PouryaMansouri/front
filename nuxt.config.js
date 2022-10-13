export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'server',
  server: {
    port: '8324'
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'front',
    titleTemplate: 'Sarar Market - %s',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    link: [
      // { rel: "icon", type: "image/png", href: "/images/icons/favicon.png" },
      { rel: "preload", href: "/fonts/riode.ttf?5gap68", as: "font", type: "font/woff2", crossorigin: "anonymous" },
      {
        rel: "preload", href: "/vendor/fontawesome-free/webfonts/fa-solid-900.woff2", as: "font", type: "font/woff2",
        crossorigin: "anonymous"
      },
      {
        rel: "preload", href: "/vendor/fontawesome-free/webfonts/fa-brands-400.woff2", as: "font", type: "font/woff2",
        crossorigin: "anonymous"
      },
      // { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: "stylesheet", type: "text/css", href: "/vendor/fontawesome-free/css/all.min.css" },
      { rel: "stylesheet", type: "text/css", href: "/vendor/animate/animate.min.css" },
      { rel: "stylesheet", type: "text/css", href: "/vendor/magnific-popup/magnific-popup.min.css" },
      { rel: "stylesheet", type: "text/css", href: "/vendor/owl-carousel/owl.carousel.min.css" },
      { rel: "stylesheet", type: "text/css", href: "/vendor/sticky-icon/stickyicon.css" },
      { rel: "stylesheet", type: "text/css", href: "/css/demo2.min.css" },
      { rel: "stylesheet", type: "text/css", href: "/css/style.min.css" },
      { rel: "stylesheet", type: "text/css", href: "/vendor/photoswipe/photoswipe.min.css" },
      { rel: "stylesheet", type: "text/css", href: "/vendor/photoswipe/default-skin/default-skin.min.css" },
      { rel: "stylesheet", type: "text/css", href: "/vendor/nouislider/nouislider.min.css" },
      { rel: "stylesheet", type: "text/css", href: "/css/market1.min.css" }
    ],
    script: [
      {
        src: "/vendor/jquery/jquery.min.js",
        body: true
      },
      {
        src: "/vendor/imagesloaded/imagesloaded.pkgd.min.js",
        body: true
      },
      {
        src: "/vendor/magnific-popup/jquery.magnific-popup.min.js",
        body: true
      },
      {
        src: "/js/main.min.js",
        body: true
      },
      {
        src: "/vendor/isotope/isotope.pkgd.min.js",
        body: true
      },
      {
        src: "/vendor/skrollr/skrollr.min.js",
        body: true
      },
      {
        src: "/vendor/owl-carousel/owl.carousel.min.js",
        body: true
      },
      {
        src: "/vendor/photoswipe/photoswipe.min.js",
        body: true
      },
      {
        src: "/vendor/compare/compare.min.js",
        body: true
      },
      {
        src: "/vendor/photoswipe/photoswipe-ui-default.min.js",
        body: true
      },
      {
        src: "/vendor/sticky/sticky.min.js",
        body: true
      },
      {
        src: "/vendor/nouislider/nouislider.min.js",
        body: true
      },
      {
        src: "/vendor/jquery.plugin/jquery.plugin.min.js",
        body: true
      },
      {
        src: "/vendor/jquery.countdown/jquery.countdown.min.js",
        body: true
      },
      {
        src: "/vendor/elevatezoom/jquery.elevatezoom.min.js",
        body: true
      },
      {
        src: "/vendor/parallax/parallax.min.js",
        body: true
      },
    ]
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // '~/plugins/auth-vuex-persistedstate',
    // '~/plugins/cart-vuex-persistedstate',
    // '~/plugins/axios',
    { src: '~/plugins/vue-avatar-cropper', ssr: false },
    { src: '~/plugins/vue-tour', ssr: false },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // 'cookie-universal-nuxt',
    '@nuxtjs/toast',
    '@nuxtjs/auth-next',
    'cookie-universal-nuxt',
  ],


  auth: {
    token: {
      prefix: '_token.',
      global: true,
    },
    redirect: {
      login: '/auth',
      logout: '/',
      callback: '/auth',
      home: '/'
    },
    strategies: {
      local: {
        cookie: {
          prefix: 'auth.',
          options: { 
            path: '/',
            domain: 'crmkashefan.com'
          }
        },
        scheme: 'refresh',
        token: {
          property: 'access',
          maxAge: 60 * 60 * 24 * 30,
          global: true,
          // type: 'Bearer'
        },
        refreshToken: {
          property: 'refresh',
          data: 'refresh',
          maxAge: 60 * 60 * 24 * 30
        },
        user: {
          property: 'user',
          // autoFetch: true
        },
        endpoints: {
          login: { url: 'accounts/login/', method: 'post' },
          refresh: { url: 'accounts/auth/token/refresh/', method: 'post' },
          user: { url: 'accounts/profile/detail/', method: 'get' },
          logout: { url: '/api/auth/logout', method: 'post' }
        },
        // autoLogout: false
      }
    }
  },

  toast: {
    position: 'top-center',
    register: [
      {
        name: 'my-error',
        message: 'Oops...Something went wrong',
        options: {
          type: 'error',
          duration: 5000
        }
      }
    ]
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: process.env.BASE_URL || 'http://crmkashefan.com/api/',
    // baseURL: 'http://sarar-mansouri.fandogh.cloud/api/',
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
}
