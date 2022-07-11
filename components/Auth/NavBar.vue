<template>
  <b-navbar toggleable="lg" type="dark" class="border-bottom p-3">
    <div class="container">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item mr-4"><NuxtLink to="/" class="nav-link text-dark"><span class="text-nav-menu">Home</span></NuxtLink></li>
        <li class="nav-item mr-4"><NuxtLink to="/auth/signin" class="nav-link"><span class="text-nav-menu">Acesse sua conta</span></NuxtLink></li>
        <li class="nav-item mr-4"><NuxtLink to="/auth/signup" class="nav-link text-dark"><span class="text-nav-menu">Cadastramento</span></NuxtLink></li>
      </ul>
      <div class="collapse navbar-collapse" id="ftco-nav">
      </div>
    </div>
  </b-navbar>
</template>

<style>
  .text-nav-menu {
    color: #6c757d;
  }
  .nuxt-link-exact-active {
    color: #000;
    font-weight: bold;
  }
</style>