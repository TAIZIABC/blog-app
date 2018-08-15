<template>
  <div class="personal">
    <NavTab :active="3"></NavTab>
    <div class="head">
      <div v-show="!isLogin" class="login-wrap">
        <router-link :to="{path:'/login'}">请登录</router-link>
      </div>
      <div v-show="isLogin">
        <img :src="userMsg.headimgSrc" alt="网络错误，图片加载失败！">
        <div class="name">{{userMsg.userName}}</div>
      </div>
    </div>
    <ul class="list">
      <router-link :to="{path:'/myworks'}">
        <li class="list-item" >我的作品
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
      <!--<router-link :to="{path:'/mynews'}">-->
        <!--<li class="list-item">我的消息-->
          <!--<span class="right-tag el-icon-arrow-right"></span>-->
        <!--</li>-->
      <!--</router-link>-->
      <router-link :to="{path:'/userinfo'}">
        <li class="list-item">个人信息
          <span class="right-tag el-icon-arrow-right"></span>
        </li>
      </router-link>
      <li class="list-item" v-show="isLogin" @click="logout">退出账号
        <span class="right-tag el-icon-arrow-right"></span>
      </li>
    </ul>
  </div>
</template>

<script>
  import NavTab from '@/components/NavTab'
    export default {
      name: "Personal",
      data(){
        return{
          userMsg: {}
        }
      },
      components:{
          NavTab
      },
      computed: {
        isLogin(){
          return this.$store.state.isLogin;
        }
      },
      methods: {
        logout(){
          this.$store.state.isLogin = false;
          this.$store.state.userMsg = {};
          localStorage.setItem('userInfo', '');
        }
      },
      created(){
        this.userMsg = this.$store.state.userMsg;
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
  .login-wrap{
    width: 60px;
    height: 60px;
    text-align: center;
    line-height: 60px;
    border-radius: 50%;
    background-color: rgba(99, 212, 245, 0.8);
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
