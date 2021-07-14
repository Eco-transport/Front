<template>
  <div
    class="body"
    style="background-image: url('https://images.pexels.com/photos/409701/pexels-photo-409701.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');"
  >
    <HeaderUser></HeaderUser>

    <br /><br />
    
    <div class="col md-8">
      <h1 class="h12">Encuentre la estación mas cercana</h1>
      <h2 class="h12">¡Bienvenidos!</h2>
    </div>

    <br /><br />

    <div class="row">
      <!-- Izquierda -->
      <!-- <div class="col">
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
      </div> -->



      <!-- Derecha -->
      <div class="col">
        <h2>Puntos:</h2>
        <br />
        <ul
          v-for="estacion in ListaEstaciones"
          :key="estacion.id"
          style="list-style: none"
        >
          <div v-if="estacion.available > 0">
            <li class="estacion">
              <h2 v-on:click="alquilar(estacion.id)">
                📍 {{ estacion.stationName }}
              </h2>
            </li>
          </div>
          <strike v-else>
            <h2>📍 {{ estacion.stationName }}</h2>
          </strike>

          <li>
            <h6>{{ estacion.address }}</h6>
          </li>
          <li>
            <h6>📞 {{ estacion.phone }}</h6>
          </li>

          <li>
            <h6>Apertura: {{ estacion.openTime }}</h6>
          </li>
          <li>
            <h6>Cierre: {{ estacion.closeTime }}</h6>
          </li>

          <li>
            <div v-if="estacion.available > 0">
              <h6>🟢 Disponibles: {{ estacion.available }}</h6>
            </div>
            <div v-else>
              <h6>🔴 Disponibles: {{ estacion.available }}</h6>
            </div>
          </li>
          <li>
            <h6>Ciudad: {{ estacion.city }}</h6>
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
    <!-- <div>
      <GoogleMapLoader></GoogleMapLoader>
    </div> -->
  </div>
</template>

<script>
import HeaderUser from "@/components/HeaderUser.vue";
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
      ListaEstaciones: []      
    };
  },
  components: {
    HeaderUser
  },
  methods: {
    alquilar(id) {
      this.$router.push("/alquilar/" + id);
    }
  },
  mounted: function() {
    
      if (getAuthenticationToken()) {
        axios.get("http://localhost:8080/station")
        .then(data => {
          this.ListaEstaciones = data.data;  
          console.log(data.data);
        });  
        
        
      }

      
    
  }
};
</script>

<style scoped>
/* @import url("https://fonts.googleapis.com/css2?family=Lobster&family=Pacifico&family=Padauk:wght@700&display=swap"); */

li.estacion:hover {
  color: #55dbcb;
  cursor: pointer;
}

h2,h3,h4,h5 {
  font-family: "Montserrat", sans-serif;
  color: white;
}
h1 {
  font-family: "Pacifico", cursive;
  color: white;
}

li,ul {
  list-style: none;
  color: white;
}

.body {
  height: auto;
  background-color: rgb(0, 0, 0, 0.8);
  background-size: cover;
  font-family: "Montserrat", sans-serif;
}
</style>
