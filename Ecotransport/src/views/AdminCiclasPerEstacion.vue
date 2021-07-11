<template>
    <div>
        <HeaderAdmin />
        <br /><br />
        <h1>Bienvenido Administrador</h1>
        <h1>Aqui puedes administrar las bicis para tu estacion</h1>
        <br />
      
        <div class="container izquierda">
            <button class="btn btn-primary" v-on:click="nuevo($route.params.id)">
                Agregar Bicicleta
            </button>
            <br /><br />

            <table class="table table-hover">
              <thead>
                <tr>
                    <th scope="col">ID BICICLETA</th>
                    <th scope="col">ID ESTACION</th>
                    <th scope="col">NOMBRE</th>
                    <th scope="col">VENDEDOR</th>
                    <th scope="col">PRECIO COMPRA</th>
                    <th scope="col">ESTADO</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="bicicleta in ListaBicicletas" :key="bicicleta.id" v-on:click="editar($route.params.id,bicicleta.bicycleID)">
                    <th scope="row">{{ bicicleta.bicycleID}}</th>
                    <td>{{ bicicleta.bicycleStationId }}</td>
                    <td>{{ bicicleta.bicycleName }}</td>
                    <td>{{ bicicleta.bicycleVendor }}</td>
                    <td>{{ bicicleta.bicycleBuyPrice }}</td>
                    <td>{{ bicicleta.bicycleState }}</td>
                    
                </tr>

              </tbody>
            </table>

        </div>
        <Footer />
    </div>    
</template>

<script>
import HeaderAdmin from "@/components/HeaderAdmin.vue";
import axios from "axios";
import { getAuthenticationToken } from "@/dataStorage";

export default {
  name: "adminciclasperestacion",
  beforeCreate() {
    if (!getAuthenticationToken()) {
      this.$router.push({ name: "IniciarSesion" });
    }
  },
  data() {
    return {
      ListaBicicletas: null,
      pagina: 1
    };
  },
  components: {
    HeaderAdmin
  },
  methods: {
    editar(idEstacion,bicycleID) {
      this.$router.push("/editarbicicleta/" +idEstacion+bicycleID);
    },
    nuevo(idEstacion) {
      this.$router.push("/nuevabicicleta/"+ idEstacion);
    }
  },
  mounted: function() {
    let Estation = this.$route.params.id;
    console.log("Estacion: ",typeof Estation);
    let bicis = "http://localhost:8080/bicycle/";
    axios.get(bicis).then(data => {
      this.ListaBicis= data.data;
      this.ListaBicicletas = new Array();
                    for (var key in this.ListaBicis) 
                    {
                        var cicla = this.ListaBicis[key];

                        console.log("Test cicla: ",parseInt(cicla.bicycleStationId));                        
                        if (parseInt(cicla.bicycleStationId)=== parseInt(Estation)) {
                            this.ListaBicicletas.push(cicla);
                        }
                    }
    });
  }
};
</script>
<style scoped>
.izquierda {
  text-align: left;
}
</style>
