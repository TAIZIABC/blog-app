<template>
    <div class="detail">
      <div class="head-wrap">
        <Heads></Heads>
      </div>
      <div class="title">
        <h2>{{ article.title }}</h2>
      </div>
      <div class="author">
        <img class="avator" :src="article.authorHeadImg" alt="">
        <span class="author_name">{{ article.author }}</span>
        <el-button type="success" size="small" class="follow" @click="followFun">{{ follow?'已关注':'关注'}}</el-button>
      </div>
      <div class="time">发布于：{{ article.time }}</div>
      <!--内容区域-->
      <div class="content">
        <img class="content-img" :src="article.worksSrc" v-show="article.worksSrc">
        <p>{{ article.content }}</p>
      </div>
      <!--底部区域-->
      <div class="footer" v-show="footBox">
        <li class="item" @click="commentFun">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-pinglun"></use>
          </svg>
          <p>评论{{ ratings.length }}</p>
        </li>
        <li class="item" @click="coll">
          <svg class="icon" aria-hidden="true">
            <use :href="collection?'#icon-xin2':'#icon-zan'"></use>
          </svg>
          <p>收藏{{ article.likeUserId.length }}</p>
        </li>
        <li class="item" @click="zanFun">
          <svg class="icon" aria-hidden="true">
            <use :href="zan?'#icon-zan11':'#icon-icon_good'"></use>
          </svg>
          <p>赞{{ article.zan }}</p>
        </li>
        <li class="item" @click="caiFun">
          <svg class="icon" aria-hidden="true">
            <use :href="cai?'#icon-cai2':'#icon-cai'"></use>
          </svg>
          <p>踩{{ article.cai }}</p>
        </li>
      </div>
      <!--弹窗-->
      <div class="comment-box" v-show="commentBox" @click="commentFuns">
        <div class="box" @click.stop="stopFun">
          <textarea type="text" class="comment-txt" v-model="ratingVal"></textarea>
          <button class="publish" @click="publish">发表评论</button>
        </div>
      </div>
      <!--评论区-->
      <div class="comment">
        <div class="comment-head">
          <span>评论({{ ratings.length}})</span>
        </div>
        <template>
          <li class="comment-item" v-for="(rating,index) in ratings">
            <div class="comment-item-head">
              <img :src="rating.userHeadImg" alt="" class="user-avatar">
              <div class="user-name">
                <span>{{ rating.userName }}</span>&nbsp;
                <span class="time">{{ rating.time}}</span>
              </div>
              <div class="item-right">
                <svg class="icon" aria-hidden="true" @click="ratingZan(index)">
                  <use xlink:href="#icon-icon_good"></use>
                </svg>{{ rating.zan}}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <svg class="icon" aria-hidden="true" @click="ratingCai(index)">
                  <use xlink:href="#icon-cai"></use>
                </svg>{{ rating.cai}}
              </div>
            </div>
            <div class="comment-item-body">
              <p>{{ rating.content}}</p>
            </div>
          </li>
        </template>
        <div class="comment-footer">
          --end--
        </div>
      </div>
    </div>
</template>

