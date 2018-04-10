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
      v-btn(@click="onSubmit") {{ isLogin ? 'Login' : 'Sign Up' }}
      v-btn(@click="isLogin = !isLogin") Switch to {{ isLogin ? 'Signup' : 'Login' }}
      v-btn(@click="logout") logout
</template>

<script>
export default {
  layout: 'admin',
  data () {
    return {
      isLogin: true,
      email: '',
      password: '',
    }
  },
  methods: {
    onSubmit () {
      this.$store.dispatch('authenticateUser', {
        isLogin: this.isLogin,
        email: this.email,
        password: this.password
      })
      .then(() => {
        this.$router.push('/admin')
      })
    },
    logout () {
      this.$store.dispatch('logout')
    }
  }
}
</script>
