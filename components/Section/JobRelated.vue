<template>
  <div class="justify-align-center container">
    <div class="text-center mt-5">
      <p class="h5">Pesquise por vagas de emprego na BRQ Digital</p>
      <p>Veja as vagas de emprego abertas e se candidate! Ver todas as vagas abertas</p>
    </div>
    <div class="mt-5 col-md-8 offset-md-2 mb-5">
        <div class="row">
          <b-input-group size="sm" class="mb-2">
            <b-form-input type="search" class="input-search" placeholder="Digite uma palavra-chave"></b-form-input>
            <b-input-group-prepend class="ml-3 border-0 pt-2">
              <b-icon icon="search"></b-icon>
            </b-input-group-prepend>
          </b-input-group>
        </div>
    </div>
    <CoreCardJob />
    <CoreCardJob />
    <CoreCardJob />
  </div>
</template>

<style>
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
</style>
