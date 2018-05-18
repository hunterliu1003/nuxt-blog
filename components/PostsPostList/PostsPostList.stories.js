import Vue from 'vue'

import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import centered from '@storybook/addon-centered'
import { withReadme }  from 'storybook-readme'
import '@storybook/addon-console'
import README from './README.md'
import axios from 'axios'
import convert from 'firebase-firestore-fields'

import PostsPostList from './'

Vue.component('PostsPostList', PostsPostList)

storiesOf('PostsPostList', module)
  // .addDecorator(centered)
  .add('PostsPostList', withReadme(README, () => ({
    data () {
      return {
        loadedPosts: []
      }
    },
    created () {
      this.getPosts()
    },
    methods: {
      log() {
        action('PostsPostList')()
      },
      getPosts () {
        axios.get('https://firestore.googleapis.com/v1beta1/projects/nuxt-blog-e0f9a/databases/(default)/documents/posts')
          .then(res => {
            const posts = res.data.documents
            this.loadedPosts = posts.map(post => {
              return { ...convert(post.fields) }
            })
          })
          .catch(e => console.log(e))
      }
    },
    template: (
      pug
      `v-app(dark)
        v-container(fluid)
          PostsPostList(:posts="loadedPosts") `
    )
  })))
