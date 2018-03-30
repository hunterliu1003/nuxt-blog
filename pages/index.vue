<template lang="pug">
  v-container
    v-layout.intro(tag="section")
      h1.display-1 Get the latest tech news!
    PostList(:posts="loadedPosts")
</template>

<script>
import PostList from '@/components/Posts/PostList'
export default {
  components: {
    PostList
  },
  asyncData (context, callback) {
    console.log(context)
    setTimeout(() => {
      callback(null, {
        loadedPosts: [
          {
            id: '1',
            title: 'first',
            lastUpdateTime: '22 Mar 2018',
            previewText: 'first Preview Text!',
            tags: ['tag1', 'tag2', 'tag3', 'tag4']
          },
          {
            id: '2',
            title: 'second',
            lastUpdateTime: '22 Mar 2018',
            previewText: 'second Preview Text!',
            tags: ['tag5', 'tag2', 'tag3', 'tag4']
          },
        ]
      })
    }, 1500)
  }
}
</script>