<template>
  <div>
    <v-layout justify-space-between class="py-6">
      <div class="display-1 font-weight-light">Scheduled inspections</div>
      <v-btn dark color="#00a48b">
        <v-icon left>mdi-plus-circle</v-icon>Add new
      </v-btn>
    </v-layout>
    <v-data-table
      :headers="headers"
      :items="filterByStatusType()"
      item-key="id"
      class="elevation-1"
      :search="search"
      :page.sync="page"
      :items-per-page="itemsPerPage"
      :custom-filter="filterOnlyCapsText"
      hide-default-footer
      @page-count="pageCount = $event"
    >
      <template v-slot:top>
        <v-layout wrap class="pt-5">
          <v-flex xs12 sm6 md3>
            <v-text-field
              v-model="search"
              solo
              label="Search..."
              class="mx-4"
              prepend-inner-icon="mdi-magnify"
            >
            </v-text-field>
          </v-flex>
          <v-flex xs12 sm6 md3>
            <v-text-field
              v-model="date"
              solo
              label="Date range..."
              class="mx-4"
              prepend-inner-icon="mdi-calendar"
            >
            </v-text-field>
          </v-flex>
          <v-flex xs12 sm6 md3>
            <v-select
              v-model="status"
              solo
              :items="statuses"
              label="Inspection Status"
              class="mx-4"
            >
            </v-select>
          </v-flex>
          <v-flex xs12 sm6 md3>
            <v-select
              v-model="template"
              solo
              :items="templates"
              label="Template type"
              class="mx-4"
            >
            </v-select>
          </v-flex>
        </v-layout>
      </template>
      <template v-slot:item.time="{ item }">
        {{ getDate(item) }}
      </template>
      <template v-slot:item.name="{ item }">
        {{ getName(item) }}
      </template>
      <template v-slot:item.address="{ item }">
        {{ getAddress(item) }}
      </template>
      <template v-slot:item.actions="{ }">
        <v-icon
          class="mr-2"
          @click=""
        >
          mdi-pencil
        </v-icon>
        <v-icon
          @click=""
        >
          mdi-dots-vertical
        </v-icon>
      </template>
    </v-data-table>
    <v-layout class="pt-2">
      <div>
        <v-pagination v-model="page" :length="pageCount"></v-pagination>
      </div>
      <v-spacer></v-spacer>
    </v-layout>
  </div>
</template>

<script>
import json from '../assets/data.json'
export default {
  data () {
    return {
      search: '',
      calories: '',

      template: '',
      status: '',
      date: '',

      page: 1,
      pageCount: 0,
      itemsPerPage: 5,

      events: json.events,
      templates: [
        'All Templates',
        'Selected',
        'Unselected'
      ],
      statuses: [
        'All inspections',
        'Archived',
        'Scheduled',
        'Processing',
        'Draft'
      ]
    }
  },
  computed: {
    headers () {
      return [
        {
          text: 'DATE / TIME',
          align: 'left',
          sortable: false,
          value: 'time'
        },
        {
          text: 'INSPECTOR(S)',
          align: 'left',
          sortable: false,
          value: 'name'
        },
        {
          text: 'ADDRESS',
          sortable: false,
          value: 'address'
        },
        {
          text: '',
          align: 'right',
          sortable: false,
          value: 'actions'
        }
      ]
    }
  },
  methods: {
    filterOnlyCapsText (value, search, item) {
      return value !== null &&
            search !== null &&
            typeof value === 'string' &&
            value.toString().toLocaleUpperCase().indexOf(search) !== -1
    },
    getDate(inspect) {
      const date = new Date(inspect.startAt * 1000)

      return date.getMonth() + '/' + date.getDate() + '/' + date.getFullYear() + ' ' + date.getHours() + ':' + date.getMinutes()
    },
    getAddress(inspect) {
      const address_obj = inspect.inspection.property.address

      return address_obj.street + ', ' + address_obj.city.name + ', ' + address_obj.city.province.abbreviation + ' ' + address_obj.postalCode.postalCode
    },
    getName(inspect) {
      const users = inspect.calendarEventsUsers
      let username = ''

      for (let i = users.length - 1; i >= 0; i--) {
        username += users[i].user.firstName + ' ' + users[i].user.lastName
        if (i !== 0) {
          username += ', '
        }
      }

      return username
    },
    filterByStatusType() {
      return this.events.filter((event) => {
        const type = event.inspection.inspectionTemplate
        const status = event.inspection.inspectionStatus

        return (this.template === 'All Templates' || this.template === '' || type === this.template)
          && (this.status === 'All inspections' || this.status === '' || status === this.status)
      })
    }
  }
}
</script>