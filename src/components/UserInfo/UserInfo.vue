<template>
    <div class="user-info">
      <div class="head-wrap">
        <Head title="个人信息"></Head>
      </div>
      <div class="info-header">
        常规设置
      </div>
      <div class="info-list">
        <div class="info-item">
          <div class="info-item-left">
            更换头像
          </div>
          <div class="info-item-right">
            <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530626000&di=95c0c71b654d2833b986db6f987c785e&imgtype=jpg&er=1&src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20170326%2F11cf01610f464ee6aaf529755fbbfff7_th.jpeg" alt="" class="user-avatar">
          </div>
        </div>
        <div class="info-item" @touchstart.native="del">
          <div class="info-item-left">
            更改昵称
          </div>
          <div class="info-item-right">
            taizi
          </div>
        </div>
        <div class="info-item">
          <div class="info-item-left">
            手机号码
          </div>
          <div class="info-item-right">
            15297971325
          </div>
        </div>
        <div class="info-item">
          <div class="info-item-left">
            个性签名
          </div>
          <div class="info-item-right">
            走自己的路，让别人说去吧。
          </div>
        </div>
        <div class="info-item">
          <div class="info-item-left">
            重置密码
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import Head from '@/components/head'
    export default {
      name: "UserInfo",
      methods:{
        del(){
          alert(222);
        }
      },
      components:{
        Head
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
