<template>
    <div class="search">
      <NavTab :active="2"></NavTab>
      <div class="header">搜索页面</div>
      <div class="search-wrap">
        <el-input
          placeholder="请输入内容"
          prefix-icon="el-icon-search"
          v-on:change="getInfo"
          v-model="keyword">
        </el-input>
      </div>
      <div class="content" v-if="article.length">
        <List :article="article"></List>
      </div>
      <div class="info" v-if="!article.length">
        暂无内容
      </div>
    </div>
</template>

<script>
  import NavTab from '@/components/NavTab'
  import List from '@/components/List'
  export default {
    name: "Search",
    data(){
      return {
        keyword:'',
        article: []
      }
    },
    methods: {
      getInfo(){
        this.$ajax.post('/article/search',{'keyWord': this.keyword}).then((response)=>{
          this.article = response.data.doc;
        }).catch(()=>{
          this.$message.info({message: '搜索失败，请稍后重试！',duration: 1000});
        })
      }
    },
    components:{
      NavTab,
      List
    }
  }
</script>

<style scoped>
  .search{
    margin-top: 40px;
  }
  .header{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 40px;
    line-height: 40px;
    text-align: center;
    font-size: 20px;
    background-color: #fff;
    border-bottom: 4px solid #d0d0d0;
  }
  .search-wrap{
    width: 100%;
    height: 50px;
    margin-top: 20px;
  }
  .info{
    width: 100%;
    height: 200px;
    line-height: 200px;
    text-align: center;
    font-size: 20px;
  }

</style>
