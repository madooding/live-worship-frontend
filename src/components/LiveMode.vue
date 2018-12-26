<template lang="pug">
  .live
    .screen-area
      .stage(ref="stage") ใจที่กระหายและเหนื่อย ใจที่ทนทุกข์ลำบาก ใจที่หมดหวังทุกอย่าง จงเข้ามา
    .slides-area
      Slides.slides(:slides="slides" v-model="current_slide")
</template>

<script>
import Slides from './Slides'
import { mapGetters, mapActions } from 'vuex'
export default {
  components: {
    Slides
  },

  data: () => ({
    current_slide: null,
    mode: 'EDIT',
    stage: undefined
  }),

  computed: {
    ...mapGetters('sessions', ['slides', 'currentSlide'])
  },

  mounted () {
    this.stage = $(this.$refs.stage)
    this.updateStageSize()

    $(window).on('resize', e => {
      this.updateStageSize()
    })
  },

  methods: {
    updateStageSize () {
      this.stage.css('height', `${this.stage.outerWidth() * 0.5625}px`)
    }
  }

}
</script>

<style lang="scss" scoped>

.live {
  width: 100%;
  max-height: calc(100vh - 79px);
  display: flex;
  flex-grow: 1;
  flex-direction: column;

  .screen-area {
    width: 100%;
    height: 56.25vw;
    background-color: black;
    color: white;

    .stage {
      display: flex;
      align-items: center;
      width: 100%;
      height: 100%;
      padding: 5vw;
      box-sizing: border-box;
      font-size: 5vw;
      font-weight: bold;
      text-align: center;
      background-color: #00204A;
    }
  }

  .slides-area {
    overflow-y: overlay;
  }

  @media (min-width: 768px) {
    flex-direction: row;

    .screen-area {
      display: flex;
      align-items: center;
      height: unset;

      .stage {
        font-size: 3vw;
      }
    }
  }
}
</style>
