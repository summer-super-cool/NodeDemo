// // // console.log("hell NodeJS!")
// //
// // //定时器
// // // setTimeout(function () {
// // //     console.log('3 seconds have passed');
// // // },3000);
// //
// // // var time = 0;
// // // var timer = setInterval(function () {
// // //     time += 2;
// // //     console.log(time + ' seconds have passed');
// // //     if(time > 4)
// // //         clearInterval(timer);
// // // },2000);
// //
// // //路径
// // // console.log(__dirname);  // 不包含文件文件名的路径
// // // console.log(__filename); // 包含文件文件名的路径
// // //
// // // //gaobal
// // // console.log(global); // 全局对象不再是windown 而是global
// //
// // //require
// // // var stuff = require('./stuff');
// // //
// // // console.log(stuff.counter(['Henry','Bucky','Emily']));
// // // console.log(stuff.adder(5,stuff.pi));
// //
// // //1.引入事件模块
// // var events = require('events');
// //
// // //2,创建EventEmitter对象
// // var myEmitter = new events.EventEmitter();
// //
// // //3,注册事件
// // myEmitter.on('someEvent',function(msg){
// // //setImmediate 异步
// //
// //     setImmediate(function(){
// //         console.log(msg);
// //     })
// // })
// //
// // //触发事件
// // myEmitter.emit('someEvent','实现时间并传递此参数到注册事件的回调函数中');
// //
// // console.log(1);
//
//
// //文件系统
//
// //1，引入文件系统模块
// var fs = require('fs');
//
// //2，通过对象调用方法
// var readMe = fs.readFileSync('1.txt','utf8');  // 同步读取
// //console.log(readMe);
//
// fs.writeFileSync('writeMe.txt',readMe); //同步写入
//
// // 异步写入文件
// fs.readFile('1.txt','utf8',function(err,data){
//     if(err) throw err;
//
//     fs.writeFile('writeMe2.txt',data);
// })

//删除文件
// var fs = require('fs');
//
// fs.unlink('1.txt',function(err){
//     if(err)
//         throw err;
//     console.log("文件删除成功！");
// })


// console.log("文件删除成功！");

