import Vue from 'vue'
import Router from 'vue-router'
import DefaultTable from '@/pages/DefaultTable'
import ServerSideSearch from '@/pages/ServerSideSearch'
import ServerSidePagination from '@/pages/ServerSidePagination'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/default-table'
    }, {
      path: '/default-table',
      name: 'default-table',
      component: DefaultTable
    },
    {
      path: '/server-side-tables/search',
      name: 'server-side-tables-search',
      component: ServerSideSearch
    }, {
      path: '/server-side-tables/pagination',
      name: 'server-side-tables-pagination',
      component: ServerSidePagination
    }
  ],
  mode: 'history'
})
