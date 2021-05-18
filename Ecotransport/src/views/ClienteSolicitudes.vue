<template>
<div>
       <Header></Header> 
                <br><br>
        <h1>Bienvenido Cliente</h1>
        <h1>Aqui podras revisar tu historial de prestamos</h1>
        <br>  

            <div class="container izquierda">

                <form method="get" action="/mapa">
                <button class="btn btn-primary" v-on:click="nuevo()" >Pide una Bici!</button>
                </form>
                <br><br>
 
                <table class="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">FECHA ORDEN</th>
                        <th scope="col">ESTATUS ORDEN</th>
                        <th scope="col">COMENTARIOS</th>
                        <th scope="col">FECHA</th>
                        <th scope="col">ESTATUS</th>
                        <th scope="col">COMENTARIOS</th>
                        <th scope="col">ESTACION</th>
                    </tr>
                </thead>
                  <tbody>
                    <tr v-for="prestamo in ListaPrestamos" :key="prestamo.idPrestamo" v-on:click="editar(prestamo.idPrestamo)">
                        <th scope="row">{{ prestamo.idPrestamo}}</th>
                        <td>{{ prestamo.nombre }}</td>
                        <td>{{ prestamo.direccion }}</td>
                        <td>{{ prestamo.telefono }}</td>
                        <td>{{ prestamo.totalVehiculos }}</td>
                    </tr>
            
                </tbody>
                </table>
   </div>
<Footer />
    </div>
</template>

<script>
import Header from '@/components/Header.vue';

export default {
    name:"EditarPrestamos",
     components:{
        Header
    },
}
</script>
<style  scoped>
    .izquierda{
    text-align: left;
    }
</style>