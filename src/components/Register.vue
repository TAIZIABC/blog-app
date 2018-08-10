<template>
    <div class="register">
      <div class="head-wrap">
        <Heads title="注册"></Heads>
      </div>
      <!--注册-->
      <div class="input-group">
        <div class="demo-input-suffix">
          <el-input
            placeholder="用户名"
            v-model="userMsg.username">
          </el-input>
        </div>
      </div>
      <div class="input-group">
        <div class="demo-input-suffix">
          <el-input
            placeholder="手机号"
            v-model="userMsg.phone">
          </el-input>
        </div>
      </div>
      <div class="input-group">
        <div class="demo-input-suffix">
          <el-input  type="password"
            placeholder="密码"
            v-model="userMsg.password">
          </el-input>
        </div>
      </div>
      <p class="msg-info" v-show="msginfo">{{msginfo}}</p>
      <!--登入-->
      <div class="reg">
        <router-link :to="{path:'/login'}">已有账号登录</router-link>
      </div>
      <div class="btn">
        <el-button type="primary" :loading="loading"  @click="reg">注册</el-button>
      </div>
    </div>
</template>

<script>
  import Heads from '@/components/Heads'
    export default {
      name: "Register",
      data(){
          return{
            title:'注册',
            userMsg: {
              username: '',
              password: '',
              phone: ''
            },
            msginfo: '',
            loading: false
          }
      },
      methods: {
        reg(){
          if(this.check()){
            this.loading = true;
            this.$ajax.post('/user/register',this.userMsg)
              .then((response)=>{
                console.log(response.data);
                this.loading = false;
                this.msginfo = response.data.msg;
                if(response.data.status===1){
                  let that = this;
                  setTimeout(function(){
                    that.$router.push({path: '/login'});
                  },1000);
                }
              })
              .catch((err)=>{
                console.log(err);
              })
          }
        },
        check(){
          if(this.userMsg.username.trim().length<1){
            this.msginfo = '用户名不能为空！';
            return false;
          }
          if(this.userMsg.phone.trim().length<1){
            this.msginfo = '手机号不能为空！';
            return false;
          }
          if(this.userMsg.phone.length!=11){
            this.msginfo = '手机号为11位！';
            return false;
          }
          if(this.userMsg.password.trim().length<1){
            this.msginfo = '密码不能为空！';
            return false;
          }
          return true;
        }
      },
      components:{
        Heads
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
  .msg-info{
    padding: 8px;
    color: red;
    text-align: center;
    font-size: 16px;
    margin-bottom: 10px;
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
    width: 100%;
    margin-top: 20px;
    /*height: 100%;*/
    /*margin-bottom: 50px;*/
    /*background-color: rgba(42, 247, 14, 0.99);*/
  }
</style>
