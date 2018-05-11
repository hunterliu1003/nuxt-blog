import Vue from 'vue';

import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import centered from '@storybook/addon-centered';
import { withReadme }  from 'storybook-readme';
import README from './README.md';
import axios from 'axios'

import PostsPostMarkdown from './';

Vue.component('PostsPostMarkdown', PostsPostMarkdown);

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
        action('PostsPostMarkdown')();
      },
      getPost () {
        axios.get('https://nuxt-blog-e0f9a.firebaseio.com/posts.json?orderBy="postTime"&limitToLast=1')
          .then(res => {
            for (const key in res.data) {
              this.mdText = res.data[key].content
            }
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
  })));
