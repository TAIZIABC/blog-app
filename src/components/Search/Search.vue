<template>
    <div class="search">
      <NavTab></NavTab>
      <div class="header">搜索页面</div>
      <div class="search-wrap">
        <el-input
          placeholder="请输入内容"
          prefix-icon="el-icon-search"
          v-model="keyword">
        </el-input>
      </div>
    </div>
</template>

<script>
  import NavTab from '@/components/NavTab'
    export default {
      name: "Search",
      data(){
        return {
          keyword:''
        }
      },
      components:{
        NavTab
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

</style>
