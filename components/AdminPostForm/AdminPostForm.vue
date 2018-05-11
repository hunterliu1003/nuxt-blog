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
        autofocus
      )
      p Tags
      TheInputTags(v-model="editedPost.tags")
      p.mt-3 Preview Text
      no-ssr
        codemirror.mt-3(
          v-model="editedPost.previewText"
          :options="cmOptions"
        )
      p.mt-3 Preview Preview Text
      PostsPostPreview(
        :id="editedPost.id"
        is-admin
        :title="editedPost.title"
        :lastUpdateTime="editedPost.lastUpdateTime"
        :previewText="editedPost.previewText"
        :tags="editedPost.tags"
      )
      p.mt-3 Content

      no-ssr
        codemirror.mt-3(
          v-model="editedPost.content"
          :options="cmOptions"
        )

      p.mt-3 Preview Content
      PostsPostMarkdown(:markdown-text="$md.render(editedPost.content)")

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
            tags: [],
            previewText: '',
            content: '',
            lastUpdateTime: Date.now(),
            postTime: Date.now()
          },
      valid: true,
      titleRules: [
        v => !!v || 'Title is required',
      ],
      cmOptions: {
        // codemirror options
        tabSize: 4,
        mode: 'markdown',
        theme: 'monokai',
        lineNumbers: true,
        lineWrapping: true
        // more codemirror options, 更多 codemirror 的高级配置...
      }
    }
  },
  methods: {
    submit () {
      if (this.$refs.form.validate()) {
        this.$emit('submit', this.editedPost)
      }
    },
    cancel () {
      this.$router.push('/admin')
    }
  }
}
</script>