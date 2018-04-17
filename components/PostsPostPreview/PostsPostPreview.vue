<template lang="pug">
  v-card.white--text.mt-3(tag="article" color="cyan darken-2")
    v-card-title
      div.post-preview
        h1.display-1
          nuxt-link(:to="postLink" class="white--text") {{ title }}
        p.caption {{ lastUpdateTime | date }}
        nuxt-link(:to="postLink" class="white--text")
          PostsPostMarkdown(:markdownText="previewText")
    v-card-actions
      TheInputTags(v-model="tags" disabled)
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: false
    },
    isAdmin: {
      type: Boolean,
      required: false
    },
    title: {
      type: String,
      required: false
    },
    lastUpdateTime: {
      type: Number,
      required: false
    },
    previewText: {
      type: String,
      required: false
    },
    tags: {
      type: [Array, String],
      required: false
    }
  },
  computed: {
    postLink () {
      return this.isAdmin ? '/admin/' + this.id : '/posts/' + this.id
    }
  }
}
</script>


<style lang="stylus" scoped>
.post-preview
  width 100%
a
  margin: 0
</style>
