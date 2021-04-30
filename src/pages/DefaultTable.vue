<template>
  <div>
    <v-layout justify-space-between class="py-6">
      <div class="display-1 font-weight-light">Default Table</div>
    </v-layout>

    <v-card>
      <v-card-title>
        <v-text-field
          v-model="search"
          solo
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>

      <v-card-text>
        <v-data-table
          :loading="loadingStudents"
          :headers="headers"
          :items="students"
          :items-per-page="5"
          class="elevation-1"
          :search="search"
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
      search: '',

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
      students: (state) => state.students.students
    })
  },
  mounted() {
    this.getStudents()
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
    }
  }
}
</script>
