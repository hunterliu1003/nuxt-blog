import Vue from 'vue'

import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import centered from '@storybook/addon-centered'
import { withReadme }  from 'storybook-readme'
import '@storybook/addon-console'
import README from './README.md'

import TheInputTags from './'

Vue.component('TheInputTags', TheInputTags)

storiesOf('TheInputTags', module)
  // .addDecorator(centered)
  .add('TheInputTags disabled', withReadme(README, () => ({
    data () {
      return {
        tags: ['tag1', 'tag2', 'tag3']
      }
    },
    methods: {
      log() {
        action('TheInputTags')()
      },
    },
    template:`
      <v-app dark>
        <v-container fluid>
          <TheInputTags v-model="tags" disabled />
        </v-container>
      </v-app>
    `
  })))
  .add('TheInputTags', withReadme(README, () => ({
    data () {
      return {
        tags: ['tag1', 'tag2', 'tag3']
      }
    },
    methods: {
      log() {
        action('TheInputTags')()
      },
    },
    template:`
      <v-app dark>
        <v-container fluid>
          <TheInputTags v-model="tags" />
        </v-container>
      </v-app>
    `
  })))
