import Vue from 'vue'
import Router from 'vue-router'
import RadioStations from '@/components/RadioStations'
import About from '@/components/About'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'RadioStations',
      component: RadioStations
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ]
})
