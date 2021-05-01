<template>
  <div>
    <v-layout justify-space-between class="py-6">
      <div class="display-1 font-weight-light">Tables Using Data From Server</div>
    </v-layout>

    <v-card>
      <v-card-title>
        <h5>Server Side Pagination</h5>
      </v-card-title>
      <v-card-text>
        <v-data-table
          :loading="loadingStudents"
          :headers="headers"
          :items="students"
          :items-per-page="itemsPerPage"
          :page="page"
          :server-items-length="totalStudents"
          :options.sync="options"
          class="elevation-1"
        >
          <template v-slot:item.status="{ item }">
            <v-chip
              :color="getColor(item.status)"
              dark
              small
            >
              {{ item.status }}
            </v-chip>
          </template>
        </v-data-table>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  data() {
    return {
      options: {},
      page: 1,
      itemsPerPage: 5,

      headers: [
        {
          text: 'Name',
          align: 'start',
          sortable: false,
          value: 'name'
        },
        { text: 'Age', value: 'age' },
        { text: 'Sex', value: 'sex' },
        { text: 'Status', value: 'status' }
      ]
    }
  },
  computed: {
    ...mapState({
      loadingStudents: (state) => state.students.loadingStudents,
      totalStudents: (state) => state.students.totalStudents,
      students: (state) => state.students.students
    })
  },
  watch: {
    options: {
      handler (newPage) {
        this.readDataFromAPI()
      },
      deep: true
    }
  },
  mounted() {
    this.readDataFromAPI()
  },
  methods: {
    ...mapActions({
      getStudents: 'students/getStudents'
    }),
    getColor(status) {
      if (status === 'Active') return 'green'
      else if (status === 'Pending') return 'yellow'
      else if (status === 'Suspended') return 'red'
      else return ''
    },
    readDataFromAPI() {
      const { page, itemsPerPage } = this.options
      const pageNumber = page - 1

      this.page = page
      this.itemsPerPage = itemsPerPage

      this.getStudents({
        page,
        itemsPerPage
      })
    }
  }
}
</script>
