<template>
  <div>
    <LayoutNavBar />
    <LayoutSearchJob v-if="$route.path == '/'" />
    <LayoutTitleNavegation v-if="$route.path.includes('vaga')" />
    <transition name="slide-fade">
      <Nuxt />
    </transition>
    <LayoutFooter />
  </div>
</template>

<style>
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