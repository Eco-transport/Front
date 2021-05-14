<template>
  <div class="Header">
    <!--Header-->
    <nav class="navbar navbar-expand-lg navbar-dark" style="background-color: #295135">
      <a class="navbar-brand" href="/">
        <img src="@/assets/Logo.png" alt="Logo Ecotransport" height="40" />
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
      <!-- <div class= "usuario" v-if="this.$hayLogin">
        {{this.$nombreGlobal}}
      </div> -->
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-md-auto">
          <li class="nav-item">
            <a class="nav-link" href="/mapa">Puntos de atención</a>
          </li>
           <li class="nav-item">
            <a class="nav-link" href="/cliente-solicitudes">Historial</a>
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
  name: "Header",
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
  color: #faf8f8;
}
</style>