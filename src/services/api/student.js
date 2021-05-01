import students from '../data/students'

export default {
  /**
  * Get students
  *
  * @param {}
  * @example
  *
  *     getStudents(data)
  */
  getStudents(data) {
    const myPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        const { search, page, itemsPerPage } = data
        let filteredStudents = []

        if (search) {
          filteredStudents = students.filter((student) => {
            return student.name.toUpperCase().includes(search.toUpperCase())
          })
        } else {
          filteredStudents = students
        }

        resolve({
          totalStudents: filteredStudents.length,
          students: filteredStudents.slice((page - 1) * itemsPerPage, page * itemsPerPage)
        })
      }, 200)
    })

    return myPromise
  },

  /**
  * Get students
  *
  * @param {}
  * @example
  *
  *     getStudents({
  *       search: ''
  *     })
  */
  getStudentsSearch(data) {
    const myPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        const { search } = data
        let filteredStudents = []

        if (search) {
          filteredStudents = students.filter((student) => {
            return student.name.toUpperCase().includes(search.toUpperCase())
          })
        } else {
          filteredStudents = students
        }

        resolve({
          students: filteredStudents
        })
      }, 200)
    })

    return myPromise
  }
}