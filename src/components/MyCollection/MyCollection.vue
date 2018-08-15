<template>
    <div class="my-collection">
      <div class="head-wrap">
        <Heads title="我的收藏"></Heads>
      </div>
      <List :article="article" tag="mycollection"></List>
      <div class="footer" v-text="article.length?'--end--':'暂无内容'"></div>
    </div>
</template>

<script>
  import Heads from '@/components/Heads'
  import List from '@/components/List'
    export default {
      name: "MyCollection",
      data(){
        return{
          article:[]
        }
      },
      created(){
        this.$ajax.post('/article/mycollection',{'id': this.$store.state.userMsg._id})
          .then((response)=>{
            this.article = response.data.doc;
          }).catch(()=>{
          this.$message.error({message: '网络错误！',duration: 1000});
        })
      },
      components:{
        Heads,
        List
      }
    }
</script>

<style scoped lang="stylus">
  .my-collection{
    .head-wrap{
      width: 100%
      height: 40px
    }
    .footer{
      width: 100%
      line-height: 100px
      text-align: center
    }
  }

</style>
