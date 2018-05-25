import Vue from 'vue'

import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import centered from '@storybook/addon-centered'
import { withReadme }  from 'storybook-readme'
import '@storybook/addon-console'
import README from './README.md'

import AdminPostForm from './'

Vue.component('AdminPostForm', AdminPostForm)

storiesOf('AdminPostForm', module)
  // .addDecorator(centered)
  .add('AdminPostForm', withReadme(README, () => ({
    methods: {
      log(data) {
        action('AdminPostForm')(data)
      },
    },
    template: (
      pug
      `v-app(dark)
        v-container(fluid)
          AdminPostForm(
            @submit="log"
            @cancel="log('cancel')"
          ) `
    )
  })))
