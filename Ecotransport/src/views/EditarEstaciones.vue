<template>
    <div>
        <Header/>
        <br>  

            <div class="container izquierda">

                <button class="btn btn-primary" v-on:click="nuevo()" >Nuevo usuario</button>
                <br><br>


                <table class="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">NOMBRE</th>
                        <th scope="col">CEDULA ID</th>
                        <th scope="col">TELEFONO</th>
                        <th scope="col">CORREO</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="usuario in Listausuarios" :key="usuario.PacienteId" v-on:click="editar(usuario.PacienteId)">
                        <th scope="row">{{ usuario.PacienteId}}</th>
                        <td>{{ usuario.Nombre }}</td>
                        <td>{{ usuario.DNI }}</td>
                        <td>{{ usuario.Telefono }}</td>
                        <td>{{ usuario.Correo }}</td>
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
            Listausuarios:null,
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
                this.$router.push('/nuevo');
            }
    },
    mounted:function(){
        let direccion = "http://api.solodata.es/pacientes?page=" + this.pagina;
        axios.get(direccion).then( data =>{
            this.Listausuarios = data.data;
        });
    }
}
</script>
<style  scoped>
    .izquierda{
        text-align: left;
    }
</style>