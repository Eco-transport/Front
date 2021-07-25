<template>
  <div class="Header">
    <!--Header-->
    <nav class="navbar navbar-expand-md navbar-ligth">
      <a class="navbar-brand" href="/bienvenido-user">
        <img src="@/assets/LogoHeader.png" alt="Logo Ecotransport" height="40" />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-md-auto">
          <li class="nav-item">
            <a class="nav-link" href="/mapa">Alquilar</a>
          </li>
           <li class="nav-item">
            <a class="nav-link" href="/cliente-solicitudes">Pedidos</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/terminos">Términos</a>
          </li>

          <li class="nav-item">
            <a class="nav-link" v-on:click="cerrarSesion" href="/">Cerrar sesión</a>
          </li>
          
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import Vue from "vue"
import {deleteAuthenticationToken} from '@/dataStorage';
export default {
  name: "HeaderAdmin",
  props: {
    nombre: String,
  },
  methods: {
    cerrarSesion(){
      deleteAuthenticationToken();
    }
  }
};
</script>

<style scoped>
.usuario{
  color: #ffffff;
}

a{
    color: white
}

.navbar{    
  background-color: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(6px);
}

.nav-link{        
  text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.8);
}
</style>