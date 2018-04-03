<template lang="pug">
  v-container
    v-layout.intro(tag="section")
      v-btn(@click="$router.push('/admin/new-post')") Create Post
      v-btn(@click="$router.push('/')") home
      v-btn(@click="onLogout") logout
    v-layout.intro(tag="section")
      h1.display-1 Existing Posts
    PostList(isAdmin :posts="loadedPosts")
</template>


<script>
export default {
  layout: 'admin',
  middleware: ['check-auth', 'auth'],
  computed: {
    loadedPosts () {
      return this.$store.getters.loadedPosts
    }
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

</style>
