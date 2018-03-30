<template lang="pug">
  v-layout.feateured-posts(tag="section" row wrap)
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
import PostPreview from '@/components/Posts/PostPreview'
export default {
  components: {
    PostPreview
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