import Vue from 'vue'
import Router from 'vue-router'

import LandingPage from "@/views/LandingPage";
import Mapa from "@/views/Mapa";
import Terminos from "@/views/Terminos";
import Registro from "@/views/Registro";
import EliminarCuenta1 from "@/views/EliminarCuenta1";
import CuentaEliminada from "@/views/CuentaEliminada";
import OlvPass from "@/views/OlvPass";
import IniciarSesion from "@/views/IniciarSesion";
import Error from "@/views/Error";
import EditarEstacion from "@/views/EditarEstacion";
import NuevaEstacion from "@/views/NuevaEstacion";
import AdminEstaciones from "@/views/AdminEstaciones";
import ClienteSolicitudes from "@/views/ClienteSolicitudes";
import Alquilar from "@/views/Alquilar";

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
      path: '/eliminar-cuenta',
      name: 'eliminarcuenta',
      component: EliminarCuenta1
    },

    {
      path: '/cuenta-eliminada',
      name: 'cuentaeliminada',
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
      path: '*',
      name: 'error',
      component: Error
    }
    ,
    {
      path: '/editar/:id',
      name: 'editar',
      component: EditarEstacion
    },
    {
      path: '/nueva-estacion',
      name: 'nuevo',
      component: NuevaEstacion
    },
    {
      path: '/admin-estaciones',
      name: 'adminEstaciones',
      component: AdminEstaciones
    },
    {
      path: '/clientesolicitudes',
      name: 'clientesolicitudes',
      component: ClienteSolicitudes
    },
    {
      path: '/alquilar/:id',
      name: 'alquilar',
      component: Alquilar
    }
    ]
})
