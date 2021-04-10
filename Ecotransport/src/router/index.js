import Vue from 'vue'
import Router from 'vue-router'
import LandingPage from "@/views/LandingPage";
import Mapa from "@/views/Mapa";


Vue.use(Router)

export default new Router({
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
  ]
})
