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
              name="idBicicleta"
              id="idBicicleta"
              v-model="form.idBicicleta"
            />
          </div>
        </div>

        <div class="form-group left">
          <label for="" class="control-label col-sm-2">Serial</label>
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control"
              name="serial"
              id="serial"
              v-model="form.serial"
            />
          </div>
        </div>
        <div class="form-group left">
          <label for="" class="control-label col-sm-2">Status</label>
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control"
              name="status"
              id="status"
              v-model="form.status"
            />
          </div>
        </div>
        <div class="form-group left row">
          <div class="col">
            <label for="" class="control-label col-sm-3">Id de estación</label>
            <div class="col-sm-7">
              <input
                type="text"
                class="form-control"
                name="idEstacion"
                id="idEstacion"
                v-model="form.idEstacion"
              />
            </div>
          </div>
        </div>

        <div class="form-group left row">
          <div class="col">
            <label for="" class="control-label col-sm-3">Vendedor</label>
            <div class="col-sm-7">
              <input
                type="text"
                class="form-control"
                name="vendedor"
                id="vendedor"
                v-model="form.vendedor"
              />
            </div>
          </div>
        </div>

        <div><br /><br /><br /></div>
        <div class="form-group">
          <a
            href="/admin-ciclas"
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
        idBicicleta: "",
        serial: "",
        status: "",
        idEstacion: "",
        vendedor: ""
      }
    };
  },
  methods: {
    editar() {
      let json = {
        id: this.form.idBicicleta,
        vendor: this.form.vendedor,
        bicycleSerial: this.form.serial,
        bicycleStatus: this.form.status,
        stationId: this.form.idEstacion
      };
      axios.post("http://localhost:8080/bicycle/save/", json).then(data => {
      });
    },
    salir() {
      this.$router.push("/admin-ciclas");
    },
    eliminar() {
      var enviar = {
        idBicicleta: this.form.idBicicleta
      };
      axios
        .delete("http://localhost:8080/bicycle/" + this.form.idBicicleta)
        .then(datos => {
          console.log(datos);
          this.$router.push("/admin-ciclas");
        });
    }
  },

  mounted: function() {
    this.form.idBicicleta = this.$route.params.id;
    axios
      .get("http://localhost:8080/bicycle/findBicycle/" + this.form.idBicicleta)
      .then(datos => {
        this.form.serial = datos.data.bicycleSerial;
        this.form.status = datos.data.bicycleStatus;
        this.form.idEstacion = datos.data.stationId;
        this.form.vendedor = datos.data.vendor;

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
