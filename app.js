
/**
 * Module dependencies.
 */


// モジュールのrequire
var express = require('express'),
	routes  = require('./routes/index.js'),
	user    = require('./routes/user.js'),
	http    = require('http'),
	path    = require('path');


var app = express();


// 色々設定
app.configure(function(){
	app.set('port', process.env.PORT || 3000);
	app.set('views', __dirname + '/views');
	app.set('view engine', 'jade');
	app.use(express.favicon());
	app.use(express.logger('dev'));
	app.use(express.bodyParser());
	app.use(express.methodOverride());
	app.use(app.router);
	app.use(express.static(path.join(__dirname, 'public')));
});

// 開発時限定の設定
app.configure('development', function(){
	app.use(express.errorHandler());
});


// ルーティング
app.get(  '/', routes.index);  // GET'/'きたらroutes.index()実行
app.post( '/', routes.indexPOST);
app.get(  '/users', user.list);


// 最後に app で createServer する。
http.createServer(app).listen(app.get('port'), function(){
	console.log("Express server listening on port " + app.get('port'));
});
