<template>
  <div>
    <div
    class="body">
    <HeaderAdmin />
    <div class="container ">
      <div class="row justify-content-center">
        <form action="" class="form-horizontal">
<!--
          <div class="row">
          <div class="col-lg">
          </div></div> -->
        <div class="form-group left">
          <label class="control-label col-sm-2">Serial</label>
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control"
              name="serial"
              id="serial"
              v-model="form.serial"/>
          </div>
        </div>
        <div class="form-group left">
          <label class="control-label col-sm-2">Estación de la bicicleta [ID]</label>
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control"
              name="idEstacion"
              id="idEstacion"
              v-model="form.idEstacion"/>
          </div>
        </div>

        <div class="form-group left">
          <label class="control-label col-sm-2">Referencia</label>
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control"
              name="vendedor"
              id="vendedor"
              v-model="form.vendedor"/>
          </div>
        </div>

<!--        <div class="form-group left">
          <label class="control-label col-sm-2">Estado</label>
          <div class="col-sm-10">
            <select id="status" name="status" v-mode="form.status">
              <b-select-option value="volvo">{{status}}</b-select-option>
              <b-select-option value="volvo">Disponible</b-select-option>
              <b-select-option value="volvo">Ocupada</b-select-option>
            </select>
              &lt;!&ndash;type="text"
              class="form-control"
              name="status"
              id="status"
              v-model="form.status"/>&ndash;&gt;
          </div>
        </div>-->

        <!-- Aquí debería ir un div para justificar a la derecha -->


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
import HeaderAdmin from "@/components/HeaderAdmin";
import axios from "axios";
import { getAuthenticationToken } from "@/dataStorage";

export default {
  name: "nuevabicicleta",
  components: {
    slide: 0,
    sliding: null,
    HeaderAdmin
  },

  data: function() {
    return {
      form: {
        serial: "",
        idEstacion: "",
        vendedor: "",
        status: "Disponible"
      },
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
    guardar() {
      let json = {
        "vendor": this.form.vendedor,
        "bicycleSerial": this.form.serial,
        "bicycleStatus": this.form.status,
        "stationId": this.form.idEstacion
      };

      axios
        .post("http://localhost:8080/bicycle/save", json)
        .then(data => {
          this.$router.push("/admin-ciclas");
        })
        .catch(e => {
          console.log(e);
          this.makeToast("Error", "Error al guardar", "error");
        });

        this.editarEstacion(this.form.idEstacion);
    },
     editarEstacion(idEstacionInt) {
      axios
        .post("http://localhost:8080/station/addBicycle/" + idEstacionInt)
        .then(datos => {
          this.nombre = datos.data.stationName;
          this.direccion = datos.data.address;
          this.telefono = datos.data.phone;
          this.apertura = datos.data.openTime;
          this.cierre = datos.data.closeTime;
          this.totalVehiculos = datos.data.inventory;
          this.disponibles = datos.data.available;
          this.ciudad = datos.data.city;

          console.log(this.form);
        });
    },
    salir() {
      this.$router.push("/admin-ciclas");
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

.body {
  height: 100vh;
  overflow: auto;   /* Arregla problema de imagen salida */
  background-size: cover;
  font-family: "Montserrat", sans-serif;
  background-color: #10100d;
  opacity: 1;
  background-image:  repeating-radial-gradient( circle at 0 0, transparent 0, #10100d 11px ), repeating-linear-gradient( #322d0855, #322d08 );
}


.left {
  text-align: left;
}

form {
  width: 40%;
  font-size: 20px;
}
label {
  color: white;
}
input {
  background-color: rgba(255, 255, 255, 0.2);
  border: solid 1px rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(4px);
  color: white;
}
</style>
