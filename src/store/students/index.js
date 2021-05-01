import studentAPI from '../../services/api/student'

const module = {
  namespaced: true,
  state: {
    students: [],
    totalStudents: 0,
    loadingStudents: false
  },

  actions: {
    async getStudents({ commit }, data) {
      commit('SET_TABLE_LOAD', true)
      commit('SET_STUDENTS', [])
      try {
        const response = await studentAPI.getStudents(data)

        commit('SET_STUDENTS', response.students)
        commit('SET_TOTAL_STUDENTS', response.totalStudents)
      } catch (error) {
        console.log(error)
      }

      commit('SET_TABLE_LOAD', false)
    },

    async getStudentsSearch({ commit }, data) {
      commit('SET_TABLE_LOAD', true)
      commit('SET_STUDENTS', [])
      try {
        const response = await studentAPI.getStudentsSearch(data)

        commit('SET_STUDENTS', response.students)
      } catch (error) {
        console.log(error)
      }

      commit('SET_TABLE_LOAD', false)
    }
  },

  mutations: {
    SET_STUDENTS(state, students) { state.students = students },
    SET_TOTAL_STUDENTS(state, total) { state.totalStudents = total },
    SET_TABLE_LOAD(state, loading) { state.loadingStudents = loading }
  },

  getters: {
  }
}

export default module