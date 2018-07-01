import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Home'
import Search from '@/components/Search/Search'
import Publish from '@/components/Publish/Publish'
import Personal from '@/components/Personal/Personal'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Detail from '@/components/Detail/Detail'

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
    }
  ]
})
