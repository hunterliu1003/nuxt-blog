import Vue from 'vue';

import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import centered from '@storybook/addon-centered';
import { withReadme }  from 'storybook-readme';
import README from './README.md';

import PostsPostPreview from './';

Vue.component('PostsPostPreview', PostsPostPreview);

storiesOf('PostsPostPreview', module)
  // .addDecorator(centered)
  .add('PostsPostPreview', withReadme(README, () => ({
    methods: {
      log() {
        action('PostsPostPreview')();
      },
    },
    template:`
      <v-app>
        <PostsPostPreview />
      </v-app>
    `
  })));
