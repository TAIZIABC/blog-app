<template>
  <div class="home"  v-loading="loading"
       element-loading-text="拼命加载中"
       element-loading-spinner="el-icon-loading"
       element-loading-body="true"
       v-loading.fullscreen.lock="false"
       element-loading-background="rgba(0, 0, 0, 0.8)">
    <!--<Heads></Heads>-->
    <NavTab :active="0"></NavTab>
    <div class="slide-wrap">
      <Slide></Slide>
    </div>
    <List :article="article"></List>
    <div class="more" @click="getMore">
      加载更多
    </div>
  </div>
</template>

<script>
  import Slide from './slide';
  import {js} from '../../assets/font.js';
  import List from '../List'
  import Heads from '../Heads'
  import NavTab from '@/components/NavTab'
    export default {
      name: "Home",
      data(){
        return{
          article:[
            // {
            //   title: '江西理工大学',
            //   content: '信息工程学院网络151倒萨范德萨倒萨范德萨公司的的撒广东佛山广泛的撒旦感到十分士大夫广东大商股份的方式郭德纲非递归算法士大夫但是广东省',
            //   imgSrc: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1529984717415&di=456de96e8fd741b0251ae6cbd6e48396&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F13%2F69%2F82%2F65Z58PICpiT_1024.jpg',
            //   url: '/detail'
            // },
            // {
            //   title: '江西理工大学',
            //   content: '信息工程学院网络151',
            //   imgSrc: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2139391670,4174270048&fm=27&gp=0.jpg',
            //   url: '/detail'
            // },
            // {
            //   title: '江西理工大学',
            //   content: '信息工程学院网络151',
            //   imgSrc: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530579513&di=51e830bdc45a47441bf54ed3f688654d&imgtype=jpg&er=1&src=http%3A%2F%2Fpic32.photophoto.cn%2F20140817%2F0034034463193076_b.jpg',
            //   url: '/detail'
            // },
            // {
            //   title: '江西理工大学',
            //   content: '信息工程学院网络151',
            //   imgSrc: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=276813578,2219466530&fm=200&gp=0.jpg',
            //   url: '/detail'
            // }
          ],
          loading: false
        }
      },
      methods: {
        getMore(){
          this.loading = true;
          this.$ajax.get('/article/getmore').then((response)=>{
            if(response.data.article.length){
              this.loading = false;
              this.article = this.article.concat(response.data.article);
              this.$store.state.articles =this.$store.state.articles.concat(response.data.article);
            }else{
              this.loading = false;
              this.$message.info({message: '没有更多数据了！',duration: 1000});
            }
          }).catch((err)=>{
            this.loading = false;
            this.$message.info({message: '网络错误！',duration: 1000});
          })
        }
      },
      components:{
        Slide,
        List,
        Heads,
        NavTab
      },
      created(){
        this.$ajax.get('/article/home')
          .then((response)=>{
            if(response.status===200){
              this.article = response.data.article;
              this.$store.state.articles = response.data.article;
            }
          })
          .catch(()=>{
            this.$message.error('网络错误！');
          })
      }
    }
</script>

<style scoped>
  .slide-wrap{
    width: 100%;
    height: 215px;
  }
  .more{
    width: 100%;
    line-height: 50px;
    text-align: center;
    border-top: 1px solid #d0d0d0;
    margin-bottom: 45px;
  }
</style>
