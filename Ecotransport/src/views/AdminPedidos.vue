<template>
  <div>
      <!-- style="background-image: url('https://images.pexels.com/photos/1545505/pexels-photo-1545505.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');" -->
    <div
      class="body"      
    >
      <HeaderAdmin />
      <br /><br />
      <h1>Edite la información de un PEDIDO</h1>
      <br />

      <div class="container izquierda">
        <br /><br />

        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">FECHA</th>
              <th scope="col">STATUS</th>
              <th scope="col">TIEMPO</th>
              <th scope="col">PRECIO</th>
              <th scope="col">BICICLETA</th>
              <th scope="col">ESTACION</th>
              <th scope="col">USUARIO</th>
              <th scope="col">HORA RECOGIDA</th>
              <th scope="col">HORA ENTREGA</th>
              <th scope="col">PAGO</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="item in OrderList"
              :key="item.id"
              v-on:click="editar(item.id)"
            >
              <th scope="row">{{ item.id }}</th>
              <td>{{ item.orderDate }}</td>
              <td>{{ item.orderStatus }}</td>
              <td>{{ item.hours }}</td>
              <td>{{ item.price }}</td>
              <td>{{ item.serialBicycle }}</td>
              <td>{{ item.stationID }}</td>
              <td>{{ item.userId }}</td>
              <td>{{ item.serviceStart }}</td>
              <td>{{ item.serviceFinish }}</td>
              <td>{{ item.paymentID }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import HeaderAdmin from "@/components/HeaderAdmin.vue";
import Footer from "@/components/Footer.vue";
import axios from "axios";
import { getAuthenticationToken } from "@/dataStorage";

export default {
  name: "AdminPedidos",
  beforeCreate() {
    if (!getAuthenticationToken()) {
      this.$router.push({ name: "IniciarSesion" });
    }
  },
  data() {
    return {
      OrderList: null
    };
  },
  components: {
    HeaderAdmin,
    Footer
  },
  methods: {
    editar(id) {
      this.$router.push("/editar-pedido-admin/" + id);
    }
  },
  mounted: function() {
    axios.get("http://localhost:8080/order/")
    .then(data => {this.OrderList = data.data;});
  }
};
</script>

<style scoped>
.izquierda {
  text-align: left;
}
.body {
  height: 100vh;
  background-color: rgb(0, 0, 0, 0.5);
  background-size: cover;
  font-family: "Montserrat", sans-serif;
}

h1 {
  color: white;
}
.table {
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(4px);
  color: white;
}
table tbody :hover {
  background-color: rgba(255, 255, 255, 0.7);
  color: black;
}
</style>
