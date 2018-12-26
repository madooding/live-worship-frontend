<template>
  <div class="edit-mode">
    <add-slide-modal ref="addSlideModal"></add-slide-modal>
    <edit-slide-modal ref="editSlideModal"></edit-slide-modal>
    <Slides :slides="slides" v-model="currentSlide.edit" id="editableSlides" :modeSelection="editMode == 'delete'"></Slides>
    <div class="bottom-bar" v-if="editMode === 'default'">
      <div class="tabs">
        <div class="tabs__item" @click="showAddSlideModal()">
          <i class="ion-ios-plus-empty"></i>
        </div>
        <div class="tabs__item" @click="showEditSlideModal()">
          <i class="ion-ios-compose-outline"></i>
        </div>
        <div class="tabs__item" @click="setEditModeDelete()">
          <i class="ion-ios-trash-outline"></i>
        </div>
      </div>
    </div>
    <div class="bottom-bar" v-if="editMode === 'delete'">
      <div class="tabs">
        <div class="tabs__item" @click="setEditModeDefault()">
          Cancel
        </div>
        <div class="tabs__item">
          Delete
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import _ from 'lodash'
import Slides from './Slides'
import AddSlideModal from '@/components/AddSlideModal'
import EditSlideModal from '@/components/EditSlideModal'
import { mapGetters, mapActions } from 'vuex'
import 'jquery-ui/ui/widgets/sortable'

export default {
  components: {
    Slides,
    AddSlideModal,
    EditSlideModal
  },

  data: function () {
    return {
      editMode: 'default'
    }
  },

  computed: {
    ...mapGetters('sessions', ['slides', 'currentSlide'])
  },

  watch: {
    'currentSlide.edit' () {
      this.select(this.currentSlide.edit)
    }
  },

  mounted () {
    $('#editableSlides').sortable({
      containment: $('#app'),
      update: (event, ui) => {
        this.$nextTick(() => {
          this.updateSlides(_.map($('#editableSlides > .list-group__item > .text'), each => each.innerText))
        })
      }
    })
  },

  methods: {
    ...mapActions('sessions', {
      'select': 'setCurrentEditSlide',
      'updateSlides': 'setSlides'
    }),

    showAddSlideModal () {
      this.$refs.addSlideModal.showModal()
    },

    showEditSlideModal () {
      this.$refs.editSlideModal.showModal()
    },

    setEditModeDelete () {
      $('#editableSlides').sortable('disable')
      this.setEditMode('delete')
    },

    setEditModeDefault () {
      $('#editableSlides').sortable('enable')
      this.setEditMode('default')
    },

    setEditMode (mode) {
      this.editMode = mode
    }
  }
}
</script>
