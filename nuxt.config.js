const pkg = require('./package')
const axios = require('axios')

const nodeExternals = require('webpack-node-externals')

const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  router: {
    base: '/nuxt-blog/'
  }
} : {}

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: 'Hunterliu Blog',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' },
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fa923f' },

  /*
  ** Global CSS
  */
  css: [
    // '~assets/stylus/reset.styl',
    'vuetify/src/stylus/main.styl'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/core-components.js',
    '@/plugins/vuetify',
    '~/plugins/filters/date.js'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios'
  ],

  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    baseURL: process.env.BASE_URL || 'https://nuxt-blog-e0f9a.firebaseio.com',
    credentials: false
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
      if (ctx.isServer) {
        config.externals = [
          nodeExternals({
            whitelist: [/^vuetify/]
          })
        ]
      }
    }
  },
  env: {
    baseUrl: process.env.BASE_URL || 'https://nuxt-blog-e0f9a.firebaseio.com',
    fbAPIKey: 'AIzaSyCCy2wRcWuSyZuc_49UUnmsiSkf9kjw1jA'
  },
  ...routerBase,
  generate: {
    dir: (process.env.DEPLOY_ENV === 'GH_PAGES') ? 'nuxt-blog' : 'dist',
    routes: function () {
      return axios.get('https://nuxt-blog-e0f9a.firebaseio.com/posts.json')
        .then(res => {
          const routes = []
          for (const key in res.data) {
            routes.push({
              route: '/posts/' + key,
              payload: {postData: res.data[key]}
            })
          }
          const postsArray = []
          for (const key in res.data) {
            postsArray.push({ ...res.data[key], id: key })
          }
          return routes
        })
    }
  }
}