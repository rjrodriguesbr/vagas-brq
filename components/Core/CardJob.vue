<template>
  <b-card class="shadow-sm text-bold pb-2 mb-3">
    <b-row class="row">
      <b-col cols="8">
        <p class="h5 pl-3 text-brq"><strong>{{data.bpmn_brqv_titulovaga ? data.bpmn_brqv_titulovaga : ''}}</strong></p>
        <div class="row pl-3 pt-2 align-items-center">
          <img class="pr-1 pl-4" src="@/assets/icons/place.svg">
          <small class="text-dark mr-4">Brasil</small>
          <img class="pr-1" src="@/assets/icons/level_pleno.svg">
          <small class="text-dark mr-4">Pleno</small>
          <img class="pr-1" src="@/assets/icons/monetization_on.svg">
          <small class="text-dark mr-4">A Combinar</small>
        </div>
      </b-col>
      <b-col cols="4" class="text-right">
          <b-button @click="$router.push(`/vaga/${data.url}/${data.id}`)" class="button-register mr-5" size="sm">Ver descritivo da vaga</b-button>
          <br>
          <div class="mt-2 text-right mr-5">
            <img class="text-small-color" src="@/assets/icons/timer.svg">
            <small class="text-small-color">Faltam 0 dias para encerrar esta vaga</small>
          </div>
      </b-col>
    </b-row>
  </b-card>
</template>

<script>
  export default {
    props: {
      data: {
        type: Object,
        required: true
      }
    },
  }
</script>

<style>
  .text-brq {
    color: #006699;
  }
  .button-register {
    background-color: #FB8C00;
    border-color: #FB8C00;
  }
  .text-small-color {
    color: #979797;
  }
  .text-alg-end {
    text-align: end !important;
  }
</style>