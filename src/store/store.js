import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  isLogin: false,
  userMsg: {},
  articles: []
};

const getters = {

};
const mutations = {
  changeLogin(state){
    state.isLogin = true;
  },
  setInfo(state,msg){
    state.userMsg = msg;
    let userInfo =  JSON.stringify(msg);
    localStorage.setItem('userInfo',userInfo);
  }
};

export default new Vuex.Store({
  state,mutations,getters
})
