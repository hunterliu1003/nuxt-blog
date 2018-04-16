<template lang="pug">
  v-card.white--text.mt-3(tag="article" color="cyan darken-2")
    v-card-title
      div
        h1.headline
          nuxt-link(:to="postLink" class="white--text") {{ title }}
        div.mt-2 {{ lastUpdateTime | date }}
        p
          nuxt-link(:to="postLink" class="white--text") {{ title }}{{ previewText }}
    v-card-actions
      TheInputTags(v-model="tags" disabled)
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true
    },
    isAdmin: {
      type: Boolean,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    lastUpdateTime: {
      type: Number,
      required: true
    },
    previewText: {
      type: String,
      required: true
    },
    tags: {
      type: [Array, String],
      required: true
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
a
  margin: 0
</style>
