<template>
  <div class="Header">
    <!--Header-->
    <nav class="navbar navbar-expand-lg navbar-dark" style="background: -webkit-linear-gradient(right, #057943, #6ba7be)">
      <a class="navbar-brand" href="/">
        <img src="@/assets/Logo.png" alt="Logo Ecotransport" height="40" />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-md-auto">
          <li class="nav-item">
            <a class="nav-link" href="mapa">Mapa</a>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="terminos">Términos</a>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="iniciar-sesion">Iniciar sesión</a>
          </li>
          
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    nombre: String,
  },
};
</script>