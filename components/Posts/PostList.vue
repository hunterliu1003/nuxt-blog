<template lang="pug">
  v-layout.feateured-posts(tag="section" row wrap)
    PostPreview(
      id="123"
      :is-admin="isAdmin"
      title="Unlimited music no1w"
      lastUpdateTime="26 Mar 2018"
      previewText="Listen to your favorite artists and albums whenever and wherever, online and offline."
      :tags="tags"
    )
    PostPreview(
      id="123444"
      :is-admin="isAdmin"
      title="Unlimited music now2"
      lastUpdateTime="26 Mar 2018"
      previewText="Listen to your favorite artists and albums whenever and wherever, online and offline."
      :tags="tags"
    )
    PostPreview(
      id="123222"
      :is-admin="isAdmin"
      title="Unlimited music now3"
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
  props: {
    isAdmin: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      tags: ['tag1', 'tag2', 'tag3', 'tag4']
    }
  }
}
</script>