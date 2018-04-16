<template lang="pug">
  v-container(fluid)
    v-layout.intro(tag="section" column)
      v-flex(row)
        h1.display-1 Get the latest tech news!
        v-btn(@click="$router.push('/admin')") admin
      PostsPostList(:posts="$store.getters.posts")
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