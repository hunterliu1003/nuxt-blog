<template lang="pug">
  ul.the-tags(:class="{ disabled }")
    li.the-tag(
      v-for="(val, tag) in value"
      :key="tag"
      :class="{ disabled }"
      @click="to(tag)"
    )
      | {{ tag }}
      span(@click.stop="tagRemove(tag)" v-if="!disabled")
        v-icon.tag-remove fas fa-times
    li.the-tag-input(v-if="!disabled")
      input(
        type="text"
        v-model="tagInput"
        @keyup.enter="tagAdd"
        ref="tagInput"
        autofocus)
</template>

<script>
export default {
  props: {
    value: {
      type: Object,
      default () {
        return {}
      }
    },
    disabled: {
      type: Boolean,
      default () {
        return false
      }
    }
  },
  data () {
    return {
      tagInput: ''
    }
  },
  computed: {
    isDuplicated () {
      return this.value.hasOwnProperty(this.tagInput)
    }
  },
  methods: {
    tagAdd () {
      if (this.tagInput === '') return
      if (this.isDuplicated) return
      this.value[this.tagInput] = true
      this.tagInput = ''
    },
    tagRemove (tag) {
      delete this.value[tag]
      this.$forceUpdate()
      this.$refs.tagInput.focus()
    },
    to (tag) {
      this.disabled && this.$router && this.$router.push('/tags/' + tag)
    }
  }
}
</script>

<style lang="stylus" scoped>
  .the-tags
    display flex
    flex-wrap wrap
    padding 6px
    margin 0
    border 1px solid #ccc
    border-radius 2px
    list-style-type none
    &.disabled
      border none
      padding-left 0
  .the-tag
    padding 5px 20px 5px 12px
    margin 0 8px 0 0
    position relative
    border-radius 2px
    background-color #444
    color #eaeaea
    &.disabled
      padding 5px 12px
      margin 8px 8px 0 0
      cursor pointer
      transition all 300ms ease
      &:hover
        background-color #212121

  .the-tag-input
    padding 5px 0
    margin 0
    flex 1
  .tag-remove
    font-size 4px
    position absolute
    top 3px
    right 4px
    cursor pointer
    color #eaeaea
    opacity .7
    &:hover
      opacity 1
  input[type="text"]
    border 0
    margin 0
    padding 0
    height 100%
    width 100%
    background transparent
    &:focus
      outline none
</style>