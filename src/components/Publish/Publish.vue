<template>
  <div class="publish">
    <NavTab :active="1"></NavTab>
    <div class="header">发布页面</div>
    <div class="content">
      <div class="input-group">
        <input type="text" class="title" placeholder="请输入标题" v-model="article.title">
      </div>
      <div class="area-group">
        <textarea name="" id="" cols="30" rows="10" placeholder="详细描述" v-model="article.content"></textarea>
      </div>
      <div class="img-wrap">
        <el-upload
          action=""
          ref="upImg"
          list-type="picture-card"
          :on-preview="handlePictureCardPreview"
          :auto-upload='false'
          accept="image/jpeg,image/gif,image/png,image/bmp"
          :limit='1'
          :on-exceed="limitNum"
          :before-upload="beforeAvatarUpload"
          >
          <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
          <img width="100%" :src="dialogImageUrl" alt="">
        </el-dialog>
      </div>
      <div class="btn-wrap">
        <el-button type="success" round @click="publish">发布</el-button>
      </div>
    </div>
  </div>
</template>

<script>
  import NavTab from '@/components/NavTab'
  import timeFunc from '@/util/time'
  Date.prototype.Format = timeFunc;
    export default {
      name: "Publish",
      data(){
          return{
            dialogImageUrl: '',
            dialogVisible: false,
            article: {
              title: '',
              content: ''
            },
          }
      },
      methods: {
        // 预览图片
        handlePictureCardPreview(file) {
          this.dialogImageUrl = file.url;
          this.dialogVisible = true;
        },
        publish(){
          if(!this.$store.state.isLogin){
            this.$message.info({message: '请先登录！',duration: 1000});
          }else if(this.article.title.trim()===''){
            this.$message.info({message: '标题不能为空！',duration: 1000});
          }else if(this.article.content.trim()===''){
            this.$message.info({message: '内容不能为空！',duration: 1000});
          }else{
            this.$refs.upImg.submit();
          }
        },
        // 上传图片
        beforeAvatarUpload(file){
          const isLt2M = file.size / 1024 / 1024 < 2;
          if (!isLt2M) {
            this.$message.error('上传头像图片大小不能超过 2MB!');
            return false;
          }
          // 通过formdata传文件
          let user = this.$store.state.userMsg;
          let upFile = new FormData();
          upFile.append('file',file);
          upFile.append('uid',user._id);
          upFile.append('username',user.userName);
          upFile.append('authorHeadImg',user.headimgSrc);
          upFile.append('time',new Date().Format('yyyy-MM-dd hh:mm'));
          upFile.append('title',this.article.title);
          upFile.append('content',this.article.content);
          let config = {header: {'Content-Type':'multipart/form-data'}};
          this.$ajax.post('/admin/publish',upFile,config)
            .then((response)=>{
              console.log(response.data);
              if(response.data.status){
                this.$message.success('发布成功');
              }else{
                this.$message.error('发布失败');
              }
            })
            .catch(()=>{
              this.$message.error('发布失败，请稍后重试！');
            })
        },
        // 限制图片数量
        limitNum(){
          this.$message.error({message: '只能上传一个文件',duration: 1000});
        },
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
