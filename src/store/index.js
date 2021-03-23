import { createStore, createLogger } from 'vuex'
import createPersistedstate from './plugins/persistedstate'
const debug = process.env.NODE_ENV !== 'production'

export default createStore({
  state: {
    loginStatus: 0,
    userInfo: {}
  },
  getters: {
    loginStatus: state => state.loginStatus,
    userInfo: state => state.userInfo
  },
  mutations: {
    SET_USER_INFO(state, userInfo) {
      state.userInfo = userInfo
    },
    SET_LOGIN_STATUS(state, loginStatus) {
      state.loginStatus = loginStatus
    }
  },
  actions: {
    setUserInfo({ commit }, userInfo) {
      commit('SET_USER_INFO', userInfo)
    },
    setLoginStatus({ commit }, loginStatus) {
      commit('SET_LOGIN_STATUS', loginStatus)
    }
  },
  plugins: debug
    ? [createLogger(), createPersistedstate()]
    : [createPersistedstate()]
})
