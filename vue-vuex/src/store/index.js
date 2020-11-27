import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    content: ""
  },
  mutations: {
    increment(state, n = 1) {
      state.count+=n
    },
    submitContent(state, content) {
      state.content = content
    }
  },
  actions: {
    asyncIncrement({ commit }, data) {
      setTimeout(() => {
        commit("increment",data)
      }, 1000);
    }
  },
  modules: {
  }
})
