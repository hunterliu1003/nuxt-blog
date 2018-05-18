<template lang="pug">
  v-content
    v-container
      v-layout.intro(tag="section" column align-center mt-5)
        h1.display-1 Existing Posts
        PostsPostList(isAdmin :posts="$store.getters.posts")
    v-btn(
      small
      fab
      fixed
      bottom
      right
      nuxt
      to="/admin/new-post"
    )
      v-icon fas fa-plus
</template>

<script>
export default {
  layout: 'admin',
  async fetch ({ store, params }) {
    await store.dispatch('setAdminPosts')
  }
}
</script>