import Vue from 'vue';

import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import centered from '@storybook/addon-centered';
import { withReadme }  from 'storybook-readme';
import README from './README.md';

import AdminPostForm from './';

Vue.component('AdminPostForm', AdminPostForm);

storiesOf('AdminPostForm', module)
  // .addDecorator(centered)
  .add('AdminPostForm', withReadme(README, () => ({
    methods: {
      log() {
        action('AdminPostForm')();
      },
    },
    template: (
      pug
      `v-app(dark)
        v-container(fluid)
          AdminPostForm`
    )

  })));
