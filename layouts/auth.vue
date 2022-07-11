<template>
  <div>
    <AuthNavBar />
    <div class="auth-inner row m-0 bg-login">
      <div class="col-lg-5 pt-4 pl-5 pr-5 bg-light">
        <img class="pl-3 mt-3" src="@/assets/img/logo-brq-auth.svg" alt="Logotipo BRQ Digital">
        <transition name="slide-fade">
          <Nuxt/>
        </transition>
      </div>
      <div class="col-lg-7">
      </div>
    </div>
    <LayoutFooter class="bd-footer" />
  </div>
</template>

<script>
  export default {
    middleware: 'guest'
  }
</script>

<style scoped>
  .bg-login {
    background-image: url("@/assets/img/bg_sliderbrqv.png");
    background-repeat: no-repeat;
    background-size: 100%;
    background-size: cover;
  }
  .auth-inner {
    height: 100vh;
    overflow-y: auto;
    height: calc(var(--vh, 1vh) * 100);
  }
  .slide-fade-enter-active {
    transition: all .5s ease;
  }
  .slide-fade-leave-active {
    transition: all .10s cubic-bezier(1.0, 0.5, 0.8, 2.0);
  }
  .slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active em versões anteriores a 2.1.8 */ {
    transform: translateX(10px);
    opacity: 0;
  }
</style>