const mongoose = require("mongoose");

let userSchema = new mongoose.Schema({
	"userName": String,
	"userPwd" : String,
	"userPhone": Number,
	// "sex": String,
	"headimgSrc": String,
	"gxqm": String
});

module.exports = mongoose.model("User",userSchema);
