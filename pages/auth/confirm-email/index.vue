<template>
  <div class="container">
    <p class="mt-3"><strong>Começe a ser fera com a gente confirmando sua conta! 🚀</strong></p>
    <b-alert variant="success" show>Verifique seu email. Enviamos um passo a passo que vai te ajudar a confirmar sua conta e finalizar seu registro. <br> ⚠️ <span class="text-warning">Haa, e atenção:</span> Se você não conseguir ver seu email na caixa de entrada, verifique na caixa de Spam.</b-alert>
    <small>Reenviar email novamente em {{ timerCount }} ...</small>
    <b-button :disabled="!show" @click="reenviar" block variant="success">Enviar novamente</b-button>
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
    created() {
      this.$axios.$get('/brqv/send-confirm', { params: {
        email: localStorage.getItem('brqv_loggin_email'),
      }})
    },
    data() {
      return {
        timerCount: 120,
        show: false
      }
    },
    watch: {
      timerCount: {
        handler(value) {
          if (value > 0) {
            setTimeout(() => {
                this.timerCount--;
            }, 1000);
          }
          if (value == 0) {
            this.show = true
          }
        },
        immediate: true
      }
    },
    methods: {
      reenviar () {
        this.show = false
        this.timerCount = 120
        this.$axios.$get('/brqv/send-confirm', { params: {
        email: localStorage.getItem('brqv_loggin_email'),
      }})
      }
    },
  }
</script>