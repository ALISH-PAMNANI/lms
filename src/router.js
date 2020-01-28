import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import Registration from './views/Registration.vue'
import DashboardAdmin from './views/DashboardAdmin.vue'
import DashboardLibrarian from './views/DashboardLibrarian.vue'
import DashboardMember from './views/DashboardMember.vue'
import IssueBooks from './views/IssueBooks.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/registration',
      name: 'registration',
      component: Registration
    },
    {
        path: '/dashboard-librarian',
        name: 'dashboard-librarian',
        component: DashboardLibrarian
      },
      {
        path: '/dashboard-admin',
        name: 'dashboard-admin',
        component: DashboardAdmin
      },
      {
        path: '/dashboard-member',
        name: 'dashboard-member',
        component: DashboardMember
      },
      {
        path: '/issue-books',
        name: 'issue-books',
        component: IssueBooks
      }
   
  ]
})
