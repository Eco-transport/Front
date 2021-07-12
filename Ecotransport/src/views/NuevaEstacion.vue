<template>
<div>
    <div class="body">
    <HeaderAdmin />
    <div class="container ">
      <div class="row justify-content-center">
        <form action="" class="form-horizontal">
<!-- 
          <div class="row">
          <div class="col-lg">
          </div></div> -->
        <div class="form-group left">
          <label for="" class="control-label col-sm-2">Nombre</label>
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control"
              name="nombre"
              id="nombre"
              v-model="form.nombre"
            />
          </div>
        </div>
        <div class="form-group left">
          <label for="" class="control-label col-sm-2">Direccion</label>
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control"
              name="direccion"
              id="direccion"
              v-model="form.direccion"
            />
          </div>
        </div>
        
        <div class="form-group left">
          <label for="" class="control-label col-sm-2">Teléfono</label>
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control"
              name="telefono"
              id="telefono"
              v-model="form.telefono"
            />
          </div>
        </div>

        <div class="form-group left">
          <label for="" class="control-label col-sm-2">Apertura</label>
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control"
              name="Apertura"
              id="Cierre"
              v-model="form.apertura"
            />
          </div>
        </div>

        <!-- Aquí debería ir un div para justificar a la derecha -->

        <div class="form-group left">
          <label for="" class="control-label col-sm-2">Cierre</label>
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control"
              name="cierre"
              id="cierre"
              v-model="form.cierre"
            />
          </div>
        </div>

        <div class="form-group left">
          <label for="" class="control-label col-sm-2">Inventario</label>
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control"
              name="inventario"
              id="inventario"
              v-model="form.inventario"
            />
          </div>
        </div>

        <div class="form-group left">
          <label for="" class="control-label col-sm-2">Disponibles</label>
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control"
              name="disponibles"
              id="disponibles"
              v-model="form.disponibles"
            />
          </div>
        </div>

        <div class="form-group left">
          <label for="" class="control-label col-sm-2">Ciudad</label>
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control"
              name="ciudad"
              id="ciudad"
              v-model="form.ciudad"
            />
          </div>
        </div>
  


        <div class="form-group">
          <button type="button" class="btn btn-success" v-on:click="guardar()">
            Guardar
          </button>
          <button
            type="button"
            class="btn btn-dark margen"
            v-on:click="salir()"
          >
            Salir
          </button>
        </div>
      </form>
      </div>
    </div>

  </div>
      <!-- <Footer /> -->
</div>
</template>
<script>
import HeaderAdmin from "@/components/HeaderAdmin.vue";
import Footer from "@/components/Footer.vue";

//import Footer from '@/components/Footer.vue'
import axios from "axios";
export default {
  name: "Nuevo",
  data: function() {
    return {
      form: {        
        nombre: "",
        direccion: "",
        telefono: "",
        apertura: "",
        cierre: "",
        totalVehiculos: 0,
        disponibles: 0,
        ciudad:""        
      }
    };
  },
  components: {
    HeaderAdmin , 
    Footer   
  },
  methods: {
    guardar() {
      let json = {                
        "stationName": this.form.nombre,
        "address": this.form.direccion,
        "phone": this.form.telefono,
        "openTime": this.form.apertura,
        "closeTime": this.form.cierre,
        "inventory": this.form.totalVehiculos,
        "available": this.form.disponibles,
        "city": this.form.ciudad
      };     

      axios
        .post("http://localhost:8080/station/save", json)
        .then(data => {
          console.log(data);
          /* this.makeToast("Hecho", "Paciente creado", "success");
          console.log("entro a la función"); */
          this.$router.push("/admin-estaciones");
        })
        .catch(e => {
          console.log(e);
          this.makeToast("Error", "Error al guardar", "error");
        });
    },
    salir() {
      this.$router.push("/admin-estaciones");
    },
    makeToast(titulo, texto, tipo) {
      this.toastCount++;
      this.$bvToast.toast(texto, {
        title: titulo,
        variant: tipo,
        autoHideDelay: 5000,
        appendToast: true
      });
    }
  }
};
</script>
<style scoped>
.left {
  text-align: left;
}

.body {
  height: auto;
  background-color: rgb(0, 0, 0, 0.2);
  background-size: cover;
  font-family: "Montserrat", sans-serif;
}

form{
  width: 20%;
}

</style>
