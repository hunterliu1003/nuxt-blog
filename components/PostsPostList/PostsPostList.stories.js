import Vue from 'vue'

import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import centered from '@storybook/addon-centered'
import { withReadme }  from 'storybook-readme'
import README from './README.md'
import axios from 'axios'

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
        axios.get('https://nuxt-blog-e0f9a.firebaseio.com/posts.json')
          .then(res => {
            const postsArray = []
            for (const key in res.data) {
              postsArray.push({ ...res.data[key], id: key })
            }
            this.loadedPosts = postsArray
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
