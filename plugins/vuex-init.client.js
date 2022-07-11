export default ({ store }) => {
  const isLogged = localStorage.getItem('brqv_loggin') ? Boolean(localStorage.getItem('brqv_loggin')) : false
  const loggedInUser = localStorage.getItem('brqv_userData') ? JSON.parse(localStorage.getItem('brqv_userData')) : {}

  store.commit('login/IS_LOGGIN', isLogged)
  store.commit('login/SET_USER', loggedInUser)
}