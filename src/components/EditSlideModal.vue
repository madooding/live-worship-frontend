<template lang="pug">
  .modal.activity(:class="{ 'show': isShow }")
    .modal__content
      .top-bar
        .title
          .text
            | Edit slide
          .icons.right
            i.ion-ios-close-empty(@click="closeModal()")
      .slider-container
        .slide-item
          InputArea(v-model="text" placeholder="Edit Text")
          .bottom-bar.absolute
            .tabs
              .tabs__item
                | Save

</template>

<script>
import InputArea from '@/components/InputArea'

export default {
  components: {
    InputArea
  },

  data: () => ({
    text: '',
    isShow: false
  }),

  methods: {
    closeModal () {
      this.isShow = false
    },

    showModal () {
      this.isShow = true
    }
  }
}
</script>

<style lang="scss" scoped>

.modal {
  top: 44px;

  .modal__content {
    .top-bar {
      .title {
        border-bottom-style: solid;
        border-bottom-color: rgba(0, 0, 0, .0975);
        border-bottom-width: .5px;
        box-sizing: border-box;

        .icons.right {
          cursor: pointer;
        }
      }
    }

    .slider-container {
      min-height: calc(100vh - 44px);
      max-height: calc(100vh - 44px);

      position: relative;
        overflow: hidden;

        .slide-item {
          .inputArea {
            height: calc(100% - 44px);
          }
        }
    }
  }
}
</style>
