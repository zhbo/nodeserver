var express = require('express');
var cookieParser = require('cookie-parser');
var config = require('./config');
var path = require('path');


function listen(port){
  var app = express();
  app.use(cookieParser());

app.get('/file/*', function (req, res, next) {
  var f = req.params[0];
  console.log(f);
  f = path.resolve(f);
  console.log(f);
  console.log('Download file: %s', f);
  res.download(f);
});
  
  app.use(function(req, res, next){
    var result = {};
    result.name = config.id + '_' + port;

    if(config.readCookie){
      var cookie = req.cookies[config.readCookie];
      //console.log("cookie name: %s", config.readCookie);
      res.cookie(config.readCookie,cookie);
      result.readCookie = cookie;
    } else if(config.writeCookie){
      var tmp = config.writeCookie;
      res.cookie(tmp.name, tmp.value);
      result.writeCookie = config.writeCookie;
    }
    var now = new Date().toLocaleTimeString();
    if(req.originalUrl!="/index.html"){
 //     console.log(req.headers);

    for( var key in req.headers){
//        console.log(key);
        if(key == "x-forward-for"){
        result['x-forward-for'] = req.headers['x-forward-for'];
        }
        if(key == "x-forwarded-proto"){
        result['x-forwarded-proto'] = req.headers['x-forwarded-proto'];
        }
        if(key == "x-forwarded-version"){
        result['x-forwarded-version'] = req.headers['x-forwarded-version'];
        }
    }

      console.log("client ip: %s, time: %s,querystring: %s", req.ip,now,req.originalUrl);
    }
   // console.log("client ip: %s, time: %s,querystring: %s", req.ip,now,req.originalUrl);
  //  sleep(10000);  
    res.send(200, result);
  }); 
  
  console.log('listen port',port);

  app.listen(port);
}

function start(){
  var ports = config.listeners;

  for(var i = 0; i < ports.length; i++){
    listen(ports[i]);
  }
}

function sleep(milliSeconds) { 
    var startTime = new Date().getTime(); 
    while (new Date().getTime() < startTime + milliSeconds);
 };

start();

