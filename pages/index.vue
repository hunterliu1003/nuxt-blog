<template lang="pug">
  v-container(fluid)
    v-layout.intro(wrap)
      v-flex
        h1.display-1 Get the latest tech news!
        v-btn(@click="$router.push('/admin')") admin
      PostsPostList(:posts="$store.getters.posts")
</template>

<script>
export default {
  async fetch ({ store, params }) {
    await store.dispatch('setPosts')
  }
}
</script>