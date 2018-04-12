<template lang="pug">
  v-flex(tag="article" xs12 md10 lg8 offset-md1 mt-3)
    v-card.white--text(color="cyan darken-2")
      v-card-title(primary-title)
        div
          h1.headline
            nuxt-link(:to="postLink" class="white--text") {{ title }}
          div.mt-2 {{ lastUpdateTime | date }}
          p
            nuxt-link(:to="postLink" class="white--text") {{ title }}{{ previewText }}
      v-card-actions
        div
          nuxt-link(
            :to="postLink"
            class="white--text"
            small
            v-for="(tag, index) in tags"
            :key="index"
          ) {{ tag }}
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
