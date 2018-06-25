import Vue from 'vue'
import Router from 'vue-router'

import HomePage from '@/containers/home'
import Blog from '@/containers/blog'
import Resume from '@/containers/resume'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/blog',
      name: 'Blog',
      component: Blog
    },
    {
      path: '/resume',
      name: 'Resume',
      component: Resume
    }
  ]
})
