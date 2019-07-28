import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Newemployee from '@/components/newemployee'
import Viewemployee from '@/components/viewemployee'
import Dashboard from '@/components/dashboard'
import Editemployee from '@/components/editemployee'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/new',
      name: 'newemployee',
      component: Newemployee
    },
    {
      path: '/edit/:employee_id',
      name: 'editemployee',
      component: Editemployee
    },
    {
      path: '/:employee_id',
      name: 'viewemployee',
      component: Viewemployee
    },
 
  ]
})
