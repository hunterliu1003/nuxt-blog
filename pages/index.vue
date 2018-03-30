<template lang="pug">
  v-container
    v-layout.intro(tag="section")
      h1.display-1 Get the latest tech news!
    v-layout.feateured-posts(tag="section" row wrap)
      PostPreview(
        id="123"
        title="Unlimited music now"
        lastUpdateTime="26 Mar 2018"
        previewText="Listen to your favorite artists and albums whenever and wherever, online and offline."
        :tags="tags"
      )

</template>

<script>
import PostPreview from '@/components/Posts/PostPreview'
export default {
  components: {
    PostPreview
  },
  data () {
    return {
      tags: ['tag1', 'tag2', 'tag3', 'tag4']
    }
  }
}
</script>

// <style lang="stylus" scoped>
// a
//   margin: 0
// </style>
