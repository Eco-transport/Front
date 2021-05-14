<template>
  <div>
    <Header></Header>
    <img
      src="@/assets/Vamos.png"
      style="max-width: 100%; width: auto; height: auto"
      alt="Vamos"
    />

    <br /><br />
    <!-- <div class= "usuario" v-if="test">      
      {{console.log(test)}}
    </div> -->
    <div class="col md-8">
      <h1 class="h12">Encuentre la estación mas cercana</h1>
      <h2 class="h12">¡Vamos!</h2>
    </div>

    <br /><br />

    <div class="row">
      <!-- Izquierda -->
      <div class="col">
        <div>
          <h2>Estamos ubicados en:</h2>
        </div>
        <br />
        <div class="mx-auto">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d63630.807719254124!2d-74.13263037037063!3d4.607362148159379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sco!4v1618082800636!5m2!1ses!2sco"
            width="800"
            height="550"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
      <!-- Derecha -->
      <div class="col">
        <h2>Puntos:</h2>
        <br />
        <ul
          v-for="estacion in ListaEstaciones"
          :key="estacion.idEstacion"
          style="list-style: none"
        >
          <li>
            <h5>📍 {{ estacion.nombre }}</h5>
          </li>
          <li>
            <h6>{{ estacion.direccion }}</h6>
          </li>
          <li>
            <h6>📞 {{ estacion.telefono }}</h6>
          </li>
          <li>
            <h6>Inventario: {{ estacion.totalVehiculos }}</h6>
          </li>
          <br /><br />
        </ul>
        <!-- <a type="button" class="btn btn-success" href="/editar-estacion">Editar</a> -->
      </div>
    </div>

    <br />
    <div class="row justify-content-center">
      <div class="container">
        <a href="https://api.whatsapp.com/send?phone=3195748728" class="mx-2">
          <img
            src="https://anthoncode.com/wp-content/uploads/2019/01/whatsapp-2.png"
            alt="whatsapp"
            height="100"
            width="100"
          />
        </a>
      </div>
    </div>

    <div class="row justify-content-center">
      <div class="container">
        <h6>¡Escribenos a whatsapp!</h6>
      </div>
    </div>
    <br /><br />
    <!-- googleMap -->
    <div>
      <GoogleMapLoader></GoogleMapLoader>
    </div>
  </div>
</template>


<script>
import Header from "@/components/Header.vue";
import axios from "axios";
import { getAuthenticationToken } from "@/dataStorage";

export default {
  name: "mapa",
  beforeCreate() {
    if (!getAuthenticationToken()) {
      this.$router.push({ name: "IniciarSesion" });
    }
  },
  data() {
    return {
      ListaEstaciones: [],
      idEstacion: 1,
    };
  },
  components: {
    Header,
  },
  methods: {
    alquilar(id) {
      this.$router.push("/alquilar/" + id);
    },
  },
  mounted: function () {
    axios.get("http://localhost:8080/API/estacion").then((data) => {
      this.ListaEstaciones = data.data;
    });
  },
};
</script>

<style scoped>
</style>