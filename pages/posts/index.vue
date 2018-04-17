<template lang="pug">
  v-container
    v-layout.intro(tag="section")
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

