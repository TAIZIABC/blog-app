<template>
    <div class="header">
      <div class="el-icon-arrow-left back" @click="back"></div>
      <span class="title">{{title}}</span>
    </div>
</template>

<script>
    export default {
      name: "header",
      props:[
        'title'
      ],
      methods:{
        back:function () {
          history.back(-1);
        }
      }
    }
</script>

<style scoped>
  .header{
    width: 100%;
    height: 40px;
    position: fixed;
    top: 0;
    left: 0;
    background-color: white;
    border-bottom: 1px solid #f2f2f2;
    z-index: 998;
  }
  .back{
    line-height: 40px;
    float: left;
    font-size: 25px;
  }
  .title{
    line-height: 40px;
    font-size: 18px;
  }
</style>
