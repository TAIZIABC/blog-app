const express  = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const router = require('./router/user');



const app = express();
// 配置服务器
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
// 配置静态资源
app.use('/upload',express.static(__dirname+'/upload'));

// 链接数据库
mongoose.connect('mongodb://localhost/blog-app',function (err) {
  if(err){
    console.log(err);
  }else{
    console.log('mongodb is success');
  }
});


// 接口
app.use("*",function (req,res,next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By",' 3.2.1');
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});
// 用户接口
app.use('/user',require('./router/user'));
// 管理员接口
app.use('/admin',require('./router/admin'));
// 文章接口
app.use('/article',require('./router/article'));



// 监听端口
app.listen('4000',function (err) {
  if(err){
    console.log(err);
  }else{
    console.log('app is listen 4000');
  }
});
