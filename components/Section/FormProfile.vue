<template>
  <section class="sec-details">
    <div class="container mt-2 border-bottom header-sticky">
      <div class="row mb-2">
        <div class="col pt-2 align-items-center">
          <p class="text-brq fw-bold"><strong>DADOS DO CANDIDATO</strong></p>
        </div>
        <div class="col-sm-2 justify-content-end mt-2">
          <b-button @click="updateUser" variant="success" squared>
            <span v-if="!loading">SALVAR</span>
            <div v-else>
                <b-spinner small></b-spinner>
            </div>
          </b-button>
        </div>
      </div>
    </div>

    <div class="container border-bottom pb-4">
      <div class="row mt-4">
        <div class="col-lg-8 pr-5 bg-profile p-5">
          <p class="mt-3"><strong class="text-muted">Preencha os campos abaixo para concluir o seu cadastro na BRQ.</strong></p>
          <small>Campos Obrigatórios <span class="text-danger">*</span></small>
          <form class="row gy-1 pt-75 mt-3">
            <b-form-group
              id="fieldset-1"
              label="Nome *"
              label-for="input-1"
              valid-feedback="Thank you!"
              :invalid-feedback="invalidFeedback"
              :state="state"
              class="col-12 col-md-6 label-brq"
            >
              <b-form-input class="input-profile" placeholder="Digite seu nome" id="input-1" v-model="userInfo.bpmn_brqv_nomec" :state="state" trim></b-form-input>
            </b-form-group>

            <b-form-group
              id="fieldset-2"
              label="Sobrenome *"
              label-for="input-2"
              valid-feedback="Thank you!"
              :invalid-feedback="invalidFeedback"
              :state="state"
              class="col-12 col-md-6 label-brq"
            >
              <b-form-input class="input-profile" placeholder="Digite seu sobrenome" id="input-2" v-model="userInfo.bpmn_brqv_sobrenome" :state="state" trim></b-form-input>
            </b-form-group>

              <b-form-group
                id="fieldset-8"
                label="Nome Social"
                label-for="input-8"
                valid-feedback="Thank you!"
                :invalid-feedback="invalidFeedback"
                :state="state"
                class="label-brq col-12"
              >
                <b-form-input class="input-profile" placeholder="Digite seu nome social" id="input-8" v-model="userInfo.bpmn_brqv_namesoci" :state="state" trim></b-form-input>
              </b-form-group>

            <b-form-group
              id="fieldset-3"
              label="Email *"
              label-for="input-3"
              valid-feedback="Thank you!"
              :invalid-feedback="invalidFeedback"
              :state="state"
              class="col-12 col-md-6 label-brq"
            >
              <b-form-input class="input-profile" placeholder="Digite seu email" id="input-3" v-model="userInfo.bpmn_brqv_emailcan" :state="state" trim></b-form-input>
            </b-form-group>

            <b-form-group
              id="fieldset-4"
              label="Data de Nascimento *"
              label-for="input-4"
              valid-feedback="Thank you!"
              :invalid-feedback="invalidFeedback"
              :state="state"
              class="col-12 col-md-6 label-brq"
            >
              <b-form-datepicker
                id="datepicker-buttons"
                reset-button
                close-button
                locale="pt"
                class="input-profile"
                v-model="userInfo.bpmn_brqv_nasci"
              ></b-form-datepicker>
            </b-form-group>

            <b-form-group
              id="fieldset-5"
              label="Telefone *"
              label-for="input-5"
              valid-feedback="Thank you!"
              :invalid-feedback="invalidFeedback"
              :state="state"
              class="col-12 col-md-6 label-brq"
            >
              <b-form-input v-mask="mask" class="input-profile" placeholder="Digite seu telefone" id="input-5" v-model="userInfo.bpmn_brqv_telcandi" :state="state" trim></b-form-input>
            </b-form-group>

            <b-form-group class="col-12 col-md-6 label-brq" label="Gênero *" v-slot="{ ariaDescribedby }">
              <b-form-radio-group
                v-model="userInfo.bpmn_brqv_sex1"
                :options="genCandidato"
                :aria-describedby="ariaDescribedby"
                name="radio-inline"
                class="text-dark"
              ></b-form-radio-group>
            </b-form-group>

            <b-form-group class="label-brq col-12" label="Skill Técnica *" label-for="tags-with-dropdown">
              <b-form-tags id="tags-with-dropdown" v-model="userInfo.bpmn_brqv_skill1" no-outer-focus class="mb-2 form-skills">
                <template v-slot="{ tags, disabled, addTag, removeTag }">
                  <ul v-if="tags.length > 0" class="list-inline d-inline-block mb-2">
                    <li v-for="tag in tags" :key="tag" class="list-inline-item">
                      <b-form-tag
                        @remove="removeTag(tag)"
                        :title="tag"
                        :disabled="disabled"
                        variant="info"
                        class="mb-2 text-light"
                      >{{ tag }}</b-form-tag>
                    </li>
                  </ul>

                  <b-dropdown size="sm" variant="outline-secondary" class="my-class" block menu-class="w-100">
                    <template #button-content>
                      <b-icon icon="tag-fill"></b-icon> Selecione as Skills...
                    </template>
                    <b-dropdown-form @submit.stop.prevent="() => {}">
                      <b-form-group
                        label="Buscar Skills"
                        label-for="tag-search-input"
                        label-cols-md="auto"
                        class="mb-0"
                        label-size="sm"
                        :description="searchDesc"
                        :disabled="disabled"
                      >
                        <b-form-input
                          v-model="search"
                          id="tag-search-input"
                          type="search"
                          size="sm"
                          autocomplete="off"
                        ></b-form-input>
                      </b-form-group>
                    </b-dropdown-form>
                    <b-dropdown-divider></b-dropdown-divider>
                    <b-dropdown-item-button
                      v-for="option in availableOptions"
                      :key="option"
                      @click="onOptionClick({ option, addTag })"
                    >
                      {{ option }}
                    </b-dropdown-item-button>
                    <b-dropdown-text v-if="availableOptions.length === 0">
                      Não há tags disponíveis para selecionar
                    </b-dropdown-text>
                  </b-dropdown>
                </template>
              </b-form-tags>
            </b-form-group>

            <b-form-group class="col-12 label-brq" label="Possui alguma deficiência?" v-slot="{ ariaDescribedby }">
              <b-form-select
                v-model="userInfo.bpmn_brqv_qual1"
                :options="pcds"
                class="mb-3 input-profile"
                value-field="item"
                text-field="name"
                disabled-field="notEnabled"
              ></b-form-select>
            </b-form-group>

            

            <b-form-group
              id="fieldset-9"
              label="Linkedin *"
              label-for="input-9"
              valid-feedback="Thank you!"
              :invalid-feedback="invalidFeedback"
              :state="state"
              class="col-12 label-brq"
            >
              <b-form-input class="input-profile" placeholder="Digite seu nome completo" id="input-9" v-model="userInfo.bpmn_brqv_linkedin" :state="state" trim></b-form-input>
            </b-form-group>

            <div class="col-12 label-brq pl-4 pr-4 mt-4">
              <p class="label-brq" >Anexar um arquivo</p>
              <label for="input-file" class="p-3 border-1 row align-text-center file-component">
                <img class="ml-3" src="@/assets/icons/cloud_upload.svg" alt="">
                <p v-if="!file" @onChange="fileArqchive" class="text-brq ml-3 pt-2">Clique aqui para selecionar 1 arquivo</p>
                <p v-else @onChange="fileArqchive" class="text-brq ml-3 pt-2">{{ file.name }}</p>
              </label>
              <b-form-file @onChange="fileArqchive" style="width: 0;" id="input-file" v-model="file" class="mt-3" plain></b-form-file>
            </div>
          </form> 
        </div>
        <div class="col-lg-4">
          <div class="p-3">
            <p class="mt-3 text-dark"><strong>Preenchimento dos dados</strong></p>
            <p>Para se inscrever nas vagas BRQ você precisa terminar o seu cadastro, preenchendo as informações ao lado.</p>
            <b-progress :max="max">
              <b-progress-bar :value="value" :label="`${((value / max) * 100).toFixed(2)}%`"></b-progress-bar>
            </b-progress>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        selected: '0',
        selectRadio: [
          { text: 'Sim', value: true },
          { text: 'Não', value: false },
        ],
        genCandidato: [
          { text: 'Masculino', value: 'Masculino' },
          { text: 'Feminino', value: 'Feminino' },
          { text: 'Prefiro não responder', value: 'Prefiro não responder' },
        ],
        pcds: [],
        search: '',
        value: 25,
        max: 100,
        list: ['PHP', 'JavaScript', 'Python', 'C', 'C++', 'Java'],
        valuee: [],
        file: '',
        showSN: false,
        mask: "(##) #####-####",
        loading: false,
      }
    },
    async created() {
      await this.$axios.$get('/brqv/skills').then(response => {
        this.list = response.data
      })
      await this.$axios.$get('/brqv/pcds').then(response => {
        this.pcds = response.data
      })
    },
    methods: {
      onOptionClick({ option, addTag }) {
        addTag(option)
        this.search = ''
      },
      async updateUser() {
        this.loading = !this.loading
        await this.$axios.$post('/brqv/profile/update', this.userInfo).then(response => {
          this.$toast.success(`Tudo Certo! Os dados foram atualizados.`)
          this.$store.dispatch('login/updateUser', this.userInfo)
          this.loading = !this.loading
        }).catch(error => {
          this.$toast.error(`Ops! Desculpa, tivemos algum erro, tente novamente.`)
          this.loading = !this.loading
        })

        const formData = new FormData()
        formData.append('cv', this.file, this.file.name)
        formData.append('id', this.$store.state.login.user.id)
        await this.$axios.$post('/brqv/profile/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }).then(response => {
          console.log(response)
        })
      },
      async fileArqchive() {
        
      }
    },
    computed: {
      userInfo() {
        return { ...this.$store.state.login.user }
      },
      searchDesc() {
        if (this.criteria && this.availableOptions.length === 0) {
          return 'Não há skills que correspondam aos seus critérios de pesquisa'
        }
        return ''
      },
      criteria() {
        return this.search.trim().toLowerCase()
      },
      availableOptions() {
        const criteria = this.criteria
        const options = this.list.filter(opt => this.userInfo.bpmn_brqv_skill1.indexOf(opt) === -1)
        if (criteria) {
          return options.filter(opt => opt.toLowerCase().indexOf(criteria) > -1);
        }
        return options
      },
    },
  }
</script>

<style scoped>
  .text-brq {
    color: #006699;
  }
  .label-brq {
    color: #374768;
  }
  .bg-profile {
    background-color: #dfe6ed42 ;
  }
  .input-profile {
    border-top-style: hidden;
    border-right-style: hidden;
    border-left-style: hidden;
    border-bottom-style: groove;
    background-color: transparent;
    border-radius: 0;
    border-color: #CCCCCC;
    padding: 0;
  }
  .input-profile:hover {
    background-color: transparent;
  }
  .file-component {
    background-color: #ECF0F4;
    border: 1px dashed #006699;
    cursor: pointer;
  }
  .transparent {
    background-color: transparent;
    border: 0;
  }
  .sec-details {
    position: relative;
  }
  .header-sticky {
    position: sticky;
    top: 0;
    background-color: #FFF;
    z-index: 99999;
    padding-top: 8px;
  }
  .form-skills {
    background-color: transparent;
    border: 0;
  }
  .button-skills {
    border-bottom: 1px solid #CCCCCC;
  }
  .my-class /deep/ .dropdown-menu {
    max-height: 200px;
    overflow-y: auto;
  }
</style>