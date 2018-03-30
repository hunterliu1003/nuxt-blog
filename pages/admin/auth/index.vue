<template lang="pug">
  v-container
    v-form
      v-text-field(
        label="Email"
        v-model="email"
        required
      )
      v-text-field(
        label="Password"
        v-model="password"
        required
      )
      v-btn(@click="submit") submit
</template>

<script>
export default {
  layout: 'admin',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    submit () {
      console.log('login')
    }
  }
}
</script>
