<template lang="pug">
  v-container
    v-layout(tag="section")
      v-flex(xs12)
        h1 {{ loadedPosts.title }}
        div
          v-btn(
            small
            v-for="tag in loadedPosts.tags"
            :key="tag"
          ) {{ tag }}
        div Last updated on {{ loadedPosts.lastUpdateTime }}
        div Written by Hunter Liu
        p {{ loadedPosts.content }}
</template>

<script>
export default {
  asyncData(context, callback) {
    setTimeout(() => {
      callback(null, {
        loadedPosts: {
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

