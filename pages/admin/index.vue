<template lang="pug">
  v-container
    v-layout.intro(tag="section")
      v-btn(@click="$router.push('/admin/new-post')") Create Post
    v-layout.intro(tag="section")
      h1.display-1 Existing Posts
    PostList(isAdmin :posts="loadedPosts")
</template>


<script>
export default {
  layout: 'admin',
  computed: {
    loadedPosts () {
      return this.$store.getters.loadedPosts
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
