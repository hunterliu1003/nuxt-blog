import Vue from 'vue'

import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import centered from '@storybook/addon-centered'
import { withReadme }  from 'storybook-readme'
import README from './README.md'

import TheTextField from './'

Vue.component('TheTextField', TheTextField)

storiesOf('TheTextField', module)
  //.addDecorator(centered)
  .add('TheTextField', withReadme(README, () => ({
    data () {
      return {
        inputText: 'haha',
        validForm: false,
        rules: {
          required: value => !!value || 'Required.',
          email: value => {
            const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return pattern.test(value) || 'Invalid e-mail.'
          }
        }
      }
    },
    watch: {
      inputText () {
        this.log(this.inputText)
      }
    },
    methods: {
      log(value) {
        action('TheTextField changed')(value)
      },
      setValid (valid) {
        this.validForm = valid
      }
    },
    template: (
      pug
      `v-app
        v-container(fluid)
          TheTextField(
            v-model="inputText"
            :rules="[rules.required, rules.email]"
            @valid="setValid"
          )
            div(slot-scope="{ error, valid }")
              p.red--text {{ error }}
              p.red--text {{ valid }} `
    )
  })))
