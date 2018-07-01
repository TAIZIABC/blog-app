<template>
    <div class="register">
      <div class="head-wrap">
        <Head title="注册"></Head>
      </div>
      <!--注册-->
      <div class="input-group">
        <div class="demo-input-suffix">
          <el-input
            placeholder="用户名"
            v-model="input21">
          </el-input>
        </div>
      </div>
      <div class="input-group">
        <div class="demo-input-suffix">
          <el-input
            placeholder="手机号"
            v-model="input21">
          </el-input>
        </div>
      </div>
      <div class="input-group">
        <div class="demo-input-suffix">
          <el-input
            placeholder="密码"
            v-model="input21">
          </el-input>
        </div>
      </div>
      <!--登入-->
      <div class="reg">
        <router-link :to="{path:'/login'}">已有账号登录</router-link>
      </div>
      <div class="btn">
        <el-button type="success" >注册</el-button>
      </div>
    </div>
</template>

<script>
  import Head from '@/components/head'
    export default {
      name: "Register",
      data(){
          return{
            title:'注册'
          }
      },
      components:{
        Head
      }
    }
</script>

<style scoped>
  .head-wrap{
    width: 100%;
    height: 40px;
    background-color: green;
  }
  .input-group{
    margin: 20px auto;
    width: 90%;
  }
  .reg{
    width: 95%;
    text-align: right;
    color: green;
    line-height: 20px;
  }
  .btn{
    width: 90%;
    margin: 0 auto;
  }
  .el-button{
    margin-top: 20px;
    width: 100%;
    height: 100%;
    margin-bottom: 50px;
    background-color: rgba(42, 247, 14, 0.99);
  }
</style>
