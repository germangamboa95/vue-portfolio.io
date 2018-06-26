import Vue from 'vue'
import Router from 'vue-router'

import HomePage from '@/containers/home'
import Projects from '@/components/projects'
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
      path: '/projects',
      name: 'Projects',
      component: Projects
    },
    {
      path: '/resume',
      name: 'Resume',
      component: Resume
    }
  ]
})
