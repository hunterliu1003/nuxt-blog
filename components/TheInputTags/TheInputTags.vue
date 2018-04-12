<template lang="pug">
  ul.the-tags(:class="{ disabled }")
    li.the-tag(
      v-for="(tag, index) in value"
      :key="tag + index"
      :class="{ disabled }"
      @click="disabled && $router.push('/')"
    )
      | {{ tag }}
      span(@click.stop="tagRemove(index)" v-if="!disabled")
        v-icon.tag-remove fas fa-times
    li.the-tag-input(v-if="!disabled")
      input(type="text" v-model="tagInput" @keyup.enter="tagAdd" autofocus)
</template>

<script>
export default {
  props: {
    value: {
      type: Array,
      default () {
        return []
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
      return this.value.find(tag => tag === this.tagInput)
    }
  },
  created () {
  },
  mounted () {
  },
  methods: {
    tagAdd () {
      if (this.tagInput === '') return
      if (this.isDuplicated) return
      this.value.push(this.tagInput)
      this.tagInput = ''
    },
    tagRemove (index) {
      this.value.splice(index, 1)
    }
  }
}
</script>

<style lang="stylus" scoped>
  .the-tags
    display flex
    padding 6px
    margin 0
    border 1px solid #ccc
    border-radius 2px
    list-style-type none
    &.disabled
      border none
  .the-tag
    padding 5px 20px 5px 12px
    margin 0 8px 0 0
    position relative
    border-radius 2px
    background-color #444
    color #eaeaea

    &.disabled
      padding 5px 12px
      cursor pointer
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
    opacity: .7;
    &:hover
      opacity: 1;
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