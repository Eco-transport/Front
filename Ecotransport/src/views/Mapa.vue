<template>
    <div class="body" >
    <HeaderUser></HeaderUser>

    <br /><br />

    <div class="col md-8">
      <h1 class="h12">Encuentre la estación mas cercana</h1>
      <h2 class="h12">¡Vamos, {{ nombre_user }}!</h2>
    </div>

    <br /><br />

    <img class="Map" src="../assets/MapEco.png" alt="Mapa Ecotransport">

    <br><br>
    <div class="row">
      <!-- IZQUIERDA -->
      <div class="col">
        <h2></h2>
        <br><br />
        <br />
        <ul
          v-for="estacion in lista1"
          :key="estacion.id"
          style="list-style: none">
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
      </div>

      <!-- CENTRO -->
      <div class="col">
        <h2>Puntos</h2>
        <br><br />
        <br />
        <ul
          v-for="estacion in lista2"
          :key="estacion.id"
          style="list-style: none">
          <div v-if="estacion.available > 0">
            <li class="estacion">
              <h2 v-on:click="alquilar(estacion.id)">
                📍{{ estacion.stationName }}
              </h2>
            </li>
          </div>
          <del v-else>
            <h2>📍{{ estacion.stationName }}</h2>
          </del>

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
      </div>

      <!-- DERECHA -->
      <div class="col">
        <h2></h2>
        <br><br />
        <br />
        <ul
          v-for="estacion in lista3"
          :key="estacion.id"
          style="list-style: none">
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
      </div>
    </div>

    <br /> <br>
    <div class="row justify-content-center">
      <div class="container">
        <a href="https://api.whatsapp.com/send?phone=3195748728" class="mx-2">
          <img
            src="https://anthoncode.com/wp-content/uploads/2019/01/whatsapp-2.png"
            alt="whatsapp"
            height="100"
            width="100"/>
        </a>
      </div>
    </div>

    <div class="row justify-content-center">
      <div class="container">
        <h6>¡Escríbenos por WhatsApp!</h6>
      </div>
    </div>
    <br />
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
        ListaEstaciones: [],
        lista1:[],
        lista2:[],
        lista3:[],
        nombre_user: ""
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

            let tmp1 = this.ListaEstaciones;
            let tmp2 = this.ListaEstaciones;
            let tmp3 = this.ListaEstaciones;
            var numAux = this.ListaEstaciones.length;
            var stationPerColumn = Math.floor(numAux / 3);
            var excedent = numAux - (stationPerColumn * 3);
            if(excedent == 1) {
              var firtColumn = stationPerColumn + 1;
              var secondColumn = stationPerColumn;
              var thirdColumn = stationPerColumn;
            } else if (excedent==2) {
              var firtColumn = stationPerColumn + 1;
              var secondColumn = stationPerColumn + 1;
              var thirdColumn = stationPerColumn;
            } else if (excedent==0){
              var firtColumn = stationPerColumn;
              var secondColumn = stationPerColumn;
              var thirdColumn = stationPerColumn;
            }
            for(let i = 0; i < firtColumn; i++) {this.lista1.push(tmp1.pop());}
            for(let i = 0; i < secondColumn; i++){this.lista2.push(tmp2.pop());}
            for(let i = 0; i < thirdColumn; i++){this.lista3.push(tmp3.pop());}

          });
          axios.get( "http://localhost:8080/user/getNames", { params: { access_token: getAuthenticationToken( ) } } )
          .then( response => {
            this.nombre_user = response.data
            } );
        }
    }
  };
</script>

<style scoped>
  li.estacion:hover {
    color: #55dbcb;
    cursor: pointer;
  }

  h1,h2,h3,h4,h5 {
    font-family: "Montserrat", sans-serif;
    color: white;
  }

  li,ul {
    list-style: none;
    color: white;
  }

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .body {
    height: 100vh;
    overflow: auto;   /* Arregla problema de imagen salida */
    background-size: cover;
    font-family: "Montserrat", sans-serif;
    background-color: #0e0f1c;
    opacity: 1;
    background: radial-gradient(circle, transparent 20%, #0e0f1c 20%, #0e0f1c 80%, transparent 80%, transparent), radial-gradient(circle, transparent 20%, #0e0f1c 20%, #0e0f1c 80%, transparent 80%, transparent) 27.5px 27.5px, linear-gradient(#00425e 2.2px, transparent 2.2px) 0 -1.1px, linear-gradient(90deg, #00425e 2.2px, #0e0f1c 2.2px) -1.1px 0;
    background-size: 55px 55px, 55px 55px, 27.5px 27.5px, 27.5px 27.5px;
  }

  .Map{
    width: 80%;
  }
</style>
