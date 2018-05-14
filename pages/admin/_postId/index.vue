<template lang="pug">
  v-container
    v-layout(column)
      v-flex(xs12 sm10 offset-sm1 lg8 offset-lg2)
        h1.heading.mb-3.text-xs-center Edit Post
        AdminPostForm.mt-3(:post="loadedPost" @submit="onSubmitted")
</template>

<script>
import convert from 'firebase-firestore-fields'
import AdminPostForm from '@/components/AdminPostForm'

export default {
  layout: 'admin',
  middleware: ['check-auth', 'auth'],
  components: {
    AdminPostForm
  },
  asyncData(context) {
    return context.app.$axios.$get('posts/' + context.params.postId)
      .then(data => {
        return {
          loadedPost: {
            id: context.params.postId,
            ...convert(data.fields)
          }
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
