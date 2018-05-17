//引入express模块
var express = require('express');

//实例化express的对象
var app = express();

//配置视图引擎
app.set('view engine','ejs');

//让服务器识别外部样式表
app.use('/assets',express.static('assets'));


//通过对象调用对应的方法 根据用户请求的地址，返回相应的数据信息。
app.get('/',function (req,res) {
    res.render('index');
});

app.get('/contact',function (req,res) {
    res.render('contact');
});

app.get('/profile',function (req,res) {
    res.render('profile');
});

//路由参数
app.get('/profile/:id',function(req,res){
    var data = [{age:29,name:["Henry","Emily"]},{age:30,name:["Bucky","Elyse","John"]}];
    res.render('profile',{websiteName:req.params.id,data:data});
});


//监听服务器端口号
app.listen(8082);