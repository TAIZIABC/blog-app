const express = require('express');
let  router = express();
const User = require('../model/user');

// 定义统一返回数据
const ERROR = 0;
const SUCCESS = 1;
let responseData = {};
// 发布接口
router.use('/publish',function (req,res) {
  res.send('publish');
});

// 收藏接口
router.use('/shoucan',function (req,res) {
  res.send('shoucan');
});

// 取消收藏接口
router.use('/unshoucan',function (req,res) {
  res.send('unshoucan');
});


// 关注接口
router.use('/follow',function (req,res) {
  res.send('follow');
});

// 取消关注接口
router.use('/unfollow',function (req,res) {
  res.send('unfollow');
});

// 修改用户信息接口
router.use('/info',function (req,res) {
  let id = req.body.id;
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
