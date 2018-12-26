const state = {
  slides: ['ใจที่กระหายและเหนื่อย ใจที่ทนทุกข์ลำบาก ใจที่หมดหวังทุกอย่าง จงเข้ามา', 'พระองค์เป็นน้ำ แห่งชีวิต ให้เราดื่มน้ำแห่งชีวิต', 'หล่อเลี้ยงหัวใจ ให้ชีวิตใหม่'],
  loading: {
    slides: false
  },
  current_slide: {
    live: null,
    edit: null
  }
}

const getters = {
  slides: state => {
    return state.slides
  },

  currentSlide: state => {
    return state.current_slide
  }
}

const actions = {
  addNewSlide ({ commit }, slide) {
    commit('pushNewSlide', slide)
  },

  setCurrentEditSlide ({ commit, state }, index) {
    commit('setCurrentSlide', {
      ...state.current_slide,
      edit: index
    })
  },

  setSlides ({ state, commit }, slides) {
    commit('setCurrentSlide', {
      live: null,
      edit: null
    })
    commit('setSlides', slides)
  }
}

const mutations = {
  pushNewSlide (state, slide) {
    state.slides.push(slide)
  },

  setCurrentSlide (state, current_slide) {
    state.current_slide = current_slide
  },

  setSlides (state, slides) {
    state.slides = slides
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
