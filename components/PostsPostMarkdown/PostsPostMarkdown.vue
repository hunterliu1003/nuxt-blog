<template lang="pug">
  //- v-layout.posts-post-markdown(tag="article")
  .posts-post-markdown
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
  width 100%
    // border: 1px solid red
    // padding 0 0 0 20px
>>> a
  color #fff
>>> h1,
>>> h2,
>>> h3,
>>> h4,
>>> h5,
>>> h6,
>>> p
  word-wrap break-word
</style>