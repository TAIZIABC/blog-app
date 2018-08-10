<template>
    <div class="follow">
      <div class="head-wrap">
        <Heads title="我的关注"></Heads>
      </div>
      <div class="follow-body">
        <templlate>
          <li class="list-item" v-for="(user,index) in users">
            <div class="avatar-wrap">
              <img class="user-avatar" :src="user.userAvatar" >
            </div>
            <div class="user-desc">
              <div class="user-name">{{user.userName}}</div>
              <div class="user-motto">{{user.userMotto}}</div>
            </div>
            <button class="follow-btn" v-text="user.status?'已关注':'+关注'" @click="followFunc(index)"></button>
          </li>
        </templlate>
      </div>
      <div class="footer" v-text="users.length?'--end--':'暂无内容'"></div>
    </div>
</template>

<script>
  import Heads from '@/components/Heads'
  export default {
    name: "Follow",
    data(){
      return{
        users:[
          {
            userName: 'taizi',
            userAvatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530626000&di=95c0c71b654d2833b986db6f987c785e&imgtype=jpg&er=1&src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20170326%2F11cf01610f464ee6aaf529755fbbfff7_th.jpeg',
            userMotto: '走自己的路，让别人说去吧，天生我材必有用',
            status: true
          },
          {
            userName: 'admin',
            userAvatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530626000&di=95c0c71b654d2833b986db6f987c785e&imgtype=jpg&er=1&src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20170326%2F11cf01610f464ee6aaf529755fbbfff7_th.jpeg',
            userMotto: '走自己的路，让别人说去吧，天生我材必有用',
            status: true
          },
          {
            userName: 'blue',
            userAvatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530626000&di=95c0c71b654d2833b986db6f987c785e&imgtype=jpg&er=1&src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20170326%2F11cf01610f464ee6aaf529755fbbfff7_th.jpeg',
            userMotto: '走自己的路，让别人说去吧，天生我材必有用',
            status: true
          },
          {
            userName: 'lanou',
            userAvatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530626000&di=95c0c71b654d2833b986db6f987c785e&imgtype=jpg&er=1&src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20170326%2F11cf01610f464ee6aaf529755fbbfff7_th.jpeg',
            userMotto: '走自己的路，让别人说去吧，天生我材必有用',
            status: true
          }
        ]
      }
    },
    methods: {
      followFunc(index){
        this.users[index].status = !this.users[index].status;
      }
    },
    components:{
        Heads
    }
  }
</script>

<style scoped lang="stylus">
  .follow{
    .head-wrap{
      width: 100%
      height: 40px
    }
    .follow-body{
      margin-top: 20px
      .list-item{
        width: 100%
        height: 80px
        display: flex
        padding: 8px
        box-sizing: border-box
        border-bottom: 1px solid #f2f2f2
        .avatar-wrap{
          width: 18%
          .user-avatar{
            display: inline-block
            width: 60px
            height: 60px
            border-radius: 50%
            border: 1px solid #f2f2f2
          }
        }
        .user-desc{
          width: 65%
          padding-left: 4px
          .user-name{
            width: 100%
            line-height: 32px
            font-size: 18px
          }
          .user-motto{
            width: 100%
            line-height: 32px
            overflow: hidden
            text-overflow: ellipsis
            white-space: nowrap
          }
        }
        .follow-btn{
          width: 17%
          height: 30px
          margin-top: 18px
          border: 1px solid green
          background-color: white;
          color: green
          box-shadow: 0 0 1px yellow
        }
      }
    }
    .footer{
      width: 100%
      line-height: 100px
      text-align: center
    }
  }

</style>
