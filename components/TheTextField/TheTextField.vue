<template lang="pug">
  div.the-text-field
    input(
      v-bind="$attrs"
      :value="value"
      @input="$emit('input', $event.target.value)"
    )
    slot(:valid="valid" :error="errorMsg")

</template>

<script>
export default {
  name: 'theTextField',
  props: {
    value: {
      type: String,
      default () {
        return ''
      }
    },
    rules: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      valid: true
    }
  },
  computed: {
    errorMsg () {
      return this.validation(this.rules)
    }
  },
  methods: {
    validation (rules) {
      for(let rule in this.rules) {
        let valid = rules[rule](this.value)
        if (!(typeof valid === 'string' || typeof valid === 'boolean')) {
          throw new TypeError("Rules should return a string or boolean")
        }
        if (typeof valid === 'string') {
          this.valid = false
          this.$emit('valid', this.valid)
          return valid
        }
        if (typeof valid === 'boolean') {
          this.valid = valid
          this.$emit('valid', this.valid)
        }
      }
      return ''
    }
  }
}
</script>