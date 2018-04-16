<template lang="pug">
  v-container
    v-layout(column)
      v-flex(xs12 sm10 offset-sm1 lg8 offset-lg2)
        h1.heading.mb-3.text-xs-center New Post
        AdminPostForm(@submit="onSubmitted")
</template>

<script>
import axios from 'axios'
import AdminPostForm from '@/components/AdminPostForm'
export default {
  layout: 'admin',
  middleware: ['check-auth', 'auth'],
  components: {
    AdminPostForm
  },
  methods: {
    onSubmitted(postData) {
      this.$store.dispatch('addPost', postData)
        .then(() => {
          this.$router.push('/admin')
        })
    }
  }
}
</script>
