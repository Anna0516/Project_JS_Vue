import { createStore } from 'vuex'

const mutations = {
    updateUserName(state, userName) {
      state.userName = userName
    }
  },
  state = {
    userName: ''
  }

export default createStore({ mutations, state, strict: true })
