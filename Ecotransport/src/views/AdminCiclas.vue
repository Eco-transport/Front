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
      <h2 class="h12">Selecciona la estacion para administrar las bicicletas</h2>
      
    </div>

    <br /><br />

    <div class="row">
     
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
              <h2 v-on:click="listaCiclas(estacion.id)">
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
            <h6>Ciudad: {{ estacion.city }}</h6>
          </li>
          <br /><br />
        </ul>
        <!-- <a type="button" class="btn btn-success" href="/editar-estacion">Editar</a> -->
      </div>
    </div>

    <br />

  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import axios from "axios";
import { getAuthenticationToken } from "@/dataStorage";

export default {
  name: "adminciclas",
  beforeCreate() {
    if (!getAuthenticationToken()) {
      this.$router.push({ name: "IniciarSesion" });
    }
  },
  data() {
    return {
      ListaEstaciones: []
      //idEstacion: 1,
    };
  },
  components: {
    Header
  },
  methods: {
    listaCiclas(id) {
      this.$router.push("/adminciclasperestacion/" + id);
    }
  },
  mounted: function() {
    axios.get("http://localhost:8080/station").then(data => {
      this.ListaEstaciones = data.data;
      console.log(data.data);
    });
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Lobster&family=Pacifico&family=Padauk:wght@700&display=swap");

li.estacion:hover {
  color: #55dbcb;
  cursor: pointer;
}

h2,
h3,
h4,
h5 {
  font-family: "Montserrat", sans-serif;
}
h1 {
  font-family: "Pacifico", cursive;
}

li,
ul {
  list-style: none;
}
</style>