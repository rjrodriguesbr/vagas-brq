<template>
  <div class="container">
    <p class="mt-3"><strong>Recupere sua senha 🔐</strong></p>
    <p v-if="!show" >
      Defina uma nova senha para acessar sua conta!
    </p>
    <b-alert v-if="show" variant="info" show>Verifique seu email ({{ user.email }}). Enviamos um passo a passo que vai te ajudar a recuperar sua senha. Haa, e ⚠️atenção: Se você não conseguir ver seu email na caixa de entrada, verifique na caixa de Spam.</b-alert>
    <form class="row gy-1 pt-75">
      <b-form-group
        id="fieldset-1"
        label="Senha"
        label-for="input-1"
        valid-feedback="Thank you!"
        :invalid-feedback="invalidFeedback"
        :state="state"
        class="col-12 col-md-6"
      >
        <b-form-input placeholder="Digite uma senha forte" id="input-1" v-model="name" :state="state" trim></b-form-input>
      </b-form-group>

      <b-form-group
        id="fieldset-1"
        label="Confirme a senha"
        label-for="input-1"
        valid-feedback="Thank you!"
        :invalid-feedback="invalidFeedback"
        :state="state"
        class="col-12 col-md-6"
      >
        <b-form-input placeholder="Repita a senha" id="input-1" v-model="name" :state="state" trim></b-form-input>
      </b-form-group>
      <b-button class="mt-3 mb-5 col-12" type="submit" variant="success">DEFINIR NOVA SENHA</b-button>
      
    </form>
  </div>
</template>

<script>
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
    }
  }
</script>