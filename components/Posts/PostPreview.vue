<template lang="pug">
  v-flex(tag="article" xs12 mt-3)
    v-card.white--text(color="cyan darken-2")
      v-card-title(primary-title)
        div
          h1.headline {{ title }}
          div {{ lastUpdateTime | date }}
          p {{ previewText }}
      v-card-actions
        div
          v-btn(
            small
            v-for="(tag, index) in tags"
            :key="index"
          ) {{ tag }}
        v-spacer
        nuxt-link(:to="postLink")
          v-btn 閱讀全文
</template>

<script>
export default {
  name: 'PostPreview',
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
      type: String,
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
