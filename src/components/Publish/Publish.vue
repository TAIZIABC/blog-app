<template>
  <div class="publish">
    <NavTab></NavTab>
    <div class="header">发布页面</div>
    <div class="content">
      <div class="input-group">
        <input type="text" class="title" placeholder="请输入标题">
      </div>
      <div class="area-group">
        <textarea name="" id="" cols="30" rows="10" placeholder="详细描述"></textarea>
      </div>
      <div class="img-wrap">
        <el-upload
          action="https://jsonplaceholder.typicode.com/posts/"
          list-type="picture-card"
          :on-preview="handlePictureCardPreview"
          :on-remove="handleRemove">
          <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
          <img width="100%" :src="dialogImageUrl" alt="">
        </el-dialog>
      </div>
      <div class="btn-wrap">
        <el-button type="success" round>发布</el-button>
      </div>
    </div>
  </div>
</template>

<script>
  import NavTab from '@/components/NavTab'
    export default {
      name: "Publish",
      data(){
          return{
            dialogImageUrl: '',
            dialogVisible: false
          }
      },
      methods: {
        handleRemove(file, fileList) {
          console.log(file, fileList);
        },
        handlePictureCardPreview(file) {
          this.dialogImageUrl = file.url;
          this.dialogVisible = true;
        }
      },
      components:{
        NavTab
      }
    }
</script>

<style scoped>
  .publish{
    margin-top: 40px;
  }
  .header{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    line-height: 40px;
    text-align: center;
    font-size: 20px;
    background-color: #fff;
    z-index: 998;
    border-bottom: 4px solid #d0d0d0;
  }
  .input-group{
    width: 100%;
    height: 40px;
    border-bottom: 1px solid #d0d0d0;
  }
  .title{
    width: 100%;
    height: 100%;
    border: none;
  }
  .area-group{
    border-bottom: 5px solid #d0d0d0;
  }
  .area-group textarea{
    width: 100%;
    height:100%;
    border: none;
  }
  .img-wrap{
    padding-top: 8px;
    padding-bottom: 8px;
    border-bottom: 5px solid #d0d0d0;
  }
  .btn-wrap{
    width: 100%;
    height: 50px;
  }
  .el-button{
    margin-top: 20px;
    width: 100%;
    height: 100%;
    margin-bottom: 50px;
  }
</style>
