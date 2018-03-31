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
export default {
  asyncData(context, callback) {
    setTimeout(() => {
      callback(null, {
        loadedPost: {
          id: '1',
          title: 'First Post (ID: ' + context.params.id + ')',
          lastUpdateTime: '22 Mar 2018',
          previewText: 'first Preview Text!',
          content: 'first Preview Text!first Preview Text!first Preview Text!first Preview Text!first Preview Text!first Preview Text!first Preview Text!',
          tags: ['tag1', 'tag2', 'tag3', 'tag4']
        }
      })
    }, 1500)
  }
}
</script>

