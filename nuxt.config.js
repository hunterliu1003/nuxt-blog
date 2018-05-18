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
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' }
    ],
    script: [
      { src: 'https://use.fontawesome.com/releases/v5.0.6/js/all.js' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#41B883' },

  /*
  ** Global CSS
  */
  css: [
    // '~assets/stylus/reset.styl',
    '~assets/stylus/base.styl',
    'vuetify/src/stylus/main.styl',
    'highlight.js/styles/default.css',
    'highlight.js/styles/monokai-sublime.css',
    'codemirror/lib/codemirror.css',
    'codemirror/theme/monokai.css',
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/core-components.js',
    '@/plugins/vuetify',
    '@/plugins/filters/date.js',
    { src: '@/plugins/nuxt-codemirror-plugin.js', ssr: false },
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/markdownit'
  ],

  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    credentials: false
  },

  /*
  ** markdownit module configuration
  */
  markdownit: {
    // See https://github.com/nuxt-community/modules/tree/master/packages/markdownit
    html: true,
    linkify: true,
    typographer: true,
    langPrefix: 'language-',
    injected: true, // use this.$md.render
    use: [
      'markdown-it-attrs',
      'markdown-it-highlightjs',
      'markdown-it-playground',
    ]
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
    fbUrl: 'https://nuxt-blog-e0f9a.firebaseio.com/',
    fsUrl: 'https://firestore.googleapis.com/v1beta1/projects/nuxt-blog-e0f9a/databases/(default)/documents/'
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