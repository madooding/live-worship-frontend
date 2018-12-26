<template lang="pug">
  .list-group(ref='slides' :class="{ 'selection--mode': modeSelection }")
    .list-group__item(v-for='(content, i) in slides', :key='content', :class="{ 'selected': (i === selected && !modeSelection) || (selections.includes(i) && modeSelection) }", @mousedown='select(i)')
      .icon
        i.ion-ios-checkmark-empty
      .text {{ content }}

</template>

<script>
import _ from 'lodash'

export default {
  props: {
    modeSelection: {
      type: Boolean,
      default: false
    },

    slides: {
      type: Array,
      default: () => []
    },

    value: {
      type: Number,
      default: null
    }
  },

  data: () => ({
    selected: null,
    selections: []
  }),

  mounted () {
    this.selected = this.value
  },

  methods: {
    select (i) {
      if (this.modeSelection) {
        if (this.selections.includes(i)) {
          let index = _.findIndex(this.selections, each => each == i)
          this.selections.splice(index, 1)
        } else {
          this.selections.push(i)
        }
      } else {
        this.selected = i
      }
    },

    selectAll () {
      if (this.modeSelection) {
        this.slides.forEach((val, i) => {
          this.select(i)
        })
      }
    }
  },

  watch: {
    value () {
      this.selected = this.value
    },

    selected () {
      this.$emit('input', this.selected)
    },

    modeSelection (payload) {
      if (!payload) {
        this.selections = []
      }
    }
  }
}
</script>

<style lang="scss" scoped>

.list-group {
  .list-group__item {
    position: relative;
    display: flex;

    .icon {
      position: absolute;
      display: none;
      width: 20px;
      height: 20px;
      top: 50%;
      left: 20px;
      font-size: 28px;
      border-radius: 20px;
      border: solid 1px rgba(0, 0, 0, 0.0975);
      transform: translateY(-50%);
      transition: all .25s ease;

      i {
        display: none;
      }
    }

    .text {

    }

  }
  &.selection--mode {
    .list-group__item {
      padding-left: 60px;

      &.selected {
        color: black;
        background-color: #fff;

        .icon {
          border: solid 1px #157FFB;
          background-color: #157FFB;
        }
      }

      .icon {
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;

        i {
          display: block;
        }
      }
    }
  }
}
</style>
