<template>
    <div class="my-news">
      <div class="head-wrap">
        <Head title="我的消息"></Head>
      </div>
      <div class="list">
        <div class="list-item">

        </div>
      </div>
    </div>
</template>

<script>
  import Head from '@/components/head'
    export default {
      name: "MyNews",
      components:{
        Head
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
