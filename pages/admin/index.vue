<template lang="pug">
  v-container
    v-layout.intro
      v-flex()
        v-btn(@click="$router.push('/admin/new-post')") Create Post
        v-btn(@click="$router.push('/')") home
        v-btn(@click="onLogout") logout
    v-layout.intro(tag="section" column)
      v-flex()
        h1.display-1 Existing Posts
      PostsPostList(isAdmin :posts="$store.getters.posts")
</template>

<script>
export default {
  layout: 'admin',
  middleware: ['check-auth', 'auth'],
  fetch (context) {
    if (context.store.state.loadedPosts.length !== 0) return
    return context.app.$axios.$get('/posts.json')
      .then(data => {
        const postsArray = []
        for (const key in data) {
          postsArray.push({ ...data[key], id: key })
        }
        context.store.dispatch('setPosts', postsArray)
      })
      .catch(e => context.error())
  },
  methods: {
    onLogout () {
      this.$store.dispatch('logout')
      this.$router.push('/admin/auth')
    }
  }
}
</script>