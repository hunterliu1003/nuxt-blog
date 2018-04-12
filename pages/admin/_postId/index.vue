<template lang="pug">
  v-container
    AdminPostForm(:post="loadedPost" @submit="onSubmitted")
</template>

<script>
import AdminPostForm from '@/components/AdminPostForm'

export default {
  layout: 'admin',
  middleware: ['check-auth', 'auth'],
  components: {
    AdminPostForm
  },
  asyncData (context) {
    return context.app.$axios.$get(
        '/posts/' +
        context.params.postId +
        '.json')
      .then(data => {
        return {
          loadedPost: { ...data, id: context.params.postId }
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
