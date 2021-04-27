<template>
    <div>
        <Header/><br><br>
        <h1>Bienvenido Administrador</h1>
        <br>  

            <div class="container izquierda">

                <button class="btn btn-primary" v-on:click="nuevo()" >Agregar Estación</button>
                <br><br>


                <table class="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">NOMBRE</th>
                        <th scope="col">DIRECCIÓN</th>
                        <th scope="col">TELEFONO</th>
                        <th scope="col">INVENTARIO</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="estacion in ListaEstaciones" :key="estacion.idEstacion" v-on:click="editar(estacion.idEstacion)">
                        <th scope="row">{{ estacion.idEstacion}}</th>
                        <td>{{ estacion.nombre }}</td>
                        <td>{{ estacion.direccion }}</td>
                        <td>{{ estacion.telefono }}</td>
                        <td>{{ estacion.totalVehiculos }}</td>
                    </tr>
            
                </tbody>
                </table>

            </div>

        <Footer />
    </div>
</template>


<script>
import Header from '@/components/Header.vue';
import axios from 'axios';
export default {
    name:"EditarEstaciones",
    data(){
        return {
            ListaEstaciones:null,
            pagina:1
        }
    },
    components:{
        Header
    },
    methods:{
            editar(id){
                this.$router.push('/editar/' + id);
            },
            nuevo(){
                this.$router.push('/nueva-estacion');
            }
    },
    mounted:function(){
        let direccion = "http://localhost:8080/API/estacion/";
        axios.get(direccion).then( data =>{
            this.ListaEstaciones = data.data;
        });
    }
}
</script>
<style  scoped>
    .izquierda{
        text-align: left;
    }
</style>