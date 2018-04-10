import Vue from 'vue';

import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import centered from '@storybook/addon-centered';

import TheTags from './';

Vue.component('TheTags', TheTags);

storiesOf('TheTags', module)
  .addDecorator(centered)
  .add('TheTags', () => ({
    data () {
      return {
        tags: ['tag1', 'tag2', 'tag3']
      }
    },
    methods: {
      log() {
        action('TheTags')();
      },
    },
    template:`
      <div>
        <TheTags v-model="tags"/>
      </div>
    `
  }));
