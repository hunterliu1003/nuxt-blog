<template lang="pug">
  v-flex(tag="article" xs12 mt-3)
    v-card.white--text(color="cyan darken-2")
      v-card-title(primary-title)
        div
          h1.headline {{ title }}
          div {{ lastUpdateTime }} 26 Mar 2018
          p {{ previewText }}
      v-card-actions
        div
          v-btn(small v-for="tag in tags") {{ tag }}
        v-spacer
        nuxt-link(:to="'/posts/' + 1")
          v-btn(:to="'/posts/' + 1") 閱讀全文
</template>

<script>
export default {
  name: 'PostPreview',
  props: {
    id: {
      type: String,
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
      type: Array,
      required: true
    }
  }
}
</script>


<style lang="stylus" scoped>
a
  margin: 0
</style>
