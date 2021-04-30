import students from '../data/students'

export default {
  /**
  * Get students
  *
  * @param {}
  * @example
  *
  *     getStudents()
  */
  getStudents() {
    const myPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(students)
      }, 200)
    })

    return myPromise
  }
}