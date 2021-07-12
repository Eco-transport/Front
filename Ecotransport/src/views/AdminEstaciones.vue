<template>
    <div>
      <div class="body">
        <HeaderAdmin />
        <br /><br />
        <h1>Edite la información de una estación</h1>
        <br />

        <div class="container izquierda">
            <button class="btn btn-success" v-on:click="nuevo()">
                Agregar Estación
            </button>
            <br /><br />

            <table class="table table-hover">
              <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">NOMBRE</th>
                    <th scope="col">DIRECCIÓN</th>
                    <th scope="col">TELEFONO</th>
                    <th scope="col">APERTURA</th>
                    <th scope="col">CIERRE</th>
                    <th scope="col">DISPONIBLES</th>
                    <th scope="col">CIUDAD</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="estacion in ListaEstaciones" :key="estacion.id" v-on:click="editar(estacion.id)">
                    <th scope="row">{{ estacion.id}}</th>
                    <td>{{ estacion.stationName }}</td>
                    <td>{{ estacion.address }}</td>
                    <td>{{ estacion.phone }}</td>
                    <td>{{ estacion.openTime }}</td>
                    <td>{{ estacion.closeTime }}</td>
                    <!-- <td>{{ estacion.inventory }}</td> -->
                    <td>{{ estacion.available }}</td>
                    <td>{{ estacion.city }}</td>
                </tr>

              </tbody>
            </table>

        </div>
        
    </div> 
    <Footer />
  </div>   
</template>

<script>
import HeaderAdmin from "@/components/HeaderAdmin.vue";
import Footer from "@/components/Footer.vue";
import axios from "axios";
import { getAuthenticationToken } from "@/dataStorage";

export default {
  name: "EditarEstaciones",
  beforeCreate() {
    if (!getAuthenticationToken()) {
      this.$router.push({ name: "IniciarSesion" });
    }
  },
  data() {
    return {
      ListaEstaciones: null,
      //pagina: 1
    };
  },
  components: {
    HeaderAdmin,
    Footer
  },
  methods: {
    editar(id) {
      this.$router.push("/editar/" + id);
    },
    nuevo() {
      this.$router.push("/nueva-estacion");
    }
  },
  mounted: function() {
    let direccion = "http://localhost:8080/station/";
    axios.get(direccion).then(data => {
      this.ListaEstaciones = data.data;
    });
  }
};
</script>

<style scoped>

.izquierda {
  text-align: left;
}
.body {
  height: 100vh;
  background-color: rgb(0, 0, 0, 0.2);
  background-size: cover;
  font-family: "Montserrat", sans-serif;
}
.table{  
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(4px);
}
table tbody :hover{
  background-color: rgba(255, 255, 255, 0.2);
}
</style>
