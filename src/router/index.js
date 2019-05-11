import Vue from 'vue'
import Router from 'vue-router'
import RadioStations from '@/components/RadioStations'
import About from '@/components/About'
import Parameters from '@/components/Parameters'
import Contact from '@/components/Contact'
import LegalNotice from "../components/LegalNotice";

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
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/parameters',
      name: 'Parameters',
      component: Parameters
    },
    {
      path: '/legal-disclaimer',
      name: 'Mentions légales',
      component: LegalNotice
    }
  ]
})
