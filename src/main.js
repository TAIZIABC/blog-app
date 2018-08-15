// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios'
import store from './store/store'
import apiConfig from '../config/api.config'
import ElementUI from 'element-ui'
import './util/touch'
import 'element-ui/lib/theme-chalk/index.css'

Vue.prototype.$ajax = Axios;
Axios.defaults.baseURL = apiConfig.baseUrl;

Vue.use(ElementUI);
Vue.config.productionTip = false;

// 检测是否登入，配置路由拦截
router.beforeEach((to,form,next)=>{
  if(to.matched.some(m=>m.meta.auth)){
    if(store.state.isLogin){
      next();
    }else{
      // query:{ Rurl: to.fullPath}表示把当前路由信息传递过去方便登录后跳转回来；
      next({path: '/login',query:{rule: to.fullPath}})
    }
  }else{
    next();
  }
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  created(){
    if(localStorage.getItem('userInfo')){
      this.$store.state.userMsg = JSON.parse(localStorage.getItem('userInfo'));
      this.$store.state.isLogin = true;
    }
  }

});
