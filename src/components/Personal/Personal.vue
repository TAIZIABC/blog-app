<template>
  <div class="personal">
    <NavTab :active="3"></NavTab>
    <div class="head">
      <div>
        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530626000&di=95c0c71b654d2833b986db6f987c785e&imgtype=jpg&er=1&src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20170326%2F11cf01610f464ee6aaf529755fbbfff7_th.jpeg" alt="">
        <div class="name"><router-link :to="{path:'/login'}">taizi</router-link></div>
      </div>
    </div>
    <ul class="list">
      <router-link :to="{path:'/myworks'}">
        <li class="list-item">我的作品
          <span class="right-tag el-icon-arrow-right"></span>
        </li>
      </router-link>
      <router-link :to="{path:'/mycollection'}">
        <li class="list-item">我的收藏
          <span class="right-tag el-icon-arrow-right"></span>
        </li>
      </router-link>
      <router-link :to="{path:'/follow'}">
        <li class="list-item">我的关注
          <span class="right-tag el-icon-arrow-right"></span>
        </li>
      </router-link>
      <router-link :to="{path:'/mynews'}">
        <li class="list-item">我的消息
          <span class="right-tag el-icon-arrow-right"></span>
        </li>
      </router-link>
      <router-link :to="{path:'/userinfo'}">
        <li class="list-item">个人信息
          <span class="right-tag el-icon-arrow-right"></span>
        </li>
      </router-link>
    </ul>
  </div>
</template>

<script>
  import NavTab from '@/components/NavTab'
    export default {
        name: "Personal",
      components:{
          NavTab
      }
    }
</script>

<style scoped>
  .personal{
    background-color: #d0d0d0;
  }
  .head{
    display: flex;
    width: 100%;
    height: 200px;
    background-color: green;
    justify-content: center;
    align-items: center;
  }
  .head img{
    width: 60px;
    height: 60px;
    border-radius: 50%;
    display: block;
  }
  .name{
    width: 60px;
    line-height: 20px;
    text-align: center;
  }
  .list{
    width: 100%;
    margin-top: 10px;
  }
  .list-item{
    position: relative;
    width: 100%;
    line-height: 50px;
    font-size: 20px;
    text-indent: 8px;
    background-color: white;
    border-bottom: 1px solid #d0d0d0;
  }
  .right-tag{
    position: absolute;
    right: 10px;
    top:15px;
    font-size: 25px;
  }

</style>
