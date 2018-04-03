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
  asyncData(context) {
    if (context.payload) {
      return {
        loadedPosts: context.payload.postData
      }
    }
    return context.app.$axios.$get('/posts.json')
      .then(data => {
        const postsArray = []
        for (const key in data) {
          postsArray.push({ ...data[key], id: key })
        }
        return {
          loadedPosts: postsArray
        }
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

<style lang="stylus" scoped>

</style>
