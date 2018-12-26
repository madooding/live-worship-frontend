import Vue from 'vue'
import Router from 'vue-router'
import Me from '@/pages/Me'
import Session from '@/pages/Session.vue'
import LivePage from '@/pages/LivePage.vue'
import Login from '@/pages/Login'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Me',
      component: Me
    },
    {
      path: '/session',
      name: 'Session',
      component: Session
    },
    {
      path: '/live',
      name: 'Live',
      component: LivePage
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
