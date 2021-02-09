import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Company from '@/pages/Company'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/company',
      name: 'Company',
      component: Company
    },
  ]
})
