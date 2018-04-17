import { configure } from '@storybook/vue'
import { setOptions } from '@storybook/addon-options'
import Vue from 'vue'
import Vuex from 'vuex'
import Vuetify from 'vuetify'
import colors from 'vuetify/es5/util/colors'
import 'babel-polyfill'
import '@/plugins/filters/date'
// import Sortable from 'vue-sortable'
Vue.use(Vuex);
Vue.use(Vuetify, {
  theme: {
    primary: '#121212', // a color that is not in the material colors palette
    accent: colors.grey.darken3,
    secondary: colors.amber.darken3,
    info: colors.teal.lighten1,
    warning: colors.amber,
    error: colors.deepOrange.accent4,
    success: colors.green.accent3
  }
})
// Vue.directive('sortable', {
//   inserted: function (el, binding) {
//     new Sortable(el, binding.value || {})
//   }
// })
Vue.component('nuxt-link', {
  template: `<a><slot></slot></a>`
})

import 'vuetify/dist/vuetify.css'
import '!!style-loader!css-loader!stylus-loader!../assets/stylus/base.styl'

setOptions({
  name: 'ht-storybook',
  url: 'https://github.com/hunterliu1003/ht-storybook',
  addonPanelInRight: true
})

const req = require.context('../components', true, /stories\.js$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)