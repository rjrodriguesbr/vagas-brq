<template>
  <div class="container">
    <p class="mt-3"><strong>Recupere sua senha</strong></p>
    <p v-if="!show" >
      Você receberá um email com o passo a passo para recuperar sua senha.
    </p>
    <b-alert v-if="show" variant="info" show>Verifique seu email ({{ user.email }}). Enviamos um passo a passo que vai te ajudar a recuperar sua senha. ⚠️ Aah, e atenção: Se você não conseguir ver seu email na caixa de entrada, verifique na caixa de Spam.</b-alert>
    <form class="row gy-1 pt-75">
      <b-form-group
        id="fieldset-1"
        label-for="input-1"
        :invalid-feedback="invalidFeedback"
        :state="invalidFeedbackEmail"
        label="Email"
        class="col-12"
      >
        <b-form-input placeholder="Digite seu email cadastrado" id="input-1" v-model="user.email" :state="invalidFeedbackEmail" trim></b-form-input>
      </b-form-group>

      <b-button :disabled="show" block class="mt-3 mb-5" @click="resetPass" variant="success">RECUPERAR</b-button>
    </form>
  </div>
</template>

<script>
import * as EmailValidator from 'email-validator'

  export default {
    layout: 'auth',
    computed: {
      state() {
        return this.user.email.length >= 4
      },
      invalidFeedback() {
        if (this.user.email.length > 0) {
          return 'Enter at least 4 characters.'
        }
      },
      invalidFeedbackEmail() {
        if(this.user.email.length > 0 && EmailValidator.validate(this.user.email)) return true
      }
    },
    data() {
      return {
        user: {
          email: '',
          password: ''
        },
        show: false
      }
    },
    methods: {
      resetPass() {
        this.show = true
        this.$axios.$get('/brqv/forgot-password', { params: {
        email: this.user.email,
      }})
      }
    },
  }
</script>