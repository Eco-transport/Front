<template>
  <div
    class="body"
    style="background-image: url('https://images.pexels.com/photos/409701/pexels-photo-409701.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');"
  >
    <HeaderUser />
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
              name="idPedido"
              id="idPedido"
              v-model="form.id"
            />
          </div>
        </div>

        <div class="form-group left">
          <label for="" class="control-label col-sm-2">Fecha</label>
          <div class="col-sm-10">
            <input
              disabled
              type="text"
              class="form-control"
              name="fecha"
              id="fecha"
              v-model="form.fecha"
            />
          </div>
        </div>
        <div class="form-group left">
          <label for="" class="control-label col-sm-2">Estado</label>
          <div class="col-sm-10">
            <input
                disabled
              type="text"
              class="form-control"
              name="estado"
              id="estado"
              v-model="form.estado"
            />
          </div>
        </div>
        <div class="form-group left row">
          <div class="col">
            <label for="" class="control-label col-sm-3">Estacion</label>
            <div class="col-sm-7">
              <input
                disabled
                type="text"
                class="form-control"
                name="estacion"
                id="estacion"
                v-model="form.estacionID"
              />
            </div>
          </div>
        </div>

        <div class="form-group left row">
          <div class="col">
            <label for="" class="control-label col-sm-3">Horas</label>
            <div class="col-sm-7">
              <input
                type="number"
                class="form-control"
                name="horas"
                id="horas"
                v-model="form.horas"
              />
            </div>
          </div>
        </div>

        <div><br /><br /><br /></div>
        <div class="form-group">
          <a
            href="/cliente-solicitudes"
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
import HeaderUser from "@/components/HeaderUser.vue";
import axios from "axios";


export default {
  name: "EditarPedido", 

  components: {
    HeaderUser
  },
  data: function() {
    return {
      form: {
        id: "",
        fecha: "",
        estado: "",
        comentarios: "",
        estacionID: "",
        usuarioID: "",
        bicicletaID: "",
        horas: 0,
        //totalPrice: 0,
        precio: 10000,
      }
    };
  },
  methods: {
    editar() {
      let json = {
        orderId: this.form.id,
        orderDate: this.form.fecha,
        orderStatus: this.form.estado,
        orderComments: this.form.comentarios,
        orderStationId: this.form.estacionID,
        orderUserId: this.form.usuarioID,
        orderBicycleId: this.form.bicicletaID,
        orderTime: this.form.horas,
        orderTotalPrice: this.form.horas * this.form.precio
      };
      axios.post("http://localhost:8080/order/save/", json).then(data => {
        console.log(data);
      });
    },
    salir() {
      this.$router.push("/cliente-solicitudes");
    },
    eliminar() {
      axios
        .delete("http://localhost:8080/order/" + this.form.id)
        .then(datos => {
          console.log(datos);
          this.$router.push("/cliente-solicitudes");
        });
    }
  },

  mounted: function() {
    this.form.id = this.$route.params.id;
    axios.get("http://localhost:8080/order/" + this.form.id)
    .then(datos => {

      console.log(datos.data);
      this.form.fecha = datos.data.orderDate;
      this.form.estado = datos.data.orderStatus;
      this.form.comentarios = datos.data.orderComments;
      this.form.estacionID = datos.data.orderStationId;
      this.form.usuarioID = datos.data.orderUserId;
      this.form.bicicletaID = datos.data.orderBicycleId;
      this.form.horas = datos.data.orderTime;
      this.form.totalPrice = datos.data.orderTotalPrice; 

      
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

/* agrega */
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
#estacion, #estado, #fecha, #idPedido {
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
