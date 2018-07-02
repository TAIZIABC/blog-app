<template>
  <div class="nav-tab">
    <ul>
        <li v-for="(item,index) in tabs"  @click="change(index)">
          <router-link :to="{path:item.tag}" :class="{active:active===index}">
            <svg class="icon" aria-hidden="true">
              <use :href="item.icon"></use>
            </svg>
            <p>{{item.name}}</p>
          </router-link>
        </li>
    </ul>
  </div>
</template>

<script>
  import {js} from '../assets/font.js';
export default {
  name: 'NavTab',
  props: ['active'],
  data () {
    return {
      tabs:[
      	{
      		name:'首页',
      		icon:'#icon-geren1',
      		tag: '/home'
      	},
      	{
      		name:'发布',
      		icon:'#icon-fabu',
      		tag: '/publish'
      	},
      	{
      		name:'搜索',
      		icon:'#icon-sousuo1',
      		tag: '/search'
      	},
      	{
      		name:'个人',
      		icon:'#icon-user',
      		tag: '/personal'
      	}
      ],
    }
  },
  methods: {
    change: function (index) {
      this.active = index;
    }
  }
}
</script>


<style scoped lang="stylus">
  .active
    color blue
  .nav-tab
    width: 100%;
    height: 44px;
    background-color: white;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 998;
    border-top: 1px solid #4df2ed;
    padding-top: 2px;
    ul
      display:flex
      width:100%
      height:100%
      li
        flex:1
        list-style:none
        height:100%
        text-align center
        .icon
          font-size:20px
        p
          font-size:14px
</style>
