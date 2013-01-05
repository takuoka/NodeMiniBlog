

var model = require('../model/model.js');
var Post = model.Post;

var title = 'Node miniBlog!';


// GET '/'
exports.index = function( req, res ){
	console.log('===================== GET / =====================');
	Post.find( {}, function( err, items ){
		console.log( err );
		res.render('index.jade', { title: title, posts: items });
	});

};


// POST '/'
exports.indexPOST = function(req, res){
	console.log('===================== POST / =====================');

	console.log(req.body);

	var newPost = new Post(req.body);
	newPost.save(function(err){
		if(err){
			console.log( err );
			res.redirect('back');
		} else {
			res.redirect('/');
		}
	});

};