<template lang="pug">
  v-container(fluid)
    v-layout(tag="section" column)
      h1.display-1 Get the latest tech news!
      ul
        li(
          v-for="(val, tag) in $store.getters.allTags"
        )
          nuxt-link(:to="`tags/${tag}`") {{ tag }} ({{ val }})
</template>

<script>
export default {
  async fetch ({ store }) {
    await store.dispatch('setAllTags')
  }
}
</script>

<style lang="stylus" scoped>
@import '~vuetify/src/stylus/app'

a
  color: $light-blue.darken-1
  &:hover
    color: $light-blue.lighten-2
</style>