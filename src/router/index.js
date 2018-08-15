import Vue from 'vue'
import Router from 'vue-router'
// import Home from '@/components/Home/Home'
// import Search from '@/components/Search/Search'
// import Publish from '@/components/Publish/Publish'
// import Personal from '@/components/Personal/Personal'
// import Login from '@/components/Login'
// import ModifyPwd from '@/components/ModifyPwd'
// import Register from '@/components/Register'
// import Detail from '@/components/Detail/Detail'
// import MyWorks from '@/components/MyWorks/MyWorks'
// import MyCollection from '@/components/MyCollection/MyCollection'
// // import MyNews from '@/components/MyNews/MyNews'
// import UserInfo from '@/components/UserInfo/UserInfo'
// import Follow from '@/components/Follow/Follow'
// import Avatar from '@/components/Avatar'


// 改用路由懒加载
Vue.use(Router);
export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/home',
      name:'主页'
    },
    {
      path: '/home',
      name: 'Home',
      meta: {
        keepAlive: true
      },
      // component: Home
      component: resolve => require(['@/components/Home/Home'],resolve)
    },
    {
      path:'/search',
      name:'Search',
      meta: {
        keepAlive: false
      },
      // component:Search
      component: resolve => require(['@/components/Search/Search'],resolve)
    },
    {
      path:'/personal',
      name:'Personal',
      // component:Personal
      component: resolve => require(['@/components/Personal/Personal'],resolve)
    },
    {
      path:'/publish',
      name:'Publish',
      // component:Publish
      component: resolve => require(['@/components/Publish/Publish'],resolve)
    },
    {
      path:'/login',
      name:'login',
      // component:Login,
      component: resolve => require(['@/components/Login'],resolve)
    },
    {
      path:'/modify',
      name:'modify',
      // component:ModifyPwd,
      component: resolve => require(['@/components/ModifyPwd'],resolve)
    },
    {
      path:'/register',
      name:'register',
      // component:Register
      component: resolve => require(['@/components/Register'],resolve)
    },
    {
      path:'/detail',
      name:'detail',
      // component:Detail
      component: resolve => require(['@/components/Detail/Detail'],resolve)
    },
    {
      path:'/myworks',
      name:'MyWorks',
      meta:{
        auth:true
      },
      // component:MyWorks
      component: resolve => require(['@/components/MyWorks/MyWorks'],resolve)
    },
    {
      path:'/mycollection',
      name:'MyCollection',
      meta:{auth:true},
      // component:MyCollection
      component: resolve => require(['@/components/MyCollection/MyCollection'],resolve)
    },
    {
      path:'/follow',
      name:'Follow',
      meta:{auth:true},
      // component:Follow
      component: resolve => require(['@/components/Follow/Follow'],resolve)
    },
    // {
    //   path:'/mynews',
    //   name:'MyNews',
    //   meta:{auth:true},
    //   component:MyNews
    //   // component: resolve => require(['@/components/MyNews/MyNews'],resolve)
    // },
    {
      path:'/userinfo',
      name:'UserInfo',
      meta:{auth:true},
      // component:UserInfo
      component: resolve => require(['@/components/UserInfo/UserInfo'],resolve)
    },
    {
      path:'/avatar',
      name:'Avatar',
      meta:{auth:true},
      // component:Avatar
      component: resolve => require(['@/components/UserInfo/UserInfo'],resolve)
    }
  ]
})
