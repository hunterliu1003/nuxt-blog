<template>
  <v-app dark>
    <v-content>
      <v-container fluid>
        <v-layout row wrap class="layout">
          <div class="nav">
            <div class="text-xs-center mt-5">
              <nuxt-link to="/" class="white--text">
                <v-avatar size="125px">
                  <img
                    class="img-circle elevation-7 mb-1"
                    src="https://raw.githubusercontent.com/vuetifyjs/docs/dev/static/doc-images/lists/1.jpg"
                  >
                </v-avatar>
                <div class="headline">Hunter <span style="font-weight:bold">Liu</span></div>
              </nuxt-link>
              <div class="subheading text-xs-center white--text pt-1 pb-3">Lorem ipsum dolor sit amet</div>
            </div>
            <v-container>
              <v-layout column justify-space-between>
                <nuxt-link to="/about" class="white--text text-xs-center">關於我</nuxt-link>
                <nuxt-link to="/posts" class="white--text text-xs-center">文章列表</nuxt-link>
                <nuxt-link to="/tabs" class="white--text text-xs-center">標籤列表</nuxt-link>
              </v-layout>
            </v-container>
          </div>
          <div class="content">
            <nuxt />
          </div>
        </v-layout>
      </v-container>
    </v-content>
    <v-footer class="black-lighten-1" app>
      <v-layout>
        <v-flex xs12>
          <div class="white--text ml-3">
            © 2018. All rights reserved.
          </div>
        </v-flex>
      </v-layout>
    </v-footer>
  </v-app>
</template>

<script>
  export default {

  }
</script>

<style lang="stylus">
a
  &:link,
  &:visited
    text-decoration: none
  &:active,
  &:hover
    text-decoration: underline
.nav
  width: 200px
  position: fixed
.content
  padding-left: 200px
@media only screen and (max-width: 960px)
  .layout
    flex-direction: column
  .nav
    width: 100%
    position: relative
  .content
    padding-left: 0px
</style>
