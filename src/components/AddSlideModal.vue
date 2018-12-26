<template lang="pug">
.modal.activity(:class="{'show': isShow}")
  .modal__content
    .top-bar
      .title
        .text
          | Add to slides
        .icons.right
          i.ion-ios-close-empty(@click='closeModal()')
      .tabs
        .tabs__item(:class="{'tabs__item--active': mode === 'SONG'}", @click="changeMode('SONG')") Song
        .tabs__item(:class="{'tabs__item--active': mode === 'CUSTOM'}", @click="changeMode('CUSTOM')") Custom
    .slider-container.add--song(ref='addSongSlider' v-if="mode === 'SONG'")
      .slide-item(ref='searchSong')
        .input.border-bottom
          i.ion-ios-search
          input(type='text', placeholder='Search a song by its name', v-model='search')
        .list
          .item(v-for='song in filteredSongsList', :key='song.id', @click='fetchSongLyrics(song.id)') {{ song.name }}
      .slide-item#selectLyricsToAdd(ref='selectLyrics')
        loading-spinner(v-if='loadingLyrics')
        slides(:slides='lyrics', v-if='!loadingLyrics', :modeSelection="true" ref="lyricsSlides")
        .bottom-bar.absolute
          .tabs
            .tabs__item(ref='backToSelectSongBtn', @click='backToSelectSong()')
              | Back
            .tabs__item
              | Add
    .slider-container.add--custom(v-if="mode === 'CUSTOM'")
      .slide-item
        InputArea(placeholder='Add your custom text here.' v-model="customText")
        .bottom-bar.absolute
          .tabs
            .tabs__item
              | Add
</template>

<script>
import _ from 'lodash'
import Slides from './Slides'
import InputArea from '@/components/InputArea'
import LoadingSpinner from './HorizontalLoadingSpinner'
import { Songs } from '@/services/'
import { setTimeout } from 'timers';

export default {
  components: {
    Slides,
    LoadingSpinner,
    InputArea
  },
  data: () => ({
    lyrics: [],
    songs: [],
    isShow: false,
    mode: 'SONG',
    search: '',
    customText: '',
    loading: false,
    loadingLyrics: false
  }),

  mounted () {
  },

  methods: {
    changeMode (mode) {
      this.mode = mode
    },

    closeModal () {
      this.isShow = false
    },

    showModal () {
      $(this.$refs.addSongSlider).scrollLeft(0)
      this.songs = []
      this.lyrics = []
      this.search = ''
      this.customText = ''
      this.isShow = true
      this.fetchSongList()
    },

    backToSelectSong () {
      $(this.$refs.addSongSlider).animate({
        scrollLeft: 0
      }, 500)
    },

    fetchSongList () {
      this.loading = true
      Songs.getSongList().then(res => {
        if (res.error_code == 200) {
          this.loading = false
          this.songs = _.map(res.result, each => ({ id: each._id, name: each.name.th }))
        }
      })
    },

    fetchSongLyrics (id) {
      this.loadingLyrics = true
      Songs.getSongLyrics(id).then(res => {
        if (res.error_code == 200) {
          this.loadingLyrics = false
          this.lyrics = res.result.lyrics
          let selectLyricsElem = $(this.$refs.selectLyrics)
          this.$nextTick(() => {
            this.$refs.lyricsSlides.selectAll()
          })
          $(this.$refs.addSongSlider).animate({
            scrollLeft: selectLyricsElem.offset().left
          }, 500)
        }
      })
    }
  },
  computed: {
    filteredSongsList () {
      if (this.search === '') return this.songs
      else return _.filter(this.songs, song => song.name.match(`^.*(${this.search}).*$`))
    }
  }
}

</script>

<style lang="scss" scoped>
.modal {
  .modal__content {
    .top-bar {
      .title {
        .icons.right {
          cursor: pointer;
        }
      }
    }

    .slider-container {
      &.add--custom {
        position: relative;
        overflow-y: hidden;

        .slide-item {
          .inputArea {
            height: calc(100% - 44px);
          }
        }
      }
    }
  }
}
</style>
