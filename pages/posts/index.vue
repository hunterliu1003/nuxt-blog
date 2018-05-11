<template lang="pug">
  v-container(fluid)
    v-layout(tag="section" column)
      h1.display-1 Get the latest tech news!
      PostsPostList(:posts="$store.getters.posts")
</template>

<script>
export default {
  async fetch ({ store, params }) {
    await store.dispatch('setPosts')
  }
}
</script>

