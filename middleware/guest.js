export default function ({ store, redirect }) {
  if (store.state.login.isLoggin) {
    return redirect('/me/profile')
  }
}