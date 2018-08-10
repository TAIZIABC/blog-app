<template>
    <div class="login">
      <div class="head-wrap">
        <Heads title="登入"></Heads>
      </div>
      <!--输入框-->
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
          <el-input type="password"
            placeholder="密码"
            v-model="userMsg.password">
          </el-input>
        </div>
      </div>
      <p class="msg-info" v-show="msginfo">{{msginfo}}</p>
      <!--注册-->
      <div class="reg">
        <router-link :to="{path:'/register'}">新用户注册</router-link>
      </div>
      <div class="btn">
        <el-button type="success" :loading="loading" @click="loginBtn">登入</el-button>
      </div>
    </div>

</template>

<script>
  import Heads from '@/components/Heads'
    export default {
      name: "Login",
      data(){
        return{
          userMsg:{
            phone: '',
            password: ''
          },
          msginfo: '',
          loading: false
        }
      },
      methods: {
        loginBtn(){
          if(this.checked()){
            this.loading = true;
            this.$ajax.post('/user/login',this.userMsg)
              .then((response)=>{
                this.loading = false;
                this.msginfo = response.data.msg;
                this.$store.commit('changeLogin');
                this.$store.state.userMsg = response.data.userMsg;
                this.$router.push({path: '/personal'});
                console.log(response.data);
              })
              .catch((err)=>{
                console.log(err);
              })
          }
        },
        checked(){
          if(this.userMsg.phone.trim().length<1){
            this.msginfo = '手机号不能为空！';
            return false;
          }
          if(this.userMsg.password.trim().length<1){
            this.msginfo = '密码不能为空！';
            // this.$message({
            //   type: 'info',
            //   message: '密码不能为空！'
            // });
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
  .msg-info{
    padding: 8px;
    color: red;
    text-align: center;
    font-size: 16px;
    margin-bottom: 10px;
  }

</style>
