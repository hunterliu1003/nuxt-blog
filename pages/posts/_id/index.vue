<template lang="pug">
  v-container(fluid)
    v-layout(tag="section")
      v-flex.post-list(xs12)
        h1.display-2.grey--text.text--lighten-2 {{ loadedPost.title }}
        div.title.grey--text.text--lighten-2.mt-2 {{ loadedPost.postTime | date }}
        TheInputTags(v-model="loadedPost.tags" disabled)
        PostsPostMarkdown(:markdown-text="$md.render(loadedPost.content)")
</template>

<script>
export default {
  head () {
    return {
      title: this.loadedPost.title + ' | Hunter Liu',
      meta: [
        { hid: 'description', name: 'description', content: this.loadedPost.previewText }
      ]
    }
  },
  asyncData(context) {
    if (context.payload) {
      return {
        loadedPost: context.payload.postData
      }
    }
    return context.app.$axios.$get(
        '/posts/' +
        context.params.id +
        '.json')
      .then(data => {
        return {
          loadedPost: data
        }
      })
      .catch(e => context.error())
  }
}
</script>

<style lang="stylus" scoped>
.post-list
  width 100%
  max-width 1264px
</style>

