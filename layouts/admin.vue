<template lang="pug">
  v-app(dark)
    v-content.default-layout
      nuxt
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
  }
}
</script>


<style lang="stylus">

</style>
