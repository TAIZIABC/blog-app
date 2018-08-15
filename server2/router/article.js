const express = require('express');
let router  = express.Router();
const Article = require('../model/works');
const Comment = require('../model/comment');


const SUCCESS = 1;
const ERROR = 0;
const LIMIT = 5;

// 主页获取文章接口
router.use('/home',function(req,res){
    skip = 0;
    Article.find().sort({_id: -1}).limit(LIMIT).then((doc)=>{
      res.json({status: SUCCESS,article: doc});
    }).catch(()=>{
      res.json({status: ERROR,msg: 'error'});
    });
});

// 加载更多
let skip = 0;
router.use('/getmore',function(req,res){
  skip += 5;
  Article.find().sort({_id: -1}).skip(skip).limit(LIMIT).then((doc)=>{
    res.json({status: SUCCESS,article: doc});
  }).catch(()=>{
    res.json({status: ERROR,msg: 'error'});
  });
});

// 详情文章接口
router.use('/detail',function (req,res) {
  let aid = req.body.id;
  Comment.find({'worksId': aid}).sort({'_id': -1}).then((doc)=>{
    res.json({status: SUCCESS,msg: 'success',comment: doc});
  });
});

// 评论接口
router.use('/comment',function (req,res) {
  let tag = req.body.tag;
  let id = req.body.id;
  if(tag==='zan'){
    Comment.update({'_id': id},{$inc: {'zan': 1}})
      .then((doc)=>{})
  }else if(tag==='cai'){
    Comment.update({'_id': id},{$inc: {'cai': 1}})
      .then((doc)=>{})
  } else if(tag==='comment'){
    let content = req.body.content;
    let comment = new Comment(content);
    comment.save().then((doc)=>{});
    Article.update({'_id': content.worksId},{$inc: {'comment': 1}})
      .then((doc)=>{})
  }
  res.json({status: SUCCESS,msg: 'success'});
});

// 点赞接口
router.use('/zan',function (req,res) {
  // console.log(req.body);
  let tag = req.body.tag;
  let aid = req.body.aid;
  let action = req.body.action;
  if(tag==='zan'){
    Article.update({'_id': aid},{$inc: {'zan': action}}).then((doc)=>{
      res.json({status: SUCCESS,msg: 'success'});
    });
  }else if(tag==='cai'){
    Article.update({'_id': aid},{$inc: {'cai': action}}).then((doc)=>{
      res.json({status: SUCCESS,msg: 'success'});
    });
  }


});

// 收藏与取消收藏文章接口
router.use('/soucan',function (req,res) {
  let aid = req.body.aid;
  let uid = req.body.uid;
  let action = req.body.action;
  if(action){
    Article.update({'_id': aid},{$push: {'likeUserId': uid}}).then((doc)=>{
      res.json({status: SUCCESS,msg: 'success'});
    });
  }else{
    Article.update({'_id': aid},{$pull: {'likeUserId': uid}}).then((doc)=>{
      res.json({status: SUCCESS,msg: 'success'});
    });
  }
});

// 个人文章接口
router.use('/myworks',function (req,res) {
  Article.find({'userId': req.body.id}).then((doc)=>{
    res.json({satatus: SUCCESS,msg: 'success',doc});
  });
});

// 我的收藏文章接口
router.use('/mycollection',function (req,res) {
  Article.find({'likeUserId': req.body.id}).then((doc)=>{
    res.json({satatus: SUCCESS,msg: 'success',doc});
  });
});

// 删除文章接口
router.use('/delwork',function (req,res) {
  Article.remove({'_id': req.body.id}).then((doc)=>{
    res.json({satatus: SUCCESS,msg: 'success'});
  }).catch((err)=>{
    res.json({satatus: ERROR,msg: 'error'});
  });
});

// 搜索文章接口
router.use('/search',function (req,res) {
  let keyWord = req.body.keyWord;
  let reg = new RegExp(keyWord,'i');
  Article.find({'title':{$regex : reg}}).then((doc)=>{
    res.json({satatus: SUCCESS,msg: 'success',doc});
  }).catch((err)=>{
    res.json({satatus: ERROR,msg: 'error'});
  });
});


module.exports = router;
