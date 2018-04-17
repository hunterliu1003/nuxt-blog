<template lang="pug">
  v-container
    v-layout.intro(justify-center)
      v-btn(@click="$router.push('/admin/new-post')") Create Post
      v-btn(@click="$router.push('/')") home
      v-btn(@click="onLogout") logout
    v-layout.intro(tag="section" column align-center mt-3)
      h1.display-1 Existing Posts
      PostsPostList(isAdmin :posts="$store.getters.posts")
</template>

<script>
export default {
  layout: 'admin',
  middleware: ['check-auth', 'auth'],
  async fetch ({ store, params }) {
    await store.dispatch('setPosts')
  },
  methods: {
    onLogout () {
      this.$store.dispatch('logout')
      this.$router.push('/admin/auth')
    }
  }
}
</script>