<template>
  <div class="container">
    <p class="mt-3"><strong>Acesso de candidato cadastrado</strong></p>
    <p>Se você já estiver cadastrado na BRQ forneça seu login e senha. Caso ainda não tenha cadastro <NuxtLink to="/auth/signup">clique aqui</NuxtLink> para se cadastrar.
    </p>
    <form @submit.prevent="userLogin" class="row gy-1 pt-75">
      <b-form-group
        id="fieldset-1"
        label-for="input-1"
        :state="invalidFeedbackEmail"
        label="Email"
        class="col-12"
      >
        <b-form-input placeholder="Digite seu email" id="input-1" v-model="user.email" :state="invalidFeedbackEmail" trim></b-form-input>
      </b-form-group>

      <b-form-group
        id="fieldset-2"
        label-for="input-2"
        :state="invalidFeedbackPass"
        label="Senha"
        class="col-12"
      >
        <b-form-input id="input-2" type='password' placeholder="Digite sua senha" v-model="user.password" :state="invalidFeedbackPass" trim></b-form-input>
      </b-form-group>
      <div class="d-flex justify-content-between">
          <NuxtLink to="/auth/forgot-password"><small>Esqueceu a senha?</small></NuxtLink>
      </div>
      <b-button block class="mt-3 mb-5" type="submit" variant="success">
        <span v-if="!loading">ENTRAR</span>
        <div v-else>
            <b-spinner small></b-spinner>
        </div>
      </b-button>
    </form>
  </div>
</template>

<script>
  import * as EmailValidator from 'email-validator'

  export default {
    layout: 'auth',
    computed: {
      invalidFeedbackPass() {
        if (this.user.password.length > 0 && this.user.password.length >= 8) return true
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
        loading: false,
      }
    },
    methods: {
      async userLogin() {
        this.loading = !this.loading
        try {
          await this.$axios.$post('brqv/signin', this.user).then(response => {

            if(!response.data.user.candidado_confirm_email){
              localStorage.setItem('brqv_loggin_email', response.data.user.bpmn_brqv_emailcan)
              this.$router.push('/auth/confirm-email')
            } else {
              this.$store.dispatch('login/setLogin', response.data.user)
              this.$auth.login('local')
              this.$auth.setUser(response.data.user)
              localStorage.setItem('brqv_userData', JSON.stringify(response.data.user))
              localStorage.setItem('brqv_loggin', true)
              this.$toast.success(`Bem vindo de volta 👋`)
              this.$router.push('/me/profile')
            }
            
          })
          this.loading = !this.loading
        } catch (e) {
          this.$toast.error(`Ops! Não deu pra fazer login. Verifique os dados de email e senha que você digitou.`)
          this.loading = !this.loading
        }
      }
    }
  }
</script>