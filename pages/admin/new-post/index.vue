<template lang="pug">
  v-container
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
