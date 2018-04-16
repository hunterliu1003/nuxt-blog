<template lang="pug">
  article.posts-post-markdown
    h1 asdf
    div(v-html="contentHtml")
</template>

<script>
import MarkdownIt from 'markdown-it'
import markdownItAttrs from 'markdown-it-attrs'
import debounce from 'lodash.debounce'

const md = new MarkdownIt()
md.use(markdownItAttrs)

export default {
  name: 'PostsPostMarkdown',
  components: {
  },
  props: {
    markdownText: {
      type: String,
      required: true
    },
    delay: {
      type: Number,
      default () {
        return 1000
      }
    }
  },
  data () {
    return {
      contentHtml: ''
    }
  },
  watch: {
    markdownText () {
      this.update(this.delay)()
    }
  },
  created () {
    this.render(this.markdownText)
  },
  methods: {
    update (delay) {
      return debounce(() => {
        this.render(this.markdownText)
      }, delay)
    },
    render (markdownText) {
      this.contentHtml = md.render(markdownText)
    }
  }
}
</script>

<style lang="stylus" scoped>
  .posts-post-markdown
    // border: 1px solid red
    // padding 0 0 0 20px
  >>> a
    color #fff
</style>