<template>
  <div>
      <div
    class="body">
        <HeaderAdmin />
        <br /><br />
        <h1>Edite la información de una bicicleta</h1>
        <br />

        <div class="container izquierda">
            <button class="btn btn-success" v-on:click="nuevo()">
                Agregar bicicleta
            </button>
            <br /><br />

            <table class="table table-hover">
              <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">SERIAL</th>
                    <th scope="col">ESTADO</th>
                    <th scope="col">ID DE ESTACIÓN</th>
                    <th scope="col">VENDEDOR</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="bicicleta in ListaBicicletas" :key="bicicleta.id" v-on:click="editar(bicicleta.id)">
                    <th scope="row">{{ bicicleta.id}}</th>
                    <td>{{ bicicleta.bicycleSerial }}</td>
                    <td>{{ bicicleta.bicycleStatus }}</td>
                    <td>{{ bicicleta.stationId }}</td>
                    <td>{{ bicicleta.vendor }}</td>

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
      ListaBicicletas: []
    };
  },
  components: {
    HeaderAdmin
  },
  methods: {
    editar(id) {
      this.$router.push("/editar-bicicleta/" + id);
    },
    nuevo() {
      this.$router.push("/nueva-bicicleta");
    }
  },
  mounted: function() {
    axios.get("http://localhost:8080/bicycle").then(data => {
      this.ListaBicicletas = data.data;
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
  overflow: auto;   /* Arregla problema de imagen salida */
  background-size: cover;
  font-family: "Montserrat", sans-serif;
background-color: #10100d;
opacity: 1;
background-image:  repeating-radial-gradient( circle at 0 0, transparent 0, #10100d 11px ), repeating-linear-gradient( #322d0855, #322d08 );
}

h1{
  color: white;
}
.table{
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(4px);
  color:white;
}
table tbody :hover{
  background-color: rgba(255, 255, 255, 0.7);
  color: black
}
</style>
