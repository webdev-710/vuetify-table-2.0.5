import Vue from 'vue'
import Router from 'vue-router'
import Inspections from '@/pages/Inspections'
import Admin from '@/pages/Admin'
import Calendar from '@/pages/Calendar'
import Metrics from '@/pages/Metrics'
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
            path: '/calendar',
            name: 'Calendar',
            component: Calendar
        },
        {
            path: '/metrics',
            name: 'Metrics',
            component: Metrics
        },
        {
            path: '/templates',
            name: 'Templates',
            component: Templates
        },
    ],
    mode: 'history'
})
