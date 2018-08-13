const mongoose = require("mongoose");

let userSchema = new mongoose.Schema({
	"userName": String,
	"userPwd" : String,
	"userPhone": Number,
	// "sex": String,
	"headimgSrc": String,
	"gxqm": String,
  'follow': []
});

module.exports = mongoose.model("User",userSchema);
