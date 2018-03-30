<template lang="pug">
  v-form(
      v-model="valid"
      ref="form"
      lazy-validation
    )
      v-text-field(
        label="Title"
        v-model="editedPost.title"
        :rules="titleRules"
        required
      )
      v-text-field(
        label="PreviewText"
        v-model="editedPost.previewText"
        :rules="previewTextRules"
        multi-line
        required
      )
      v-text-field(
        label="Content"
        v-model="editedPost.content"
        :rules="contentRules"
        multi-line
        required
      )
      v-btn(
        @click="submit"
        :disabled="!valid"
      ) submit
      v-btn(
        @click="cancel"
      ) cancel
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: false
    }
  },
  data () {
    return {
      editedPost: this.post
        ? { ...this.post }
        : {
            title: '',
            previewText: '',
            content: '',
          },
      valid: true,
      titleRules: [
        v => !!v || 'Title is required',
      ],
      previewTextRules: [
        v => !!v || 'PreviewText is required',
      ],
      contentRules: [
        v => !!v || 'Content is required',
      ],

    }
  },
  methods: {
    submit () {
      if (this.$refs.form.validate()) {
        console.log('haha submit')
      }
    },
    cancel () {
      this.$router.push('/admin')
    }
  }
}
</script>