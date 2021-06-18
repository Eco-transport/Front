<template>
  <div>
    <Header />
    <br /><br />
    <div class="container" v-on:submit.prevent="obteniendoData">
      <form action="" class="form-horizontal">
        <div class="form-group left">
          <label for="" class="control-label col-sm-2">ID Bicicleta</label>
          <div class="col-sm-10">
            <input
              type="text" readonly
              class="form-control"
              name="idEstacion"
              id="idEstacion"
              v-model="form.idCicla"
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
          <label for="" class="control-label col-sm-2">Vendedor</label>
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control"
              name="direccion"
              id="direccion"
              v-model="form.vendedor"
            />
          </div>
        </div>
        <div class="form-group left row">
          <div class="col">
            <label for="" class="control-label col-sm-3">Precio</label>
            <div class="col-sm-7">
              <input
                type="text"
                class="form-control"
                name="telefono"
                id="telefono"
                v-model="form.precio"
              />
            </div>
          </div>
        </div>
        <div class="form-group left row">
          <div class="col">
            <label for="" class="control-label col-sm-3">Estado</label>
            <div class="col-sm-7">
              <input
                type="text"
                class="form-control"
                name="Apertura"
                id="Apertura"
                v-model="form.estado"
              />
            </div>
          </div>
        </div>
       <div class="form-group left row">
          <div class="col">
            <label for="" class="control-label col-sm-3">ID Estacion</label>
            <div class="col-sm-7">
              <input
                type="text"
                class="form-control"
                name="cierre"
                id="cierre"
                v-model="form.idEstacion"
              />
            </div>
          </div>
        </div>
       <div><br /><br /><br /></div>
        <div class="form-group">
          <a
            
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
        idCicla:"",
        nombre:"",
       
      }
    };
  },
  methods: {
    editar() {
      let json = {
        bicycleID: this.form.idCicla,
        bicycleName: this.form.nombre,
        bicycleVendor: this.form.vendedor,
        bicycleBuyPrice: this.form.precio,
        bicycleState: this.form.estado,
        bicycleStationId:this.form.idEstacion
      };
      axios.post("http://localhost:8080/bicycle/save/", json).then(data => {
        console.log(data);
        this.$router.push("/adminciclasperestacion/"+this.$route.params.id.charAt(0));
      });
    },
    salir() {
      
      this.$router.push("/adminciclasperestacion/"+this.$route.params.id.charAt(0));
    },
    eliminar() {
      var enviar = {
        idCicla: this.form.idCicla
      };
      axios
        .delete("http://localhost:8080/bicycle/" + this.form.idCicla)
        .then(datos => {
          console.log(datos);
          this.$router.push("/adminciclasperestacion/"+this.$route.params.id.charAt(0));
        });
    }
  },

  mounted: function() {
    this.form.idEstacion = this.$route.params.id.charAt(0);
    console.log(this.form.idEstacion);
    let textA =this.$route.params.id;
    var ret = textA.replace(textA.charAt(0),'');
    this.form.idCicla=ret;
    console.log("Cicla",this.form.idCicla);
    axios
      .get("http://localhost:8080/bicycle/" + this.form.idCicla)
      .then(datos => {
        this.form.nombre = datos.data.bicycleName;
        this.form.vendedor = datos.data.bicycleVendor;
        this.form.precio = datos.data.bicycleBuyPrice;
        this.form.estado = datos.data.bicycleState;
        console.log("Inputs",this.form);
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
</style>
