<template lang="pug">
  v-container
    v-layout.intro(tag="section")
      h1.display-1 Get the latest tech news!
      v-btn(@click="$router.push('/admin')") admin
    PostList(:posts="loadedPosts")
</template>

<script>
export default {
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
  }
}
</script>