<template>
  <!-- style="background-image: url('https://images.pexels.com/photos/1545505/pexels-photo-1545505.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');" -->
  <div class="body">
    <HeaderAdmin />
    <br /><br />
    <div class="container" v-on:submit.prevent="obteniendoData">
      <form action="" class="form-horizontal">
        <div class="form-group left">
          <label for="" class="control-label col-sm-2">ID</label>
          <div class="col-sm-10">
            <input
              
              type="text"
              class="form-control"
              name="orderID"
              id="orderID"
              v-model="orderID"
            />
          </div>
        </div>

        <div class="form-group left">
          <label for="" class="control-label col-sm-2">FECHA</label>
          <div class="col-sm-10">
            <input
              
              type="text"
              class="form-control"
              name="date"
              id="date"
              v-model="date"
            />
          </div>
        </div>
        <div class="form-group left">
          <label for="" class="control-label col-sm-2">STATUS</label>
          <div class="col-sm-10">
            <!-- <input
              type="text"
              class="form-control"
              name="status"
              id="status"
              v-model="status"
            /> -->
            <select id="status" name="status">
              <option value="volvo">{{ status }}</option>
              <option value="saab">Pagado</option>
              <option value="mercedes">Cancelado</option>
              <option value="audi">Otro</option>
            </select>
          </div>
        </div>
        <div class="form-group left row">
          <div class="col">
            <label for="" class="control-label col-sm-3">TIEMPO</label>
            <div class="col-sm-7">
              <input
                
                type="number"
                class="form-control"
                name="hours"
                id="hours"
                v-model="hours"
              />
            </div>
          </div>
        </div>

        <div class="form-group left row">
          <div class="col">
            <label for="" class="control-label col-sm-3">PRECIO</label>
            <div class="col-sm-7">
              <input
                
                type="number"
                class="form-control"
                name="price"
                id="price"
                v-model="price"
              />
            </div>
          </div>
        </div>

        <div class="form-group left row">
          <div class="col">
            <label for="" class="control-label col-sm-3">BICICLETA</label>
            <div class="col-sm-7">
              <input
                
                type="text"
                class="form-control"
                name="serial"
                id="serial"
                v-model="serial"
              />
            </div>
          </div>
        </div>

        <div class="form-group left row">
          <div class="col">
            <label for="" class="control-label col-sm-3">ESTACIÓN</label>
            <div class="col-sm-7">
              <input
                
                type="text"
                class="form-control"
                name="station"
                id="station"
                v-model="station"
              />
            </div>
          </div>
        </div>

        <div class="form-group left row">
          <div class="col">
            <label for="" class="control-label col-sm-3">USUARIO</label>
            <div class="col-sm-7">
              <input
                
                type="text"
                class="form-control"
                name="user"
                id="user"
                v-model="user"
              />
            </div>
          </div>
        </div>

        <div class="form-group left row">
          <div class="col">
            <label for="" class="control-label col-sm-3">HORA RECOGIDA</label>
            <div class="col-sm-7">
              <input
                
                type="text"
                class="form-control"
                name="serviceStart"
                id="serviceStart"
                v-model="serviceStart"
              />
            </div>
          </div>
        </div>

        <div class="form-group left row">
          <div class="col">
            <label for="" class="control-label col-sm-3">HORA ENTREGA</label>
            <div class="col-sm-7">
              <input
                
                type="text"
                class="form-control"
                name="serviceFinish"
                id="serviceFinish"
                v-model="serviceFinish"
              />
            </div>
          </div>
        </div>

        <div class="form-group left row">
          <div class="col">
            <label for="" class="control-label col-sm-3">PAGO</label>
            <div class="col-sm-7">
              <input
                
                type="text"
                class="form-control"
                name="payment"
                id="payment"
                v-model="payment"
              />
            </div>
          </div>
        </div>


        <div><br /><br /><br /></div>
        <div class="form-group">
          <a
            href="/admin-pedidos"
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
  name: "EditarPedidoAdmin",
  components: {
    HeaderAdmin
  },
  data: function() {
    return {
      orderID: "",
      date: "",
      status: "",
      hours: "",
      price: "",
      serial: "",
      station: "",
      user: "",
      payment: "",
      serviceStart: "",
      serviceFinish: ""
    };
  },
  methods: {
    editar() {
      var combo = document.getElementById("status");
      var selected = combo.options[combo.selectedIndex].text;
      let json = {
        id: this.orderID,
        orderDate: this.date,
        orderStatus: selected,
        hours: this.hours,
        price: this.price,
        serialBicycle: this.serial,
        paymentID: this.payment,
        stationID: this.station,
        userId: this.user,
        serviceStart: this.serviceStart,
        serviceFinish: this.serviceFinish
      };
      //console.log(json);
      axios.post("http://localhost:8080/order/save/", json)
            .then(() => {/* console.log(data); */});
    },
    salir() {
      this.$router.push("/admin-pedidos");
    },
    eliminar() {
      /* axios
        .delete("http://localhost:8080/station/" + this.form.idEstacion)
        .then(datos => {
          console.log(datos);
          this.$router.push("/admin-estaciones");
        }); */
    }
  },

  mounted: function() {
    this.orderID = this.$route.params.id;
    axios.get("http://localhost:8080/order/" + this.orderID).then(data => {
      this.date = data.data.orderDate;
      this.status = data.data.orderStatus;
      this.hours = data.data.hours;
      this.price = data.data.price;
      this.serial = data.data.serialBicycle;
      this.station = data.data.stationID;
      this.user = data.data.userId;
      this.serviceStart = data.data.serviceStart;
      this.serviceFinish = data.data.serviceFinish;
      this.payment = data.data.paymentID;
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
