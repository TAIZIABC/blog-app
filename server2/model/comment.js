const mongoose = require("mongoose");
let commentSchema = new mongoose.Schema({
	worksId: String,
	userId: String,
	userName: String,
	userHeadImg: String,
	content: String,
	time: String,
	zan: Number,
  cai: Number
});

module.exports = mongoose.model("comment",commentSchema);















// let Comment = mongoose.model("comment",commentSchema);
// mongoose.connect('mongodb://localhost/blog-app',function (err) {
//   if(err){
//     console.log(err);
//   }else{
//     console.log('success');
//   }
// });
// let com = new Comment({
//   worksId: "5b6f7c059063073ad8543946",
// 	userId: "5b6a438365787e293c0efa9c",
// 	userName: "taizi",
// 	userHeadImg: "/static/img/avatar.jpg",
// 	content: "好热望热望日。。。。。。。。。",
// 	time: "2018-05-24 18:04:4",
// 	zan: 32,
//   cai: 53
// });
// com.save(function(err,doc){
// 	if(err){
// 		console.log(err);
// 	}else{
// 		console.log(doc);
// 	}
// });
