<template>
  <section>
    <b-overlay
      :show="overlay"
      spinner-variant="primary"
      spinner-type="grow"
      spinner-small
      rounded="sm"
    >
      <div class="container">
        <div class="row align-items-center mt-5 mb-1">
          <p class="h6 col-md-6"><strong>Resultados:</strong> <span class="text-vagas">{{ rows }} vagas</span></p>
          <b-form-select size="sm" class="col-md-1 offset-md-5 select-per-page text-vagas" v-model="perPage" :options="options"></b-form-select>
        </div>
      </div>
      <div id="itemList">
        <div v-for="item in itemsForList" :key="item.id">
          <CoreCardJob :data="item" />
        </div>
      </div>
      <div class="container">
        <div class="row align-items-end">
          <div class="col"></div>
          <div class="col-md-3">
            <b-pagination
              v-model="currentPage"
              :total-rows="rows"
              :per-page="perPage"
              aria-controls="itemList"
            ></b-pagination>
          </div>
        </div>
      </div>
    </b-overlay>
  </section>
</template>

<script>
  import { mapActions, mapGetters, mapMutations } from 'vuex';
  export default {
    data() {
      return {
        items: [],
        options: [
          { value: 8, text: '8 / pág' },
          { value: 12, text: '12 / pág' },
          { value: 16, text: '16 / pág' }
        ],
        search: {
          area: "",
          local: "",
          nivel: "",
          tipo: ""
        },
        overlay: false
      }
    },
    computed: {
      currentPage: {
        get() {
          return this.$store.state.jobs.currentPage
        },
        set(value) {
          this.$store.commit('jobs/SET_CURRENT_PAGE', value);
        }
      },
      perPage: {
        get() {
          return this.$store.state.jobs.perPage
        },
        set(value) {
          this.$store.commit('jobs/SET_PERPAGE', value);
        }
      },
      rows() {
        return this.items.length
      },
      itemsForList() {
        return this.items.slice(
          (this.currentPage - 1) * this.perPage,
          this.currentPage * this.perPage,
        );
      }
    },
    created() {
      if (this.items == ""){
        this.overlay = !this.overlay
      }
      this.$axios.$post('brqv/vagas', this.search).then(response => {
        this.items = response.data
        this.overlay = !this.overlay
      })
    },
  }
</script>

<style scoped>
  .select-per-page {
    background-color: transparent;
    border: 0;
  }
  .text-vagas {
    color: #429BDA;
  }
  b-pagination .page-item.active .page-link {
    z-index: 3;
    color: #fff;
    background-color: #fb8c00;
    border-color: #fb8c00;
  }
</style>