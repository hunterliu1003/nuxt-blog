<template lang="pug">
  v-container
    v-layout.intro(tag="section")
      h1.display-1 Get the latest tech news!
    PostList(:posts="loadedPosts")
</template>

<script>
import PostList from '@/components/Posts/PostList'
export default {
  components: {
    PostList
  },
  computed: {
    loadedPosts () {
      return this.$store.getters.loadedPosts
    }
  }
}
</script>