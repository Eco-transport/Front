import Vue from 'vue'
import Router from 'vue-router'
import LandingPage from "@/views/LandingPage";
import Mapa from "@/views/Mapa";
import Terminos from "@/views/Terminos";



Vue.use(Router)

export default new Router({ 
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'landingpage',
      component: LandingPage
    },
    {
      path: '/mapa',
      name: 'mapa',
      component: Mapa
    },
    {
      path: '/terminos',
      name: 'terminos',
      component: Terminos
    }
  ]
})
