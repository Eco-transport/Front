<template>
  <div>
    <Header></Header>
    <h1 class="post">Bienvenido <span>Socio</span></h1>
    <div class="post" v-for="post in posts" :key="post.userId">
      <h3>{{post.title}}</h3>
      <p>{{post.body}}</p>
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
    axios.get('https://jsonplaceholder.typicode.com/posts').then( function(respuesta){
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