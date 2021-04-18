<template>
  <div>
    <Header></Header>
    <img src="@/assets/Error.png" style="max-width:100%;width:100%;height:auto;" alt="Ups">
    <h1>Error</h1>
    <h3>Página no encontrada</h3>
    <router-link to="/"></router-link>
  </div>
</template>

<script>
import Header from "@/components/Header";
export default {
  name: "error",
  components: {
    Header,
  },
};
</script>
