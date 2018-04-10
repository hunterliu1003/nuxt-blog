<template lang="pug">
  ul.the-tags
    li.the-tag(v-for="(tag, index) in value" :key="tag + index")
      | {{ tag }}
      span(@click="tagRemove(index)") x
    li.the-tag
      input(type="text" v-model="tagInput" @keyup.enter="tagAdd")
</template>

<script>
export default {
  name: 'TheTags',
  components: {
  },
  props: {
    value: {
      type: Array,
      default () {
        return []
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
    padding 0
    margin 0
    list-style-type none
    border: 1px solid black
  .the-tag
    padding 5px
    margin 0 5px
  input[type="text"]
    border 0
    margin 0
    padding 0
    background transparent
    &:focus
      outline none

</style>