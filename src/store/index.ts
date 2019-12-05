import Vue from 'vue'
import Vuex from 'vuex'
import Test from './test/testVuex'
import DataSource from './datasource/datasource'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    Test,
    DataSource
  },
  getters: {
  }
})
