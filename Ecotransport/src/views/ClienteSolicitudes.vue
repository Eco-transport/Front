<template>
    <div>
        <Header/>
        <br><br>
        <h1>Bienvenido Cliente</h1>
        <br>  

            <div class="container izquierda">

                <button class="btn btn-primary" v-on:click="nuevo()" >Pide una Bici!</button>
                <br><br>


                <table class="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">FECHAORDEN</th>
                        <th scope="col">ESTATUSORDEN</th>
                        <th scope="col">COMENTARIOSORDEN</th>
                        <th scope="col">IDESTACION</th>
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
import axios from 'axios';
export default {
    name:"EditarPrestamos",
    data(){
        return {
            ListaPrestamos:null,
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
                this.$router.push('/nuevo-prestamo');
            }
    },
    mounted:function(){
        let direccion = "http://localhost:8080/API/prestamo/";
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