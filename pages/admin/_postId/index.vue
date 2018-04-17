<template lang="pug">
  v-container
    v-layout(column)
      v-flex(xs12 sm10 offset-sm1 lg8 offset-lg2)
        h1.heading.mb-3.text-xs-center Edit Post
        AdminPostForm.mt-3(:post="loadedPost" @submit="onSubmitted")
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
      // 最近更新日期
      this.$store.dispatch('editPost', editedPost)
        .then(() => {
          this.$router.push('/admin')
        })
    }
  }
}
</script>
