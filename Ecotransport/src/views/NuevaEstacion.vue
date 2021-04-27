<template>
  <div>
    <Header />
    <div class="container">
      <form action="" class="form-horizontal">
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
          <label for="" class="control-label col-sm-2">Direccion</label>
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
  


        <div class="form-group">
          <button type="button" class="btn btn-primary" v-on:click="guardar()">
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
    <!-- <Footer /> -->
  </div>
</template>
<script>
import Header from "@/components/Header.vue";
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
        inventario: ""        
      }
    };
  },
  components: {
    Header    
  },
  methods: {
    guardar() {
      let json = {        
        "nombre": this.form.nombre,
        "direccion": this.form.direccion,
        "telefono": this.form.telefono,
        "totalVehiculos": this.form.inventario
      };     

      axios
        .post("http://localhost:8080/API/estacion/guardar", json)
        .then(data => {
          console.log(data);
          this.makeToast("Hecho", "Paciente creado", "success");
          console.log("entro a la función");
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
</style>
