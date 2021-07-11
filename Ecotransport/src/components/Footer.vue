<template>
  <div>
    <footer>
      Ecotransport ©
    </footer>
  </div>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style scoped>
footer {
  background-color: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(4px);
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 30px;
  color: rgb(31, 31, 31);
}
</style>
