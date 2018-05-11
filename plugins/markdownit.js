import MarkdownIt from 'markdown-it'
import markdownItAttrs from 'markdown-it-attrs'
import hljs from 'highlightjs'
import markdownItPlayground from 'markdown-it-playground'
import markdownItHighlightjs from 'markdown-it-highlightjs'
const md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true,
  langPrefix: 'storybook-'
})
md.use(markdownItAttrs)
md.use(markdownItPlayground)
md.use(markdownItHighlightjs)

const Markdown = {
  install (Vue, options) {
    Vue.prototype.$md = md
  }
}

export default Markdown