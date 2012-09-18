// *******************************************************
// expressjs template
//
// assumes: npm install express
// defaults to jade engine, install others as needed
//
// assumes these subfolders:
//   public/
//   public/javascripts/
//   public/stylesheets/
//   views/
//
var express = require('express');
var app = express();
// Configuration
app.configure(function(){
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  
});
app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
  var oneYear = 31557600000;
  app.use(express.static(__dirname + '/public', { maxAge: oneYear }));
});
app.configure('production', function(){
  app.use(express.errorHandler());
  app.use(express.static(__dirname + '/public'));
});
// *******************************************************
app.listen(process.env.VCAP_APP_PORT || process.env.PORT || 80);

app.get('/*', function(req, res, next){
  //console.log(req);
  next();
});