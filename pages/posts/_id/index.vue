<template lang="pug">
  v-container
    v-layout(tag="section")
      v-flex(xs12)
        h1 {{ loadedPost.title }}
        div
          v-btn(
            small
            v-for="(tag, index) in loadedPost.tags"
            :key="index"
          ) {{ tag }}
        div Last updated on {{ loadedPost.lastUpdateTime | date }}
        div Written by Hunter Liu
        p {{ loadedPost.content }}
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

