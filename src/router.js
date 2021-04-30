import Vue from 'vue'
import Router from 'vue-router'
import Inspections from '@/pages/Inspections'
import Admin from '@/pages/Admin'
import DefaultTable from '@/pages/DefaultTable'
import ServerSideTable from '@/pages/ServerSideTables'
import Templates from '@/pages/Templates'
import Contacts from '@/pages/Contacts'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Inspections',
      component: Inspections
    },
    {
      path: '/inspections',
      name: 'Inspections',
      component: Inspections
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin
    },
    {
      path: '/contacts',
      name: 'Contacts',
      component: Contacts
    },
    {
      path: '/default-table',
      name: 'default-table',
      component: DefaultTable
    },
    {
      path: '/server-side-tables',
      name: 'server-side-tables',
      component: ServerSideTable
    },
    {
      path: '/templates',
      name: 'Templates',
      component: Templates
    }
  ],
  mode: 'history'
})
