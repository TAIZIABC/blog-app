<template>
  <div class="content">
    <ul>
      <router-link class="item"
                   v-for="(item,index) in article"
                   :key="index"
                   :to="{path:'/detail',query:{id:item._id}}"
                    v-longtap="tag==='myworks'?{fn:delWorks,id:item._id,index}:{fn:unFollow,id:item._id,index}"
                    >
        <div class="content-left">
          <div class="content-mid">
            <h2 v-color>{{ item.title }}</h2>
            <p>{{ item.content|shortContent }}</p>
          </div>
          <div class="content-footer">
            <span class="author">{{item.author}}</span>&nbsp;
            <span class="like-num">
                  <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-zan"></use>
                  </svg>{{item.likeUserId.length}}
            </span>&nbsp;
            <span class="comment">
                  <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-pinglun"></use>
                  </svg>{{item.comment}}
            </span>
          </div>
        </div>
        <div class="content-right">
          <img :src="item.worksSrc" alt="网络错误，图片加载失败！">
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
  import { MessageBox } from 'element-ui'
    export default {
      name: "list",
      props:[
        'article',
        'tag'
      ],
      methods: {
        // 删除作品方法
        delWorks(obj){
            MessageBox.confirm('此操作将永久删除该文件, 是否继续?', '删除文章', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'warning',
              center: true,
            }).then(()=>{
              // 客户端删除
              this.article.splice(obj.index,1);
              // 服务端删除
              this.$ajax.post('/article/delwork',{'id': obj.id}).then((response)=>{
                if(response.data.status){
                  this.$message.success({message: '删除成功！',duration: 1000});
                }
              })
            }).catch(()=>{
              this.$message.error({message: '删除失败！',duration: 1000});
            })
        },
        // 取消收藏方法
        unFollow(obj){
          if(this.tag!=='mycollection'){
            return ;
          }
          MessageBox.confirm('取消收藏, 是否继续?', '取消收藏', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning',
            center: true,
          }).then(()=>{
            // 客户端修改
            this.article.splice(obj.index,1);
            // 服务端修改
            this.$ajax.post('/article/soucan',{'action': false,'aid': obj.id,'uid': this.$store.state.userMsg._id}).then((response)=>{
              // action为false时是表示取消收藏的标记
              if(response.data.status){
                this.$message.success({message: '删除成功！',duration: 1000});
              }
            })
          }).catch(()=>{
            this.$message.error({message: '取消失败！',duration: 1000});
          })
        }
      },
      directives: {
        'color': {
          bind(el,binding,vnode){
            el.style.color = '#'+Math.random().toString(16).slice(2,8);
          }
        }
      },
      filters:{
        shortContent(val){
          return val.slice(0,35)+'...';
        }
      }
    }
</script>

<style scoped>
  .content{
    margin-top: 20px;
  }
  .item{
    width: 100%;
    height: 100px;
    display: flex;
    padding: 5px;
    border-top: 1px solid #d0d0d0;
    box-sizing: border-box;
  }
  .content-left{
    width: 75%;
    height: 100%;
    box-sizing: border-box;
    position: relative;
    text-align: left;
  }
  .content-mid{
    width: 95%;
    height: 69px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .content-mid h2{
    font-size: 18px;
    line-height: 25px;
    color: #2f2f2f;
    font-weight: 700;
  }
  .content-mid p{
    font-size: 13px;
    color: #999999;
    line-height: 21px;
  }
  .content-footer{
    width: 100%;
    height: 20px;
    position: absolute;
    bottom: 0;
    left: 0;
    color: #787878;
  }
  .content-right{
    width: 25%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .content-right img{
    width: 90%;
    height: 90%;
    display: block;
  }
</style>
