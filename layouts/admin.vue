<template lang="pug">
  v-app(dark)
    v-toolbar(fixed)
      nuxt-link.title(nuxt to="/") Hunterliu
      v-spacer
      v-btn(icon nuxt to="/admin/new-post")
        v-icon fas fa-plus
      v-btn(icon @click="onLogout")
        v-icon fas fa-sign-out-alt
    nuxt.default-layout.mt-5
</template>

<script>
import * as firebase from 'firebase'
export default {
  beforeCreate () {
    this.$store.dispatch('initAuth')
      .then(user => {
        if (!user) {
          this.$router.push('/admin/auth')
        }
      })
  },
  methods: {
    onLogout () {
      this.$store.dispatch('logout')
      this.$router.push('/admin/auth')
    }
  }
}
</script>

<style lang="stylus" scoped>
.title
  color #fff
  &:hover
    text-decoration none
</style>
