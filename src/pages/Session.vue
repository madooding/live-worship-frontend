<template lang='pug'>
  .session
    .top-bar
      .title
        .icons.left
          i.ion-ios-arrow-left
        .text
          | การนมัสการ 1
        .icons.right
          i.ion-ios-personadd-outline(v-if="mode === 'EDIT'")
      .tabs
        .tabs__item(:class="{'tabs__item--active': mode === 'EDIT'}", @click="changeMode('EDIT')") Edit
        .tabs__item(:class="{'tabs__item--active': mode === 'LIVE'}", @click="changeMode('LIVE')") Live
    EditMode(v-if="mode === 'EDIT'")
    LiveMode(v-else-if="mode === 'LIVE'")
</template>

<script>
import EditMode from '@/components/EditMode'
import LiveMode from '@/components/LiveMode'

export default {
  components: {
    EditMode,
    LiveMode
  },

  data: () => ({
    mode: 'EDIT'
  }),

  methods: {
    changeMode (mode) {
      this.mode = mode
    }
  }
}
</script>

<style lang="scss" scoped>
.session {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding-top: 79px;
  overflow-x: hidden;
  box-sizing: border-box;
}
</style>
