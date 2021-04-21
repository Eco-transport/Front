<template>
  <div>
    <Header></Header>    
    <div class="post" v-for="post in posts" :key="post.id">
      <h3>{{post.nombre}}</h3>
      <p>{{post.email}}</p>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";
import axios from 'axios'
export default {
  name: "mapa",
  components: {
    Header
  },
  data(){
    return{
      posts:[]
    }
  },
  mounted(){
    let vue = this;
    axios.get('http://localhost:8080/API/usuario').then( function(respuesta){
      vue.posts = (respuesta.data)
      console.log(vue.posts)
    }  )
  }
};
</script>

<style>
  .post{
    border: 1px solid #062528;
    padding: 20px;
    margin-top: 10px;

  }
</style>