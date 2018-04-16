import Vue from 'vue';

import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import centered from '@storybook/addon-centered';
import { withReadme }  from 'storybook-readme';
import README from './README.md';

import PostsPostMarkdown from './';

Vue.component('PostsPostMarkdown', PostsPostMarkdown);

storiesOf('PostsPostMarkdown', module)
  // .addDecorator(centered)
  .add('PostsPostMarkdown', withReadme(README, () => ({
    data () {
      return {
        mdText: '# h1 hahaha'
      }
    },
    methods: {
      log() {
        action('PostsPostMarkdown')();
      },
    },
    template:`
      <v-app>
        <PostsPostMarkdown :markdown-text="mdText" />
      </v-app>
    `
  })));
