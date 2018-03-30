<template lang="pug">
  v-container
    AdminPostForm(:post="loadedPost")
</template>

<script>
import AdminPostForm from '@/components/Admin/AdminPostForm'
export default {
  layout: 'admin',
  components: {
    AdminPostForm
  },
  data () {
    return {
      loadedPost: {
        title: '',
        previewText: '',
        content: ''
      }
    }
  }
}
</script>
