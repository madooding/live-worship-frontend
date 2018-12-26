<template lang="pug">
  .inputArea
    textarea(v-model="val" @input="() => { $emit('input', val) }" :placeholder="placeholder")
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    }
  },

  data: () => ({
    val: ''
  }),

  mounted () {
    this.val = this.value
  },

  watch: {
    value () {
      this.val = this.value
    }
  }
}
</script>

<style lang="scss" scoped>

.inputArea {
  width: 100%;
  max-width: 100%;

  textarea {
    width: 100%;
    height: 100%;
    max-width: 100%;
    padding: 15px;
    box-sizing: border-box;
    font-size: 10pt;
    border: none;
    outline: none !important;
    resize: none;
  }
}
</style>
