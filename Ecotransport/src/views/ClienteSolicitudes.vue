<template>
  <div
    class="body"
    style="background-image: url('https://images.pexels.com/photos/409701/pexels-photo-409701.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');"
  >
    <HeaderUser></HeaderUser>
    <br /><br />
    <h1>Bienvenido Cliente</h1>
    <h1>Aqui podras revisar tu historial de prestamos</h1>
    <br />


    



    <div class="container izquierda">
      <form method="get" action="/mapa">
        <button class="btn btn-primary" v-on:click="nuevo()">
          Pide una Bici!
        </button>
      </form>
      <br /><br />

      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">FECHA</th>
            <th scope="col">ESTADO</th>            
            <th scope="col">USUARIO</th>
            <th scope="col">ESTACION</th>            
            <th scope="col">BICICLETA</th>
            <th scope="col">CANT. HORAS</th>
            <th scope="col">PRECIO TOTAL</th>
          </tr>
        </thead>

        <tbody>
          <tr
            v-for="prestamo in ListaPrestamos"
            :key="prestamo.id"
            v-on:click="editar(prestamo.id)"
          >
            <th scope="row">{{ prestamo.id }}</th>
            <td>{{ prestamo.orderDate }}</td>
            <td>{{ prestamo.orderStatus }}</td>            
            <td>{{ prestamo.userID }}</td>            
            <td>{{ prestamo.paymentID }}</td>            
            <td>{{ prestamo.stationID }}</td>  
            <td>{{ prestamo.hours }}</td> 
            <td>{{ prestamo.price }}</td>
          </tr>


        </tbody>
      </table>
    </div>
    <!-- <Footer /> -->
    <br><br><br><br>
  </div>
</template>

<script>
import HeaderUser from "@/components/HeaderUser.vue";
import axios from "axios";
import { getAuthenticationToken } from "@/dataStorage";

export default {
  name: "EditarPrestamos",

  beforeCreate() {
    if (!getAuthenticationToken()) {
      this.$router.push({ name: "IniciarSesion" });
    }
  },

  data() {
    return {
      ListaPrestamos: null,      
      
    };
  },

  components: {
    HeaderUser
  },

  methods: {
    editar(id) {
      this.$router.push("/editar-pedido/" + id);
    },
    nuevo() {
      this.$router.push("/mapa");
    }
  },

  afterUpdate(){
    console.log(this.$userGlobal);
    console.log(this.$stationGlobal);
    console.log(this.$bicycleGlobal);
  },
  mounted: function() {    

    axios.get("http://localhost:8080/order")
    .then(orders => {
      this.ListaPrestamos = orders.data;
      console.log(orders.data);
    });
    /* axios.get("http://localhost:8080/order")
        .then(ORDERS => 
        {
            axios.get("http://localhost:8080/getUser", 
                {params: { access_token: getAuthenticationToken() }
                })
                .then(USERS => 
                {
                    this.form.userID = USERS.data.id;
                    this.form.username = USERS.data.username;
                    this.ListaOrdenes = ORDERS.data;
                    this.ListaPrestamos = new Array();
                    for (var key in this.ListaOrdenes) 
                    {
                        var orden = this.ListaOrdenes[key];                        
                        if (orden.orderUserId === this.form.userID) {
                            this.ListaPrestamos.push(orden);
                        }
                    }
                });
        }); */
  }
};
</script>

<style scoped>
.izquierda {
  text-align: left;
}

h1{
  color: white;
}

.body {
  height: auto;
  background-color: rgb(0, 0, 0, 0.8);
  background-size: cover;
  font-family: "Montserrat", sans-serif;
}
.table{  
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(4px);
  color:white;
}
table tbody :hover{
  background-color: rgba(255, 255, 255, 0.7);
  color: black
}

</style>
