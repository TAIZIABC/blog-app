<template>
    <div class="user-info">
      <div class="head-wrap">
        <Heads title="个人信息"></Heads>
      </div>
      <div class="info-header">
        常规设置
      </div>
      <div class="info-list" >
        <router-link to="/avatar">
          <div class="info-item">
            <div class="info-item-left">
              更换头像
            </div>
            <div class="info-item-right">
              <img :src="userMsg.headimgSrc" alt="" class="user-avatar">
            </div>
          </div>
        </router-link>
        <div class="info-item" @click="openBox(userMsg.userName,'userName')">
          <div class="info-item-left">
            更改昵称
          </div>
          <div class="info-item-right">
            {{userMsg.userName}}
          </div>
        </div>
        <div class="info-item" @click="openBox(userMsg.userPhone,'userPhone')">
          <div class="info-item-left">
            手机号码
          </div>
          <div class="info-item-right">
            {{userMsg.userPhone}}
          </div>
        </div>
        <div class="info-item" @click="openBox(userMsg.gxqm,'gxqm')">
          <div class="info-item-left">
            个性签名
          </div>
          <div class="info-item-right">
            {{userMsg.gxqm}}
          </div>
        </div>
        <div class="info-item">
          <div class="info-item-left">
            <router-link to="/modify">重置密码</router-link>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import Heads from '@/components/Heads'
  import { MessageBox } from 'element-ui'
    export default {
      name: "UserInfo",
      data(){
        return{
          userMsg: {}
        }
      },
      methods:{
        openBox(msg,type){
          MessageBox.prompt('', '修改信息', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'info',
            center: true,
            inputValue:msg
          }).then((val) => {
            if(type==='userPhone'){
              let isLegal = val.value.match(/^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/);
              if(!isLegal){
                this.$message({type: 'error',message: '数据不合法!'});
                return;
              }
            }
            // 服务端修改
            this.$ajax.post('/admin/info',{type,value:val.value,id: this.userMsg._id})
              .then((response)=>{
                console.log(response.data);
                if(response.data.status){
                  // 客服端修改
                  this.$store.state.userMsg[type] = val.value;
                  this.userMsg[type] = val.value;
                  this.$message({type: 'success',message: '修改成功!'});
                }else{
                  this.$message({type: 'success',message: '修改失败!'});
                  return;
                }
              });
          }).catch(() => {
            this.$message({type: 'info',message: '已取消修改'});
          });
        },
        del(){
          alert(222);
        }
      },
      created(){
        this.userMsg = this.$store.state.userMsg;
      },
      components:{
        Heads
      }
    }
</script>

<style scoped lang="stylus">
  .user-info{
    .head-wrap{
      width: 100%
      height: 40px
    }
    .info-header{
      width: 100%
      height: 40px
      line-height: 40px
      background-color: #f2f2f2
    }
    .info-list{
      width: 100%
      .info-item{
        width: 100%
        height: 60px
        padding: 8px
        box-sizing: border-box
        border-bottom: 1px solid #f2f2f2
        .info-item-left{
          float: left
          line-height: 44px
          color: #000
        }
        .info-item-right{
          float: right
          line-height: 34px
          .user-avatar{
            width: 40px
            height: 40px
            border-radius: 50%
            margin-top: 2px
          }
        }
      }
    }
  }

</style>