<script>
  import Heads from '@/components/Heads'
  import timeFunc from '@/util/time'
  Date.prototype.Format = timeFunc;
  export default {
    name: "Detail",
    data(){
      return{
        // 关注
        follow: false,
        // 评论弹窗
        commentBox: false,
        footBox: true,
        // 底部选项
        collection: false,
        zan: false,
        cai: false,
        // 评论内容
        ratingVal: '',
        article: {
          // title: '终于等到你：简书代码块高亮',
          // authorName: 'taizi',
          // userHeadImg: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=941310360,2054712345&fm=27&gp=0.jpg',
          // time: '2018-05-28 16:50',
          // imgSrc: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530377300123&di=ddfe6fb3231ebd1771e87c5c93a7179b&imgtype=0&src=http%3A%2F%2Fg.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2Fb7003af33a87e95053e42ae21c385343faf2b449.jpg',
          // content: '就在上周，我们的产品小哥哥告诉大婶，咋们偷偷上线了一个新功能:那就是技术类作者期待了很久的代码块高亮。',
          // comment: 5,
          // collection: 2,
          // zan: 14,
          // cai: 6
        },
        ratings:[
          {
            id: 1,
            userName: 'taizi',
            userHeadImg: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=941310360,2054712345&fm=27&gp=0.jpg',
            time: '06.29 09:22',
            content: '作者是有怎样的才华，才能把小事表现的淋漓尽致的。',
            zan: 4,
            cai: 5
          },
          {
            id: 1,
            userName: 'taizi',
            userHeadImg: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=941310360,2054712345&fm=27&gp=0.jpg',
            time: '06.29 09:22',
            content: '作者是有怎样的才华，才能把小事表现的淋漓尽致的。',
            zan: 4,
            cai: 5
          },
          {
            id: 1,
            userName: 'taizi',
            userHeadImg: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=941310360,2054712345&fm=27&gp=0.jpg',
            time: '06.29 09:22',
            content: '作者是有怎样的才华，才能把小事表现的淋漓尽致的。',
            zan: 4,
            cai: 5
          }
        ],
        // 是否登录
        isLogin: false
      }
    },
    methods: {
      // 开启弹窗
      commentFun(){
        this.commentBox = true;
        this.footBox = false;
      },
      // 关闭弹窗
      commentFuns(){
        this.commentBox = false;
        this.footBox = true;
      },
      // 阻止事件冒泡,防止点击输入框消失弹窗
      stopFun(){
        return false;
      },
      // 收藏方法
      coll(){
        if(this.isLogin){
          this.collection = !this.collection;
          let action = this.collection;
          this.$ajax.post('/article/soucan',{'aid': this.article._id,'uid': this.$store.state.userMsg._id,'action': action})
            .then((response)=>{})
            .catch(()=>{
              this.$message.error({message: '请稍后重试！',duration: 1000});
            })
        }else{
          this.$message.error({message: '请先登入！',duration: 1000});
        }

      },
      // 赞方法
      zanFun(){
        if(this.isLogin){
          this.zan = !this.zan;
          this.zan?this.article.zan++:this.article.zan--;
          let action = this.zan?1:-1;
          let tag = 'zan';
          // 服务端修改
          this.$ajax.post('/article/zan',{'tag': tag,'aid': this.article._id,'action': action})
            .then((response)=>{})
        }else{
          this.$message.error({message: '请先登入！',duration: 1000});
        }
      },
      // 踩方法
      caiFun(){
        if(this.isLogin){
          this.cai = !this.cai;
          this.cai?this.article.cai++:this.article.cai--;
          let action = this.cai?1:-1;
          let tag = 'cai';
          // 服务端修改
          this.$ajax.post('/article/zan',{'tag': tag,'aid': this.article._id,'action': action})
            .then((response)=>{})
        }else{
          this.$message.error({message: '请先登入！',duration: 1000});
        }
      },
      // 评论点赞方法
      ratingZan(index){
        this.ratings[index].zan++;
        this.$ajax.post("/article/comment",{'id': this.ratings[index]._id,'tag': 'zan'})
          .then((response)=>{})
      },
      // 评论踩方法
      ratingCai(index){
        this.ratings[index].cai++;
        this.$ajax.post("/article/comment",{'id': this.ratings[index]._id,'tag': 'cai'})
          .then((response)=>{})
      },
      // 发布评论方法
      publish(){
        if(!this.ratingVal){
          this.$message.error({message: '请输入内容！',duration: 1000});

        }else if(!this.isLogin){
          this.$message.error({message: '请先登入！',duration: 1000});
        }else{
          let temp = {
            worksId: this.article._id,
            userId: this.$store.state.userMsg._id,
            userName: this.$store.state.userMsg.userName,
            userHeadImg: this.$store.state.userMsg.headimgSrc,
            time:new Date().Format("MM.dd hh:mm"),
            content:this.ratingVal,
            zan:0,
            cai:0
          };
          // 提交服务端
          this.$ajax.post("/article/comment",{'tag': 'comment','content': temp})
            .then((doc)=>{});
          // 客户端的提交
          this.ratings.unshift(temp);
          this.ratingVal = '';
          this.commentFuns();
        }
      },
      // 关注方法
      followFun(){
        if(this.isLogin){
          this.follow = !this.follow;
          let action = this.follow;
          let uid = this.$store.state.userMsg._id;
          let authorId = this.article.userId;
          this.$ajax.post('/admin/follow',{action,uid,authorId})
            .then((doc)=>{
              console.log(doc.data);
            })
        }else{
          this.$message.error({message: '请先登入！',duration: 1000});
        }
      }
    },
    created(){
      let aid = this.$route.query.id;
      // 获取文章
      let arts = this.$store.state.articles.filter((item)=>{
        return item._id === aid;
      });
      this.article = arts[0];
      // 获取评论
      this.$ajax.post('/article/detail',{id: aid})
        .then((response)=>{
          this.ratings = response.data.comment;
        })
        .catch((err)=>{
          this.$message.error({message: '网络错误！',duration: 1000});
        });
      // 检验是否登入
      this.isLogin = this.$store.state.isLogin;
    },
    components:{
      Heads
    }

  }
