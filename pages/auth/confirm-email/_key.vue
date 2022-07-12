<template>
  <div class="container">
    <p class="mt-3"><strong>✔ Email Confirmado!</strong></p>
    <b-alert variant="success" show>✅Tudo Certo! Seu email foi confirmado. Complete seus dados e boa sorte, estamos torcendo por você fera!</b-alert>
    <b-button @click="acessar" block variant="success">Acessar minha conta</b-button>
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
      this.$axios.$get('/brqv/confirm-account', { params: {
        key: this.$route.params.key,
      }}).then(response => {
        this.confirm = response ? true : false
      }).catch(error => {
        this.confirm = response ? true : false
      })
    },
    data() {
      return {
        confirm: false
      }
    },
    methods: {
      acessar () {
        this.$router.push('/auth/signin')
      }
    },
  }
</script>