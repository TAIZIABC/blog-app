const express = require('express');
let router = express.Router();
let User = require('../model/user');



// 定义统一返回数据
const ERROR = 0;
const SUCCESS = 1;
let responseData = {};

// 注册接口
router.use('/register',function (req,res) {
  // 判断是否存在的变量
  let existed = false;
  let userMsg = req.body;
  console.log(userMsg);
  User.find({'usernNme': userMsg.username})
    .then((data)=>{
      if(data){
        existed = true;
        responseData.status = ERROR;
        responseData.msg = "用户名已存在！";
        return false;
      }
    });
  if(!existed){
    let user = new User({
      "userName": userMsg.username,
      "userPwd" : userMsg.password,
      "userPhone": userMsg.phone,
      // "sex": '男',
      "headimgSrc": '/static/img/avatar.jpg',
      "gxqm": '无'
    });
    user.save(function (err) {
      if(err){
        responseData.status = ERROR;
        responseData.msg = "注册失败，请稍后重试！";
        res.json(responseData);
      }else{
        responseData.status = SUCCESS;
        responseData.msg = "注册成功！";
        res.json(responseData);
      }
    })
  }
});

// 登入接口
router.use('/login',function (req,res) {
  console.log(req.body);
  User.findOne({'userPhone': req.body.phone,'userPwd': req.body.password})
    .then((doc)=>{
      if(doc){
        responseData.status = SUCCESS;
        responseData.msg = "登入成功！";
        responseData.userMsg = doc;
        res.json(responseData);
      }else{
        responseData.status = ERROR;
        responseData.msg = "用户名或密码错误！";
        res.json(responseData);
      }
    });
});



module.exports = router;
