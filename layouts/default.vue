<template lang="pug">
  v-app(dark)
    v-content.default-layout
      v-layout.default-nav.primary(row wrap align-content-center)
        v-container.text-xs-center
          nuxt-link.white--text(to="/")
            v-avatar(size="125px")
              img.img-circle.elevation-7.mb-1(src="https://raw.githubusercontent.com/vuetifyjs/docs/dev/static/doc-images/lists/1.jpg")
            .headline Hunter Liu
          .subheading.text-xs-center.white-text.pt-1.pb-3 Lorem ipsum dolor sit amet
        v-container
          v-layout(column)
            nuxt-link.white--text.text-xs-center(to="/about") 關於我
            nuxt-link.white--text.text-xs-center(to="/posts") 文章列表
            nuxt-link.white--text.text-xs-center(to="/tabs") 標籤列表
      v-layout.default-content
        nuxt
    v-footer.black-lighten-1.default-footer(app)
      v-layout
        v-flex(xs12)
          .white--text.ml-3 © 2018. All rights reserved.
</template>

<style lang="stylus">
a
  &:link,
  &:visited,
  &:active
    text-decoration none
  &:hover
    text-decoration underline
.default-nav
  width    250px
  padding  20px
  position fixed
  height   100%
.default-layout
  padding 0
.default-content
  padding-left 250px
.footer
  z-index 2
@media only screen and (max-width: 768px)
  .default-layout
    flex-direction column
  .default-nav
    width    100%
    position relative
  .default-content
    padding-left 0px
</style>
