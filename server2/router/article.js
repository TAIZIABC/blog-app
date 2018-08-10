const express = require('express');
let router  = express.Router();


// 主页获取文章接口
router.use('/',function(req,res,next){
  // res.send('article');
  console.log('article');
  next();
});


// 详情文章接口
router.use('/detail',function (req,res) {
  res.send('datail');
});

// 个人文章接口
router.use('/works',function (req,res) {
  res.send('works');
});

// 评论接口
router.use('/comment',function (req,res) {
  res.send('comment');
});

// 点赞接口
router.use('/zan',function (req,res) {
  res.send('zan');
});




module.exports = router;
