<template>
    <div class="my-collection">
      <div class="head-wrap">
        <Heads title="我的收藏"></Heads>
      </div>
      <List :article="article"></List>
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
