<template lang="pug">
  v-layout.feateured-posts(tag="section" row wrap mt-5)
    PostPreview(
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
import PostsPostPreview from '@/components/PostsPostPreview'
export default {
  components: {
    PostsPostPreview
  },
  props: {
    isAdmin: {
      type: Boolean,
      default: false
    },
    posts: {
      type: Array,
      required: true
    }
  }
}
</script>