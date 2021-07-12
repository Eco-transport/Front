<template>
  <div
    class="body"
    style="background-image: url('https://images.pexels.com/photos/1545505/pexels-photo-1545505.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');"
  >
    <HeaderAdmin />
    <br /><br />
    <div class="container" v-on:submit.prevent="obteniendoData">
      <form action="" class="form-horizontal">
        <div class="form-group left">
          <label for="" class="control-label col-sm-2">ID</label>
          <div class="col-sm-10">
            <input
              disabled
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
            <label for="" class="control-label col-sm-3">Apertura</label>
            <div class="col-sm-7">
              <input
                type="text"
                class="form-control"
                name="Apertura"
                id="Apertura"
                v-model="form.apertura"
              />
            </div>
          </div>
        </div>

        <div class="form-group left row">
          <div class="col">
            <label for="" class="control-label col-sm-3">Cierre</label>
            <div class="col-sm-7">
              <input
                type="text"
                class="form-control"
                name="cierre"
                id="cierre"
                v-model="form.cierre"
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

        <div class="form-group left row">
          <div class="col">
            <label for="" class="control-label col-sm-3">Disponibles</label>
            <div class="col-sm-7">
              <input
                type="text"
                class="form-control"
                name="dispnibles"
                id="disponibles"
                v-model="form.disponibles"
              />
            </div>
          </div>
        </div>

        <div class="form-group left row">
          <div class="col">
            <label for="" class="control-label col-sm-3">Ciudad</label>
            <div class="col-sm-7">
              <input
                type="text"
                class="form-control"
                name="Ciudad"
                id="Ciudad"
                v-model="form.ciudad"
              />
            </div>
          </div>
        </div>

        <div><br /><br /><br /></div>
        <div class="form-group">
          <a
            href="/admin-estaciones"
            class="btn btn-primary"
            v-on:click="editar()"
            >Editar</a
          >

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
    <br />
  </div>
</template>
<script>
import HeaderAdmin from "@/components/HeaderAdmin.vue";

import axios from "axios";
export default {
  name: "Editar",
  components: {
    HeaderAdmin
  },
  data: function() {
    return {
      form: {
        idEstacion: "",
        nombre: "",
        direccion: "",
        telefono: "",
        apertura: "",
        cierre: "",
        totalVehiculos: 0,
        disponibles: 0,
        ciudad: ""
      }
    };
  },
  methods: {
    editar() {
      let json = {
        id: this.form.idEstacion,
        stationName: this.form.nombre,
        address: this.form.direccion,
        phone: this.form.telefono,
        openTime: this.form.apertura,
        closeTime: this.form.cierre,
        inventory: this.form.totalVehiculos,
        available: this.form.disponibles,
        city: this.form.ciudad
      };
      axios.post("http://localhost:8080/station/save/", json).then(data => {
        console.log(data);
      });
    },
    salir() {
      this.$router.push("/admin-estaciones");
    },
    eliminar() {
      var enviar = {
        idEstacion: this.form.idEstacion
      };
      axios
        .delete("http://localhost:8080/station" + this.form.idEstacion)
        .then(datos => {
          console.log(datos);
          this.$router.push("/admin-estaciones");
        });
    }
  },

  mounted: function() {
    this.form.idEstacion = this.$route.params.id;
    axios
      .get("http://localhost:8080/station/" + this.form.idEstacion)
      .then(datos => {
        this.form.nombre = datos.data.stationName;
        this.form.direccion = datos.data.address;
        this.form.telefono = datos.data.phone;
        this.form.apertura = datos.data.openTime;
        this.form.cierre = datos.data.closeTime;
        this.form.totalVehiculos = datos.data.inventory;
        this.form.disponibles = datos.data.available;
        this.form.ciudad = datos.data.city;

        console.log(this.form);
      });
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
.body {
  height: auto;
  background-color: rgb(0, 0, 0, 0.5);
  background-size: cover;
  font-family: "Montserrat", sans-serif;
}

.control-label {
  color: white;
}

form {
  width: 40%;
  font-size: 20px;
}
#idEstacion {
  background-color: rgba(255, 255, 255, 0.2);
  border: solid 1px rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(4px);
  color: white;
}
input {
  background-color: rgba(255, 255, 255, 0.2);
  border: solid 1px rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(4px);
  color: white;
}
</style>
