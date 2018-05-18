import Vue from 'vue';

import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import centered from '@storybook/addon-centered'
import { withReadme }  from 'storybook-readme'
import '@storybook/addon-console'
import README from './README.md'
import axios from 'axios'
import convert from 'firebase-firestore-fields'

import PostsPostPreview from './'


Vue.component('PostsPostPreview', PostsPostPreview);

storiesOf('PostsPostPreview', module)
  // .addDecorator(centered)
  .add('PostsPostPreview', withReadme(README, () => ({
    data () {
      return {
        loadedPost: {
          previewText: ''
        },
        isAdmin: true
      }
    },
    created () {
      this.getPost()
    },
    methods: {
      log() {
        action('PostsPostPreview')();
      },
      getPost () {
        axios.get('https://firestore.googleapis.com/v1beta1/projects/nuxt-blog-e0f9a/databases/(default)/documents/posts/Lt9V3OHuzmgy7dAfLQab')
          .then(res => {
            this.loadedPost = { ...convert(res.data.fields) }
          })
          .catch(e => console.log(e))
      }
    },
    template: (
      pug
      `v-app(dark)
        v-container(fluid)
          PostsPostPreview(
            :id="loadedPost.id"
            :is-admin="isAdmin"
            :title="loadedPost.title"
            :lastUpdateTime="loadedPost.lastUpdateTime"
            :previewText="loadedPost.previewText"
            :tags="loadedPost.tags"
          ) `
    )
  })))
