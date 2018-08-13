const mongoose = require("mongoose");
let newsSchema = new mongoose.Schema({
	"postId": String,
	"postName": String,
	"receiveId": String,
	"title": String,
	"content": 	String,
	"time": String,
	"isRead": Boolean
});
module.exports = mongoose.model("news",newsSchema);


