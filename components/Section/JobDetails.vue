<template>
  <section class="sec-details">
    <div class="container mt-2 border-bottom header-sticky">
      <div class="row mb-2">
        <div class="col pt-2 align-items-center">
          <img class="pr-1" src="@/assets/icons/place.svg">
          <small class="text-dark mr-4">Brasil</small>
          <img class="pr-1" src="@/assets/icons/level_pleno.svg">
          <small class="text-dark mr-4">Pleno</small>
          <img class="pr-1" src="@/assets/icons/monetization_on.svg">
          <small class="text-dark mr-4">A Combinar</small>
          <img class="pr-1" src="@/assets/icons/work_outline.svg">
          <small class="text-dark mr-4">Regime CLT</small>
        </div>
        <div class="col-sm-2">
          <b-button @click="setInscricao" variant="success" v-b-tooltip.hover :title="buttonDesc" :disabled="inscricao" squared>{{ buttonTitle }}</b-button>
        </div>
      </div>
    </div>

    <div class="container border-bottom pb-4">
      <div class="row">
        <div class="col-lg-8 pr-5">
          <p class="mt-3 text-brq"><strong>Detalhes da vaga</strong></p>
          <p class="text-break">
            Ei Analista Pleno, chegou o momento de encarar um novo desafio em sua carreira! 
            Venha ser um #ferabrq Sobre a BRQ Digital Há 28 anos no mercado, a BRQ Digital Solutions se consolidou como uma das maiores empresas de transformação digital do país. Com uma plataforma de serviços end to end, oferecemos as mais eficientes e inovadoras soluções, tecnologias e metodologias, promovendo uma jornada de transformação para grandes marcas, de diferentes segmentos, no Brasil e no exterior. Nossos 3 mil funcionários atuam no modelo de trabalho Anywhere Office e a empresa é destaque como um dos melhores lugares para trabalhar pelo GPTW e Glassdoor.   
            <br>
            <br>
            <strong>O que procuramos?</strong><br>
            Buscamos um #fera que sabe que é o verdadeiro protagonista do seu sucesso! Queremos em nosso time pessoas motivadas por desafios, constante evolução e, claro, que são apaixonadas por tecnologia e transformação!   
            <br>
            <br>
            <strong>O que você deve ter?</strong><br>
            • Boa comunicação, um perfil analítico e proativo; 
            • Experiências com Pacote Office, principalmente Excel e Word 
            • Que tenha experiências com atividades administrativas; 
            • Experiências com contratos. 
            • Será umas deferências ter atuado no setor financeiro ou de tecnologia   
            <br>
            <br>
            <strong>O que temos pra te oferecer? </strong><br>
            Mais do que um plano de carreira! A BRQ acredita que cada fera deve ser protagonista do seu crescimento, tendo autonomia para criar seu próprio plano de desenvolvimento profissional. Nosso plano de carreira é dividido em 4 etapas: 
            - Carreira técnica: Você pode seguir a trilha de crescimento técnico, se o seu objetivo for se desenvolver cada vez mais em diferentes tecnologias. Oferecemos diversos treinamentos! 
            - Mobilidade Interna: Você quer um novo rumo profissional? Aqui dentro de casa temos diversas opções diferentes e o programa de mobilidade interna, que te permite mudar de área, por exemplo. 
            - Experiência internacional: Estamos crescendo cada vez mais fora do Brasil e você tem possibilidade de atuar em projetos para outros países, ou diretamente nos países onde a BRQ tem sede. 
            - Empreendedorismo: De funcionário para sócio! Temos o Innovation Hub, a Corporate Venture que investe em ideias de profissionais que tenham sinergia com nosso negócio. 
            <br>
            <br>
            <strong>E os benefícios? </strong><br>
            Plano de Saúde; Plano Odontológico; Seguro de Vida; Vale Refeição; Vale Alimentação; Horário Flexível; Home Office; Gympass, Telemedicina, Telenutrição, Canal de suporte emocional 24h e muito mais! 
            <br>
            <br>
            <strong>Como é trabalhar na BRQ? </strong><br>
            Temos um clima descontraído, diversos programas e eventos internos. Adoramos comemorar! E fazemos isso muito bem! Veja aqui no Youtube: youtube.com/brqdigitalsolutions Curtiu? Então inscreva-se e venha para o melhor da Transformação Digital com a gente!
          </p>
        </div>
        <div class="col-lg-4">
          <div>
            <p class="mt-3 text-brq"><strong>Requisitos</strong></p>
            <p>Formação superior (cursando)</p>
          </div>
          <div>
            <p class="mt-3 text-brq"><strong>Benefícios</strong></p>
            <div>
              <div>
                <b-card-group class="flex">
                  <b-card class="text-center p-0 border-0">
                    <img src="@/assets/icons/benefits/medical.svg" alt="">
                    <small>Assistência Médica</small>
                  </b-card>

                  <b-card class="text-center border-0">
                    <img src="@/assets/icons/benefits/tooth.svg" alt="">
                    <small>Assistência Odontológica</small>
                  </b-card>

                  <b-card class="text-center border-0">
                    <img src="@/assets/icons/benefits/covenant.svg" alt="">
                    <small>Convênio</small>
                  </b-card>

                  <b-card class="text-center border-0">
                    <img src="@/assets/icons/benefits/life.svg" alt="">
                    <small>Seguro de vida</small>
                  </b-card>
                </b-card-group>
              </div>

              <div class="mt-1">
                <b-card-group>
                  <b-card class="text-center border-0">
                    <img src="@/assets/icons/benefits/snack.svg" alt="">
                    <small>Vale-refeição</small>
                  </b-card>

                  <b-card class="text-center border-0">
                    <img src="@/assets/icons/benefits/home.svg" alt="">
                    <small>Home Office</small>
                  </b-card>

                  <b-card class="text-center border-0">
                    <img src="@/assets/icons/benefits/flexible.svg" alt="">
                    <small>Horário flexível</small>
                  </b-card>

                  <b-card class="text-center border-0">
                    <img src="@/assets/icons/benefits/food.svg" alt="">
                    <small>Vale-Alimentação</small>
                  </b-card>
                </b-card-group>
              </div>
            </div>
          </div>
          <div>
            <p class="mt-3 text-brq"><strong>Conheça a empresa</strong></p>
            <p>
            Há 28 anos no mercado, a BRQ Digital Solutions se consolidou como uma das maiores empresas de transformação digital do país. Com uma plataforma de serviços end-to-end, oferecemos as mais eficientes e inovadoras soluções, tecnologias e metodologias, promovendo uma jornada de transformação para grandes marcas, de diferentes segmentos, no Brasil e no exterior. Nossos 3 mil funcionários atuam no modelo de trabalho Anywhere Office e a empresa é destaque como um dos melhores lugares para trabalhar pelo GPTW e Glassdoor.
            </p>
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
        inscricao: '',
        userInscricao: '',
        vagaId: '',
        buttonDesc: '',
        buttonTitle: 'INSCREVA-SE'
      }
    },
    created() {
      this.$axios.$get(`brqv/vaga?id=${this.$route.params.id}`).then(response => {
        this.$store.commit('jobs/SET_JOB_PAGE', response.data)
        this.vagaId = response.data.id
        if(this.$store.state.login.isLoggin) {
          if (this.$store.state.login.user.candidado_inscricao_vaga) {
            this.userInscricao = this.$store.state.login.user.candidado_inscricao_vaga.split(",")
            this.inscricao = this.userInscricao.includes(response.data[0].id.toString())
            this.buttonTitle = this.inscricao ? "INSCRITO" : "INSCREVA-SE"
            this.buttonDesc = this.inscricao ? "Você já está inscrito na vaga!" : "Clique para se inscrever"
          }
            this.vagaId = response.data[0].id
        } else {
          this.buttonDesc = "Faça seu registro para se inscrever nesta vaga!"
          this.inscricao = false
        }
      })
    },
    methods: {
      async setInscricao() {
        if(this.$store.state.login.isLoggin) {
          await this.$axios.$get(`brqv/user/inscricao`, { params: {
            id: this.$store.state.login.user.id,
            vaga: this.vagaId
          }}).then(response => {
            this.$store.dispatch('login/setLogin', response.data)
            this.$toast.success(`Inscrição realizada! 👍`)
            this.inscricao = true
            this.buttonTitle = this.inscricao ? "INSCRITO" : "INSCREVA-SE"
            this.buttonDesc = this.inscricao ? "Você já está inscrito na vaga!" : "Clique para se inscrever"
          })
        } else {
          this.$toast.info(`Faça login ou cadastre-se para se inscrever nesta vaga!`, {
            action : [
              {
                text : 'Entrar',
                onClick : (e, toastObject) => {
                    this.$router.push('/auth/signin')
                }
              },
              {
                text : 'Criar Conta',
                onClick : (e, toastObject) => {
                    this.$router.push('/auth/signup')
                }
              },
            ]
          })
        }
      }
    },
  }
</script>

<style scoped>
  .text-brq {
    color: #006699;
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
</style>