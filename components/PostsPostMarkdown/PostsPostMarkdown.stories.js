import Vue from 'vue';

import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import centered from '@storybook/addon-centered'
import { withReadme }  from 'storybook-readme'
import '@storybook/addon-console'
import README from './README.md'
import axios from 'axios'
import convert from 'firebase-firestore-fields'

import PostsPostMarkdown from './'

Vue.component('PostsPostMarkdown', PostsPostMarkdown)

storiesOf('PostsPostMarkdown', module)
  // .addDecorator(centered)
  .add('PostsPostMarkdown', withReadme(README, () => ({
    data () {
      return {
        mdText: ''
      }
    },
    created () {
      this.getPost()
    },
    methods: {
      log() {
        action('PostsPostMarkdown')()
      },
      getPost () {
        axios.get('https://firestore.googleapis.com/v1beta1/projects/nuxt-blog-e0f9a/databases/(default)/documents/posts/Lt9V3OHuzmgy7dAfLQab')
          .then(res => {
            this.mdText = convert(res.data.fields).content
          })
          .catch(e => console.log(e))
      }
    },
    template:(
      pug
      `v-app(dark)
        v-container(fluid)
          PostsPostMarkdown(:markdown-text="$md.render(mdText)") `
    )
  })))
