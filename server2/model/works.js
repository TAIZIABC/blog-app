const mongoose = require("mongoose");
let workSchema = new mongoose.Schema({
	"author": String,
	"userId": String,
	"title" :String,
	"content": String,
	"worksSrc": [],
	"authorHeadImg": String,
	"likeUserId":[],
	"time": String,
	"zan": Number,
	"cai": Number,
	"comment": Number
});

module.exports = mongoose.model("Works",workSchema);















// mongoose.connect('mongodb://localhost/blog-app',function (err) {
//   if(err){
//     console.log(err);
//   }else{
//     console.log('success');
//   }
// });
//
// let Works = mongoose.model('Works',workSchema);
//
// let work = new Works(
//   {
//     "author": 'taizi',
//     "userId": '5b6a438365787e293c0efa9c',
//     "title" :'终于等到你：简书代码块高亮',
//     "content": '就在上周，我们的产品小哥哥告诉大婶，咋们偷偷上线了一个新功能:那就是技术类作者期待了很久的代码块高亮。',
//     "worksSrc": ['https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530377300123&di=ddfe6fb3231ebd1771e87c5c93a7179b&imgtype=0&src=http%3A%2F%2Fg.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2Fb7003af33a87e95053e42ae21c385343faf2b449.jpg'],
//     "authorHeadImg": 'http://localhost:4000/upload\\\\touxian\\\\mpikchPVkaSG8i7c8SKGYkNM.jpg',
//     "likeUserId":['5b6a43ad65787e293c0efa9d','5b6a43c265787e293c0efa9e','5b6a438365787e293c0efa9c'],
//     "time": '2018-05-28 16:50',
//     "zan": 6,
//     "cai": 3,
//     "comment": 4
//   }
// );
// work.save().then(function (doc) {
//   console.log(doc);
// });





