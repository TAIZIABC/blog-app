import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  count: 1,
  isLogin: false,
  userMsg: ''
};

const getters = {

};
const mutations = {
  changeLogin(state){
    state.isLogin = true;
  },
  add(state){
    state.count++;
  }
};

export default new Vuex.Store({
  state,mutations,getters
})
