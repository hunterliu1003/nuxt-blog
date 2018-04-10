<template lang="pug">
  v-container
    v-layout.intro(tag="section")
      h1.display-1 Get the latest tech news!
    PostList(:posts="$store.getters.posts")
</template>

<script>
export default {
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
  }
}
</script>

