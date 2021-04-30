import Vue from 'vue'
import Vuex from 'vuex'

// Global vuex
import StudentModule from './students'

Vue.use(Vuex)

/**
 * Main Vuex Store
 */
const store = new Vuex.Store({
  modules: {
    students: StudentModule
  }
})

export default store
