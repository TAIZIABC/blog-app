<template>
    <div class="my-works">
      <div class="head-wrap">
        <Heads title="我的作品"></Heads>
      </div>
      <List :article="article"></List>
      <div class="footer" v-text="article.length?'--end--':'暂无内容'"></div>
    </div>
</template>

<script>
  import Heads from '@/components/Heads'
  import List from '@/components/List'
  export default {
    name: "MyWorks",
    data(){
      return{
        article:[
          {
            title: '江西理工大学',
            content: '信息工程学院网络151倒萨范德萨倒萨范德萨公司的的撒广东佛山广泛的撒旦感到十分士大夫广东大商股份的方式郭德纲非递归算法士大夫但是广东省',
            imgSrc: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1529984717415&di=456de96e8fd741b0251ae6cbd6e48396&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F13%2F69%2F82%2F65Z58PICpiT_1024.jpg',
            url: '/detail'
          },
          {
            title: '江西理工大学',
            content: '信息工程学院网络151',
            imgSrc: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2139391670,4174270048&fm=27&gp=0.jpg',
            url: '/detail'
          },
          {
            title: '江西理工大学',
            content: '信息工程学院网络151',
            imgSrc: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530579513&di=51e830bdc45a47441bf54ed3f688654d&imgtype=jpg&er=1&src=http%3A%2F%2Fpic32.photophoto.cn%2F20140817%2F0034034463193076_b.jpg',
            url: '/detail'
          },
          {
            title: '江西理工大学',
            content: '信息工程学院网络151',
            imgSrc: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=276813578,2219466530&fm=200&gp=0.jpg',
            url: '/detail'
          }
        ]
      }
    },
    components:{
      Heads,
      List
    }
  }
</script>

<style scoped lang="stylus">
  .my-works{
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
