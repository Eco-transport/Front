<template>
  <div id="app">
    <link rel="shortcut icon" href="../logo.png" />
    <router-view />
  </div>
</template>

<script>
export default {
    name: 'App'
  }
</script>

<style>
  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
