<template>
  <div>
    <Header />
    <br /><br />
    <div class="container" v-on:submit.prevent="obteniendoData">
      <form action="" class="form-horizontal">
        <div class="form-group left">
          <label for="" class="control-label col-sm-2">ID</label>
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control"
              name="idEstacion"
              id="idEstacion"
              v-model="form.idEstacion"
            />
          </div>
        </div>


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
        <div class="form-group left row">
          <div class="col">
            <label for="" class="control-label col-sm-3">Teléfono</label>
            <div class="col-sm-7">
              <input
                type="text"
                class="form-control"
                name="telefono"
                id="telefono"
                v-model="form.telefono"
              />
            </div>
          </div>
        </div>
        <div class="form-group left row">
          <div class="col">
            <label for="" class="control-label col-sm-3">Inventario</label>
            <div class="col-sm-7">
              <input
                type="text"
                class="form-control"
                name="inventario"
                id="inventario"
                v-model="form.totalVehiculos"
              />
            </div>
          </div>
        </div>  
        <div><br><br><br></div>
        <div class="form-group">

          <button type="button" class="btn btn-primary" v-on:click="editar()">
            Editar
          </button>

          <button
            type="button"
            class="btn btn-danger margen"
            v-on:click="eliminar()"
          >
            Eliminar
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
    <!-- <Footer />   -->
  </div>
</template>
<script>
import Header from "@/components/Header.vue";

import axios from "axios";
export default {
  name: "Editar",
  components: {
    Header

  },
  data: function() {
    return {
      form: {
        idEstacion: "",
        nombre: "",
        direccion: "",
        telefono: "",
        totalVehiculos: 0
      }
    };
  },
  methods: {
    
    editar() {
      let json = {
        "idEstacion": this.form.idEstacion,
        "nombre": this.form.nombre,
        "direccion": this.form.direccion,
        "telefono": this.form.telefono,
        "totalVehiculos": this.form.totalVehiculos
      };
      axios
        .post("http://localhost:8080/API/estacion/guardar", json)
        .then(data => {
          console.log(data);
        });
    },
    salir() {
      this.$router.push("/admin-estaciones");
    } , 
      eliminar(){
        var enviar = {
            "idEstacion" : this.form.pacienteId            
        };
        axios.delete("http://localhost:8080/API/estacion/"+ this.form.idEstacion)
        .then( datos => {
            console.log(datos);
           this.$router.push("/admin-estaciones");
        });
      }
  },

  mounted:function(){
      this.form.idEstacion = this.$route.params.id;
      axios.get("http://localhost:8080/API/estacion/"+ this.form.idEstacion)
      .then( datos => {
        
        this.form.nombre = datos.data.nombre;
        this.form.direccion = datos.data.direccion;
        this.form.telefono = datos.data.telefono;
        this.form.totalVehiculos = datos.data.totalVehiculos;
        
        console.log(this.form);
      })
     
  } 
};
</script>
<style scoped>
.left {
  text-align: left;
}
.margen {
  margin-left: 15px;
  margin-right: 15px;
}
</style>
