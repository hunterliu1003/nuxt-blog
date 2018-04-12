import Vue from 'vue';

import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import centered from '@storybook/addon-centered';
import { withReadme }  from 'storybook-readme';
import README from './README.md';

import PostsPostList from './';

Vue.component('PostsPostList', PostsPostList);

storiesOf('PostsPostList', module)
  .addDecorator(centered)
  .add('PostsPostList', withReadme(README, () => ({
    methods: {
      log() {
        action('PostsPostList')();
      },
    },
    template:`
      <v-app>
        <PostsPostList />
      </v-app>
    `
  })));
