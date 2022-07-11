<template>
  <b-navbar toggleable="lg" type="dark" class="border-bottom p-3">
    <div class="container">
      <img role="button" @click="$router.push('/')" src="@/assets/img/logo-brq.svg" alt="Logotipo BRQ Digital">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="oi oi-menu"></span> Menu
      </button>

      <div class="collapse navbar-collapse" id="ftco-nav">
        <a href=""></a>
      </div>

      <div class="collapse navbar-collapse" id="ftco-nav">
        <template v-if="authenticated">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item mr-4"><a href="https://www.brq.com/quem-somos/sobre-nos/" class="nav-link text-dark"><span class="text-muted">Sobre Nós</span></a></li>
          </ul>
          <b-dropdown style="z-index: 999999;" variant="link" id="dropdown-1" :text="`${userLogin.bpmn_brqv_nomec} ${userLogin.bpmn_brqv_sobrenome}`" class="m-md-2 dropdown-profile">
            <b-dropdown-item @click="$router.push('/me/profile')">Perfil</b-dropdown-item>
            <b-dropdown-divider></b-dropdown-divider>
            <b-dropdown-item @click="logout">Sair</b-dropdown-item>
          </b-dropdown>
        </template>
        <template v-else>

          <ul class="navbar-nav ml-auto">
            <li class="nav-item mr-4"><a href="https://www.brq.com/quem-somos/sobre-nos/" class="nav-link text-dark"><span class="text-muted">Sobre Nós</span></a></li>
          </ul>
          <div>
            <b-button @click="$router.push('/auth/signin')" class="mr-4" squared variant="info" size="sm">ACESSE SUA CONTA</b-button>
            <b-button @click="$router.push('/auth/signup')" class="button-register text-light text-wrap" squared size="sm">CADASTRE-SE</b-button>
          </div>

        </template>
      </div>
    </div>
  </b-navbar>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters('login', ['$getLoggin', '$getUser']),
    ...mapGetters({
      authenticated: 'login/$getLoggin',
      userLogin: 'login/$getUser'
    })
  },
  methods: {
    ...mapActions({
      logout: 'login/setLogout' // map `this.add()` to `this.$store.dispatch('increment')`
    })
  },
}
</script>

<style>
  .button-register {
    background-color: #FB8C00;
    border-color: #FB8C00;
  }
  .dropdown-profile {
    background-color: transparent !important;
    color: #FFF;
  }
</style>