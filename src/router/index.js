import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Company from '@/pages/Company'
import Login from '@/pages/Login'
import About from '@/pages/About'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'Home',
      component: Home,
      props: true
    },
    {
      path: '/company/:companyId',
      name: 'Company',
      component: Company
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/about',
        name: 'About',
        component: About
    }
  ]
})
