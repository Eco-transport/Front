<template>
  <div id="app">
    <Header>  </Header>
    <h1>Bienvenidos a Ecotransport</h1>
    <img src="../assets/Ecotransport.png" width="200" height="200"><br>
    <button type="button" class="btn btn-info">Registrarme</button>
  </div>
</template>

<script>
import Header from "@/components/Header";

export default {
  name: 'App',
  components: {
    Header
  }
} 
</script>