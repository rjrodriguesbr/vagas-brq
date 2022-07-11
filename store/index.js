export const state = () => ({
  isLoggin: false,
  userLogin: {}
})

export const getters = {
  isAuthenticated(state) {
    if (state.auth.user) {
      return true
    }
  },

  loggedInUser(state) {
    return state.auth.user
  },

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
  }
}