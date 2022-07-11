export const state = () => ({
  isLoggin: false,
  user: {}
})

export const getters = {
  $getUser(state) {
    return state.user
  },
  $getLoggin(state) {
    return state.isLoggin
  }
}

export const mutations = {
  IS_LOGGIN(state, status) {
    state.isLoggin = status
  },
  SET_USER(state, setUser) {
    state.user = setUser
  },
  IS_LOGOUT(state) {
    state.user = {},
    state.isLoggin = false
  }
}

export const actions = {
  async setLogin(context, setUser) {
    context.commit('IS_LOGGIN', true)
    context.commit('SET_USER', setUser)
  },
  async setLogout(context) {
    context.commit('IS_LOGOUT')
    localStorage.removeItem('brqv_loggin')
    localStorage.removeItem('brqv_userData')
    this.$router.push('/auth/signin')
  },
  async updateUser(context, setUser) {
    context.commit('SET_USER', setUser)
    localStorage.setItem('brqv_userData', JSON.stringify(setUser))
  }
}