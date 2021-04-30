import studentAPI from '../../services/api/student'

const module = {
  namespaced: true,
  state: {
    students: [],
    loadingStudents: false
  },

  actions: {
    async getStudents({ commit }) {
      commit('SET_TABLE_LOAD', true)
      commit('SET_STUDENTS', [])
      try {
        const response = await studentAPI.getStudents()

        commit('SET_STUDENTS', response)
      } catch (error) {
        console.log(error)
      }

      commit('SET_TABLE_LOAD', false)
    }
  },

  mutations: {
    SET_STUDENTS(state, students) { state.students = students },
    SET_TABLE_LOAD(state, loading) { state.loadingStudents = loading }
  },

  getters: {
  }
}

export default module