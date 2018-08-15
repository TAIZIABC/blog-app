const express = require('express');
const multiparty = require('multiparty');
let  router = express();
const User = require('../model/user');
const Article = require('../model/works');


// 服务器上传地址根目录
const URL = 'http://localhost:4000/';
// 定义统一返回数据
const ERROR = 0;
const SUCCESS = 1;
let responseData = {};


// 发布接口
router.use('/publish',function (req,res) {
  let form = new multiparty.Form({
    uploadDir: './upload/image',
    encoding: 'utf-8'
  });
  form.parse(req,function (err,fields,files) {
    if(err){
      res.json({status: ERROR,msg: 'error'});
    }else{
      let fileUrl = URL+files.file[0].path;
      let art = {};
      art['title'] = fields.title[0];
      art['content'] = fields.content[0];
      art['author'] = fields.username[0];
      art['userId'] = fields.uid[0];
      art['time'] = fields.time[0];
      art['authorHeadImg'] = fields.authorHeadImg[0];
      art['worksSrc'] = [fileUrl];
      art['likeUserId'] = [];
      art['zan'] = 0;
      art['cai'] = 0;
      art['comment'] = 0;
      // 更新数据库
      let article = new Article(art);
      article.save().then((doc)=>{
        res.json({status: SUCCESS,msg: 'success'});
      }).catch(()=>{
        res.json({status: ERROR,msg: 'error'});
      })
    }
  });
});



// 上传接口
router.use('/upload',function(req,res){
  let form = new multiparty.Form({
    uploadDir: './upload/touxian',
    encoding: 'utf-8'
  });
  form.parse(req,function (err,fields,files) {
    if(err){
      console.log(err);
    }else{
      let id = fields.id[0];
      let file = files.file[0];
      // 更新数据库
      let fileUrl = URL+file.path;
      User.update({'_id': id},{'headimgSrc': fileUrl})
        .then((doc)=>{
          if(doc.ok){
            res.json({status: 1,msg: 'success',url: fileUrl});
          }else{
            res.json({status: 0,msg: '修改失败'});
          }
        });
    }
  });

});

// 关注接口
router.use('/follow',function (req,res) {
  let action = req.body.action;
  let uid = req.body.uid;
  let authorId = req.body.authorId;
  if(action){
    User.update({'_id': uid},{$addToSet: {'follow': authorId}}).then((doc)=>{
      res.json({satatus: SUCCESS,msg: 'success'});
    });
  }else{
    User.update({'_id': uid},{$pull: {'follow': authorId}}).then((doc)=>{
      res.json({satatus: SUCCESS,msg: 'success'});
    });
  }
});

// 我的关注接口
router.use('/myfollow',function (req,res) {
  User.findOne({'_id': req.body.id},'follow').then((doc)=>{
    let follow = doc.follow;
    let promises = follow.map((id)=>{
      return User.findOne({'_id': id})
    });
    return Promise.all(promises);
  }).then((doc)=>{
    res.json({satatus: SUCCESS,msg: 'success',doc});
  }).catch((err)=>{
    res.json({satatus: ERROR,msg: 'error'});
  });

});


// 修改用户信息接口
router.use('/info',function (req,res) {
  let id = req.body.id;
  // 用户名不能重复，需单独处理
  if(req.body.type==='userName'){
    User.find({'userName': req.body.value}).then(doc=>{
      if(doc.length){
        res.json({status: ERROR,msg: '用户名已存在！'});
        return false;
      }
    })
  }
  let obj = {};
  obj[req.body.type] = req.body.value;
  User.update({'_id': id},obj)
    .then((doc)=>{
      if(doc.ok){
        responseData.status = SUCCESS;
        responseData.msg = "修改成功！";
        res.json(responseData);
      }else{
        responseData.status = ERROR;
        responseData.msg = "修改失败！";
        res.json(responseData);
      }
    });
});








module.exports = router;
