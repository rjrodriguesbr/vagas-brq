<template>
  <div class="container">
    <p class="mt-3"><strong>Recupere sua senha 🔐</strong></p>
    <p v-if="!show" >
      Defina uma nova senha para acessar sua conta!
    </p>
    <b-alert v-if="show" variant="info" show>Verifique seu email ({{ user.email }}). Enviamos um passo a passo que vai te ajudar a recuperar sua senha. Haa, e ⚠️atenção: Se você não conseguir ver seu email na caixa de entrada, verifique na caixa de Spam.</b-alert>
    <form @click.prevent="" class="row gy-1 pt-75">
      <b-form-group
        id="fieldset-1"
        label="Senha"
        label-for="input-1"
        valid-feedback="Parece bom!"
        :invalid-feedback="invalidFeedback"
        :state="state"
        class="col-12 col-md-6"
      >
        <b-form-input type='password' placeholder="Digite uma senha forte" id="input-1" v-model="user.password" :state="state" trim></b-form-input>
      </b-form-group>

      <b-form-group
        id="fieldset-1"
        label="Confirme a senha"
        label-for="input-1"
        valid-feedback="Parece bom!"
        :invalid-feedback="confirmFeedback"
        :state="confirmState"
        class="col-12 col-md-6"
      >
        <b-form-input type='password' placeholder="Repita a senha" id="input-1" v-model="user.passwordConfirm" :state="confirmState" trim></b-form-input>
      </b-form-group>
      <b-button @click="setPass" class="mt-3 mb-5 col-12" type="submit" variant="success">DEFINIR NOVA SENHA</b-button>
      
    </form>
  </div>
</template>

<script>
  export default {
    layout: 'auth',
    computed: {
      state() {
        if (this.user.password.length >= 8 && this.user.password.length) {
          return true
        }
      },
      invalidFeedback() {
        if (this.user.password.length > 0) {
          return 'Digite uma senha forte com no minimo 8 caracteres.'
        }
      },
      confirmFeedback() {
        if (this.user.password != this.user.passwordConfirm) {
          return 'As senhas precisam ter o mesmo valor.'
        }
      },
      confirmState() {
        if (this.user.password == this.user.passwordConfirm && this.user.passwordConfirm.length) {
          return true
        }
      },
    },
    created() {
      this.$axios.$post('')
    },
    methods: {
      setPass() {
        if (this.user.password != this.user.passwordConfirm) {
          this.$toast.info(`As senhas precisam ter o mesmo valor!`)
        } else {
          const data = {
            key: this.$route.params.key,
            password: this.user.password,
            passwordConfirm: this.user.passwordConfirm
          }
          this.$axios.$post('/brqv/reset-password', data).then(response => {
            if (response.return_cod == 200) {
              this.$router.push('/auth/signin')
            } else {
              this.$toast.error(`Ops! Houve um erro ao redefinir as senhas, tente novamente!`)
            }
          }).catch(error => {
            this.$toast.error(`Ops! Houve um erro ao redefinir as senhas, tente novamente!`)
          })
        }
      }
    },
    data() {
      return {
        user: {
          password: '',
          passwordConfirm: ''
        },
        show: false
      }
    }
  }
</script>