<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>

import api from "@/Api";

export default {
  name: "App",
  data() {
    return {
      nombres: []
    };
  },
  created() {
    api.traerNombre().then(nombres => (this.nombres = nombres));
  }
};
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
