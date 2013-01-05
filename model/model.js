

var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/mongoData');


function validator(v) {
	return v.length > 0;
}

// 投稿データのフォーマット(スキーマ)を設定。
var Post = new mongoose.Schema({
	text: {type:String, validate:[validator,"Empty Error"]},
	created: {type:Date, default:Date.now() }
});

// Postという名前でスキーマを登録
exports.Post = db.model('Post', Post);

