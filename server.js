var express = require('express');
var app=express();
var server = require('http').createServer(app);

app.use(express.static(__dirname + '/public'));
//这句很关键，没有它，POST解析就无法进行
app.use(express.bodyParser({}));
app.use(express.cookieParser());

app.set("view engine","ejs");

server.listen(8059);


app.get("/",function(req,res){
	res.render("index");
});

app.post("addShuo",function(req,res){
	var msg={id:123123,content:"哈哈哈哈哈"};
	res.send(msg);
});

app.post("delShuo",function(req,res){
	var id=1;
	res.send("ok");
});