</script>

<style scoped lang="stylus">

  .detail{
    width: 95%
    margin: 0 auto
    .head-wrap{
      width: 100%
      height: 40px
    }
    .title{
      width: 100%
    }
    .author{
      width: 100%
      height: 45px
      margin-top: 10px
      .avator{
        width: 30px
        height: 30px
        border-radius: 50%
      }
      .author_name{
        display: inline-block
        vertical-align: top
        line-height: 40px
        font-size: 20px
      }
      .follow{
        float: right
      }
    }
    .time{
      margin-top: 10px
    }
    .content{
      margin-top: 20px
      .content-img{
        width 100%
      }
    }
    .footer{
      position: fixed
      left: 0
      bottom: 0
      display: flex
      z-index: 998
      width: 100%
      height: 40px
      background-color: white
      border-top: 1px solid #f2f2f2
      .item{
        flex: 1
        text-align: center
        padding-top: 2px
        .icon{
          font-size: 18px
          color: red
        }
      }

    }

    .comment-box{
      position: absolute
      top: 0
      left: 0
      width: 100%
      height: 1500px
      background: rgba(0,0,0,0.5)
      .box{
          position: fixed
          bottom: 0
          left: 0
          width: 100%
          height: 150px
          background: rgba(255,255,255,1)
          z-index: 1000
          .comment-txt{
            display block
            width: 90%
            height: 80px
            margin: 10px auto
          }
          .publish{
            position: absolute
            right: 17px
            bottom: 16px
            width: 80px
            height: 28px
            border: 1px solid green
            border-radius: 4px
            color: green
          }
        }
    }
    .comment{
      margin-top: 50px
      border-top: 10px solid #f2f2f2
      margin-bottom: 50px
      .comment-head{
        line-height: 40px
        text-indent: 4px
      }
      .comment-item{
        width: 100%
        border-top: 1px solid #f2f2f2
        padding: 10px 0
        border-bottom: 2px solid #eee
        .comment-item-head{
          width: 100%
          height: 40px
          position: relative
          .user-avatar{
            width: 30px
            height: 30px
            border-radius: 50%
          }
          .user-name{
            display: inline-block
            line-height: 40px
            vertical-align: top
            margin-left: 5px
          }
          .item-right{
            position: absolute
            right: 10px
            top: 0
            .icon{
              font-size: 20px
            }
          }
        }
      }
      .comment-footer{
        width: 100%
        line-height: 100px
        text-align: center
      }
    }
  }


</style>
