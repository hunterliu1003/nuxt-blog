import Vue from 'vue';

import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import centered from '@storybook/addon-centered';
import { withReadme }  from 'storybook-readme';
import README from './README.md';
import axios from 'axios'

import PostsPostPreview from './';

Vue.component('PostsPostPreview', PostsPostPreview);

storiesOf('PostsPostPreview', module)
  // .addDecorator(centered)
  .add('PostsPostPreview', withReadme(README, () => ({
    data () {
      return {
        loadedPost: {},
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
        axios.get('https://nuxt-blog-e0f9a.firebaseio.com/posts.json?orderBy="postTime"&limitToLast=1')
          .then(res => {
            for (const key in res.data) {
              this.loadedPost = { ...res.data[key], id: key }
            }
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
  })));
