<template>
  <div class="p-2 nav-search shadow-sm">
    <div class="container">
      <div class="row align-items-center">
          <b-button @click="$router.back()" size="sm" class="mb-2 mt-2 mr-1 button-return">
            <b-icon icon="arrow-left-short" aria-label="Help"></b-icon>
          </b-button>
        <h5 class="ml-2 mt-2">{{ titlePage.bpmn_brqv_titulovaga ? titlePage.bpmn_brqv_titulovaga : "Vaga Aberta" }}</h5>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      jobPage: 'jobs/$getJobPage',
    }),
    titlePage: {
      get() {
        return this.jobPage ? this.jobPage : "Vaga Aberta"
      },
    }
  }
}
</script>

<style>
  .nav-search {
    background-color: #F5F7F9;
    border: 1px solid #CCC;
  }
  .button-return {
    background-color: #FB8C00;
    color: #FFF;
    border: 0;
  }
</style>