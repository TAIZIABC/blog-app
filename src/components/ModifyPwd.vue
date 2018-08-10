<template>
  <div class="modify">
    <div class="head-wrap">
      <Heads title="修改密码"></Heads>
    </div>
    <!--输入框-->
    <div class="input-group">
      <div class="demo-input-suffix">
        <el-input type="password"
          placeholder="原密码"
          v-model="userMsg.oldPassword">
        </el-input>
      </div>
    </div>
    <div class="input-group">
      <div class="demo-input-suffix">
        <el-input type="password"
                  placeholder="新密码"
                  v-model="userMsg.newPassword">
        </el-input>
      </div>
    </div>
    <p class="msg-info" v-show="msginfo">{{msginfo}}</p>
    <div class="btn">
      <el-button type="success" :loading="loading" @click="loginBtn">修改</el-button>
    </div>
  </div>

</template>

<script>
  import Heads from '@/components/Heads'
  export default {
    name: "ModifyPwd",
    data(){
      return{
        userMsg:{
          oldPassword: '',
          newPassword: '',
          type: 'userPwd',
          id: ''
        },
        msginfo: '',
        loading: false
      }
    },
    methods: {
      loginBtn(){
        if(this.checked()){
          this.loading = true;
          this.userMsg.value = this.userMsg.newPassword;
          console.log(this.userMsg);
          this.$ajax.post('/admin/info',this.userMsg)
            .then((response)=>{
              this.loading = false;
              this.msginfo = response.data.msg;
              this.$store.state.userMsg = response.data.userMsg;
              // this.$router.push({path: '/userinfo'});
              console.log(response.data);
            })
            .catch((err)=>{
              console.log(err);
            })
        }
      },
      checked(){
        if(this.userMsg.oldPassword.trim().length<1){
          this.msginfo = '原密码不能为空！';
          return false;
        }
        if(this.userMsg.newPassword.trim().length<1){
          this.msginfo = '新密码不能为空！';
          return false;
        }
        return true;
      }
    },
    created(){
      this.userMsg.id = this.$store.state.userMsg._id;
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
