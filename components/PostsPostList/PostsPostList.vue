<template lang="pug">
  v-flex.post-list(row wrap)
    PostsPostPreview(
      v-for="post in posts"
      :key="post.id"
      :id="post.id"
      :is-admin="isAdmin"
      :title="post.title"
      :lastUpdateTime="post.lastUpdateTime"
      :previewText="post.previewText"
      :tags="post.tags"
    )
</template>

<script>
export default {
  props: {
    isAdmin: {
      type: Boolean,
      default: false
    },
    posts: {
      type: Array,
      required: false
    }
  }
}
</script>

<style lang="stylus" scoped>
.post-list
  width 100%
  max-width 1264px
</style>
