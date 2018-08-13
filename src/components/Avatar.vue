<template>
  <div id="avatar">
    <Head title="上传头像"></Head>
    <div class="img-wrap">
      <el-upload  class="avatar-uploader"
                  action="http://jsonplaceholder.typicode.com/posts   "
                  ref="newupload"
                  list-type="picture-card"
                  :auto-upload='false'
                  accept="image/jpeg,image/gif,image/png,image/bmp"
                  :limit='1'
                  :before-upload="beforeAvatarUpload"
                  :on-exceed="limitNum"
                  :on-change='changeUpload'>
        <i class="el-icon-plus"></i>
      </el-upload>
        <el-button size="small" type="primary" @click="newSubmitForm()">点击上传</el-button>
        <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
      </el-upload>
    </div>

  </div>
</template>

<script>
  import Head from '@/components/Heads'
  export default {
    name: 'Avatar',
    data(){
      return{
      }
    },
    methods: {
      changeUpload: function(file, fileList) {
        return false;
      },
      newSubmitForm(){
        this.$refs.newupload.submit()
      },
      limitNum(files, fileList){
        this.$message.error('只能上传一个文件');
      },
      beforeAvatarUpload(file) {
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
          return false;
        }
        // 通过formdata传文件
        let upFile = new FormData();
        upFile.append('file',file);
        upFile.append('id',this.$store.state.userMsg._id);
        let config = {header: {'Content-Type':'multipart/form-data'}};
        this.$ajax.post('/admin/upload',upFile,config)
          .then((response)=>{
            if(response.data.status){
              this.$message.success('修改成功');
              this.$store.state.userMsg.headimgSrc = response.data.url;
            }else{
              this.$message.error('修改失败');
            }
          })
          .catch(()=>{
            this.$message.error('修改失败，请稍后重试！');
          })
      }
    },

    components:{
      Head
    }

  }
</script>

<style scoped>
  #avatar{
    margin-top: 40px;
    width: 100%;
  }
  .img-wrap{
    width: 100%;
    margin-top: 60px;
  }
  .el-button--small{
    margin-top: 20px;
  }

</style>
