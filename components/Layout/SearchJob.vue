<template>
  <div class="p-2 nav-search shadow-sm">
    <div class="container">
      <div>
        <form class="row p-2">
          <div class="col-md-3">
              <label>Busca</label>
              <b-form-input class="input-search" id="input-1" v-model="name"  trim placeholder="Digite uma palavra-chave"></b-form-input>
          </div>
          <div class="col-md-2">
              <label>Área</label>
              <b-form-select class="input-search" v-model="selected" :options="options"></b-form-select>
          </div>
          <div class="col-md-2">
            <label>Local</label>
              <b-form-select class="input-search" v-model="selected" :options="options"></b-form-select>
          </div>
          <div class="col-md-2">
            <label>Nível da Vaga</label>
              <b-form-select class="input-search" v-model="selected" :options="options"></b-form-select>
          </div>
          <div class="col-md-2">
            <label>Tipo da Vaga</label>
              <b-form-select class="input-search" v-model="selected" :options="options"></b-form-select>
          </div>
          <b-button class="button-filter" squared variant="outline-primary">FILTRAR</b-button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    computed: {
      state() {
        return this.name.length >= 4
      },
      invalidFeedback() {
        
      }
    },
    data() {
      return {
        name: '',
        selected: null,
        options: [
          { value: null, text: 'Selecione' },
          { value: 'Informatica', text: 'Informatica' },
          { value: 'Internet', text: 'Internet' },
          { value: 'Engenharia', text: 'Engenharia' },
          { value: 'Marketing', text: 'Marketing' },
        ]
      }
    }
  }
</script>

<style scoped>
  .nav-search {
    background-color: #F5F7F9;
    border: 1px solid #CCC;
  }
  .input-search {
    border-top-style: hidden;
    border-right-style: hidden;
    border-left-style: hidden;
    border-bottom-style: groove;
    background-color: transparent;
    border-radius: 0;
    border-color: #CCCCCC;
    padding: 0;
  }
  .input-search:hover {
    background-color: transparent;
  }
  .button-filter {
    background-color: #FFF;
  }
  .button-filter:hover {
    color: #006699;
  }
  label {
    margin: 0;
  }
</style>