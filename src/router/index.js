import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Home'
import Search from '@/components/Search/Search'
import Publish from '@/components/Publish/Publish'
import Personal from '@/components/Personal/Personal'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Detail from '@/components/Detail/Detail'
import MyWorks from '@/components/MyWorks/MyWorks'
import MyCollection from '@/components/MyCollection/MyCollection'
import MyNews from '@/components/MyNews/MyNews'
import UserInfo from '@/components/UserInfo/UserInfo'
import Follow from '@/components/Follow/Follow'

Vue.use(Router);

export default new Router({
  mode:'history',
  routes: [
    {
      path:'/',
      redirect:'/home',
      name:'主页'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path:'/search',
      name:'Search',
      component:Search
    },
    {
      path:'/publish',
      name:'Publish',
      component:Publish
    },
    {
      path:'/personal',
      name:'Personal',
      component:Personal
    },
    {
      path:'/login',
      name:'login',
      component:Login
    },
    {
      path:'/register',
      name:'register',
      component:Register
    },
    {
      path:'/detail',
      name:'detail',
      component:Detail
    },
    {
      path:'/myworks',
      name:'MyWorks',
      component:MyWorks
    },
    {
      path:'/mycollection',
      name:'MyCollection',
      component:MyCollection
    },
    {
      path:'/follow',
      name:'follow',
      component:Follow
    },
    {
      path:'/mynews',
      name:'MyNews',
      component:MyNews
    },
    {
      path:'/userinfo',
      name:'UserInfo',
      component:UserInfo
    }
  ]
})
