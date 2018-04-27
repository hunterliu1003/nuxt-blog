<template lang="pug">
  //- v-layout.posts-post-markdown(tag="article")
  .posts-post-markdown
    div(v-html="contentHtml")
</template>

<script>
import MarkdownIt from 'markdown-it'
import markdownItAttrs from 'markdown-it-attrs'
import debounce from 'lodash.debounce'
// import hljs from 'highlightjs'
// import markdownItHighlightjs from 'markdown-it-highlightjs'
const md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true,
  langPrefix:   'language-',
  // highlight: function (str, lang) {
  //   if (lang && hljs.getLanguage(lang)) {
  //     try {
  //       return '<pre class="hljs"><code>' +
  //              hljs.highlight(lang, str, true).value +
  //              '</code></pre>';
  //     } catch (__) {}
  //   }

  //   return '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre>';
  // }
})
md.use(markdownItAttrs)
// md.use(markdownItHighlightjs)

export default {
  name: 'PostsPostMarkdown',
  components: {
  },
  props: {
    markdownText: {
      type: String,
      default () {
        return ''
      }
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

>>> h1
  font-size 2.6em
  color #41B883
  padding-top 5px
  padding-bottom 5px
>>> h2
  font-size 2.2em
  color #41B883
  padding-top 5px
  padding-bottom 5px
>>> h3
  font-size 2.0em
  color #41B883
  padding-top 5px
  padding-bottom 5px
>>> h4
  font-size 1.7em
  color #41B883
  padding-top 5px
  padding-bottom 5px
>>> h5
  font-size 1.5em
  color #41B883
  padding-top 5px
  padding-bottom 5px
>>> h6
  font-size 1.4em
  color #41B883
  padding-top 5px
  padding-bottom 5px

>>> code
  color #41B883
  font-weight 100

>>> p
  font-size 1.2em
  margin 0

>>> li
  font-size 1.2em
</style>