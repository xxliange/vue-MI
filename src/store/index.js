import vue from 'vue'
import vuex from 'vuex'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'
import state from './state'
import SiteState from './SiteState'

vue.use(vuex)

export default new vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  // strict: false,
  namespaced: true,
  actions,
  getters,
  mutations,
  state,
  SiteState
})
