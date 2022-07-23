export default {
  server: {
    host: '0.0.0.0',
    port: 7065,
  },
  head: {
    title: 'nuxt-ecommerce',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  css: ['~/assets/scss/main.scss'],

  components: [
    '~/components',
    '~/components/Banner',
    '~/components/Carousel',
    '~/components/Footer',
    '~/components/Form',
    '~/components/Header',
    '~/components/Generic',
  ],

  webfontloader: {
    google: {
      families: ['Roboto:300,400,700&display=swap'],
    },
  },

  plugins: [
    {
      src: '~/plugins/VueSwiper',
      mode: 'client',
    },
    {
      src: '~/plugins/VueMask',
    },
  ],

  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module',
    'nuxt-purgecss',
  ],

  modules: ['@nuxtjs/axios', '@nuxtjs/pwa', 'nuxt-webfontloader'],

  purgeCSS: {
    paths: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'mixins/**/*.js',
      'store/**/*.js',
      'assets/**/*.scss',
      'assets/**/*.css',
    ],
    extractors: () => [
      {
        extractor(content) {
          return content.match(/[A-z0-9-:\\/]+/g)
        },
        extensions: ['html', 'vue', 'js'],
      },
      {
        extractor(content) {
          return content.match(/[A-z0-9-\\/]+/g)
        },
        extensions: ['vue'],
      },
    ],
    whitelistPatternsChildren: [/swiper/],
    whitelist: [/swiper/],
    whitelistPatterns: [/swiper/],
  },

  axios: {
    baseURL: process.env.API,
    headers: {
      common: {
        Accept: 'application/json',
      },
    },
  },

  pwa: {
    manifest: {
      name: 'ecommerce',
      short_name: 'ecommerce',
      lang: 'pt-br',
      description: 'ecommerce',
      useWebmanifestExtension: false,
      theme_color: '#000000',
      background_color: '#000000',
    },
    meta: {
      title: 'ecommerce',
      lang: 'pt-br',
      description: 'ecommerce',
    },
    icon: {
      fileName: 'icon.png',
      size: [64, 120, 144, 152, 192, 384, 512],
    },
  },

  build: {
    extractCSS: true,
  },
}
