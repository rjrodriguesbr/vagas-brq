export const state = () => ({
  perPage: 8,
  currentPage: 1,
  items: [],
  jobPage: {}
})

export const getters = {
  $getItems(state) {
    return state.items
  },
  $getperPage(state) {
    return state.perPage
  },
  $getCurrentPage(state) {
    return state.currentPage
  },
  $getJobPage(state) {
    return state.jobPage[0]
  }
}

export const mutations = {
  SET_ITEMS(state, setItems) {
    state.items = setItems
  },
  SET_PERPAGE(state, setPerPage) {
    state.perPage = setPerPage
  },
  SET_CURRENT_PAGE(state, setPage) {
    state.currentPage = setPage
  },
  SET_JOB_PAGE(state, setjob) {
    state.jobPage = setjob
  },
}

