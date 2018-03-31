<template lang="pug">
  v-container
    v-layout(tag="section")
      v-flex(xs12)
        h1 {{ loadedPost.title }}
        div
          v-btn(
            small
            v-for="tag in loadedPost.tags"
            :key="tag"
          ) {{ tag }}
        div Last updated on {{ loadedPost.lastUpdateTime }}
        div Written by Hunter Liu
        p {{ loadedPost.content }}
</template>

<script>
import axios from 'axios'
export default {
  asyncData(context) {
    return axios.get(
      'https://nuxt-blog-e0f9a.firebaseio.com/posts/' +
        context.params.id +
        '.json')
      .then(res => {
        return {
          loadedPost: res.data
        }
      })
      .catch(e => context.error())
  }
}
</script>

