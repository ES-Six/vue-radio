import Vue from 'vue'
import Router from 'vue-router'
import RadioStations from '@/components/RadioStations'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'RadioStations',
      component: RadioStations
    }
  ]
})
