<template lang="pug">
  v-card.mt-3.grey.darken-4(tag="article")
    v-card-title.pb-0
      div.post-preview
        h1.display-1.grey--text.text--lighten-2
          nuxt-link.grey--text.text--lighten-2(:to="postLink") {{ title }}
        p.caption {{ lastUpdateTime | date }}
        nuxt-link.ht-post-preview--text(:to="postLink")
          PostsPostMarkdown(:markdownText="$md.render(previewText)")
    v-card-actions.pl-3.pt-0
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
      type: Object,
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
// a
//   margin: 0
</style>
