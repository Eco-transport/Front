import Vue from 'vue'
import Router from 'vue-router'

import LandingPage from "@/views/LandingPage";
import Mapa from "@/views/Mapa";
import Terminos from "@/views/Terminos";
import Registro from "@/views/Registro";
import ConfirmarRegistro from "@/views/ConfirmarRegistro";
import RegistroConfirmado from "@/views/RegistroConfirmado";
import EliminarCuenta1 from "@/views/EliminarCuenta1";
import CuentaEliminada from "@/views/CuentaEliminada";
import OlvPass from "../views/OlvPass";
import IniciarSesion from "@/views/IniciarSesion";
import EditarEstacion from "@/views/EditarEstacion";


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
    },
    {
      path: '/registro',
      name: 'registro',
      component: Registro
    },
    {
      path: '/ConfirmarRegistro',
      name: 'ConfirmarRegistro',
      component: ConfirmarRegistro
    },
    {
      path: '/RegistroConfirmado',
      name: 'RegistroConfirmado',
      component: RegistroConfirmado
    },
    {
      path: '/EliminarCuenta1',
      name: 'EliminarCuenta1',
      component: EliminarCuenta1
    },

    {
      path: '/CuentaEliminada',
      name: 'CuentaEliminada',
      component: CuentaEliminada
    },
    {
      path: '/olvpass',
      name: 'OlvPass',
      component: OlvPass
    },
    {
      path: '/iniciar-sesion',
      name: 'IniciarSesion',
      component: IniciarSesion
    },
    {
      path: '/editar-estacion',
      name: 'EditarEstcion',
      component: EditarEstacion
    }
    ]
})
