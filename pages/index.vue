<template lang="pug">
  v-container
    v-layout.intro(tag="section")
      h1.display-1 Get the latest tech news!
      v-btn(@click="$router.push('/admin')") admin
    PostList(:posts="loadedPosts")
</template>

<script>
export default {
  computed: {
    loadedPosts () {
      return this.$store.getters.loadedPosts
    }
  }
}
</script>