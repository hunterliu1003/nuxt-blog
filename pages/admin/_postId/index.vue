<template lang="pug">
  v-container
    AdminPostForm(:post="loadedPost" @submit="onSubmitted")
</template>

<script>
import axios from 'axios'
import AdminPostForm from '@/components/Admin/AdminPostForm'

export default {
  layout: 'admin',
  components: {
    AdminPostForm
  },
  asyncData (context) {
    return axios.get(
      'https://nuxt-blog-e0f9a.firebaseio.com/posts/' +
        context.params.postId +
        '.json')
      .then(res => {
        return {
          loadedPost: { ...res.data, id: context.params.postId }
        }
      })
      .catch(e => context.error())
  },
  methods: {
    onSubmitted (editedPost) {
      this.$store.dispatch('editPost', editedPost)
        .then(() => {
          this.$router.push('/admin')
        })
    }
  }
}
</script>
