<template>
    <div class="my-news">
      <div class="head-wrap">
        <Heads title="我的消息"></Heads>
      </div>
      <div class="list">
        <div class="list-item">

        </div>
      </div>
    </div>
</template>

<script>
  import Heads from '@/components/Heads'
    export default {
      name: "MyNews",
      components:{
        Heads
      }
    }
</script>

<style scoped lang="stylus">
  .my-news{
    .head-wrap{
      width: 100%
      height: 40px
    }
  }
</style>
