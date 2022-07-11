<template>
  <div class="container">
    <p class="mt-3"><strong>Cadastro</strong></p>
    <p>
      Começe a ser fera com a gente criando sua conta! 🚀
    </p>
    <b-alert v-if="registerConfirm" variant="info" show>Verifique seu email ({{ user.email }}). Enviamos um passo a passo que vai te ajudar a confirmar sua conta e finalizar seu registro. <br> ⚠️ <span class="text-warning">Haa, e atenção:</span> Se você não conseguir ver seu email na caixa de entrada, verifique na caixa de Spam.</b-alert>

    <form v-if="!registerConfirm" class="row gy-1 pt-75" @submit.prevent="registerUser">
      <b-form-group
        id="fieldset-1"
        label="Nome"
        label-for="input-1"
        class="col-12"
      >
        <b-form-input placeholder="Digite seu nome" id="input-1" v-model="user.name" trim></b-form-input>
      </b-form-group>

      <b-form-group
        id="fieldset-2"
        label="Sobrenome"
        label-for="input-2"
        class="col-12"
      >
        <b-form-input placeholder="Digite seu sobrenome" id="input-2" v-model="user.lastname" trim></b-form-input>
      </b-form-group>

      <b-form-group
        id="fieldset-3"
        label="Email"
        label-for="input-3"
        :state="invalidFeedbackEmail"
        class="col-12"
      >
        <b-form-input placeholder="Digite seu email" id="input-3" v-model="user.email" :state="invalidFeedbackEmail" trim></b-form-input>
      </b-form-group>

      <b-form-group
        id="fieldset-4"
        label="Senha"
        label-for="input-4"
        :state="invalidFeedbackPass"
        class="col-12 col-md-6"
      >
        <b-form-input type="password" placeholder="Digite uma senha forte" id="input-4" v-model="user.password" :state="invalidFeedbackPass" trim></b-form-input>
      </b-form-group>

      <b-form-group
        id="fieldset-5"
        label="Confirme a senha"
        label-for="input-5"
        :state="confirmFeedbackPass"
        class="col-12 col-md-6"
      >
        <b-form-input type="password" placeholder="Repita a senha" id="input-5" v-model="user.passwordConfirm" :state="confirmFeedbackPass" trim></b-form-input>
      </b-form-group>
      <b-button :disabled="loading" class="col-12 mt-4" type="submit" variant="success">
        <span v-if="!loading"> CADASTRAR </span>
        <div v-else>
            <b-spinner small></b-spinner>
        </div>
      </b-button>
    </form>
  </div>
</template>

<script>
  import * as EmailValidator from 'email-validator';

  export default {
    layout: 'auth',
    transition: 'fade-in',
    computed: {
      invalidFeedbackPass() {
        if (this.user.password.length > 0 && this.user.password.length >= 8) return true
      },
      confirmFeedbackPass() {
        if (this.user.passwordConfirm.length > 0 && this.user.password == this.user.passwordConfirm) return true
      },
      invalidFeedbackEmail() {
        if(this.user.email.length > 0 && EmailValidator.validate(this.user.email)) return true
      }
    },
    data() {
      return {
        user: {
          name: '',
          lastname: '',
          email: '',
          password: '',
          passwordConfirm: ''
        },
        registerConfirm: false,
        loading: false,
      }
    },
    methods: {
      async registerUser() {
        this.loading = !this.loading
        try {
          await this.$axios.$post('/brqv/register', this.user).then(response => {
            this.registerConfirm = !this.registerConfirm
            this.$toast.success(`✅ Bem Vindo ${this.user.name}`)
            this.loading = !this.loading
          })
        } catch (e) {
          this.$toast.error(`⚠️ ${e.response.data.return_description}`)
          this.loading = !this.loading
        }
      }
    },
  }
</script>