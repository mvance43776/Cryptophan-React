
/**
 * Module dependencies.
 */

var express = require('express');
var token = require('./model/team');
var http = require('http');
var path = require('path');
var mongoose = require('mongoose');
var fs = require('fs');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.json());
app.use(express.urlencoded());
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
  mongoose.connect('mongodb://mvance:mvance43776@ds153980.mlab.com:53980/whale_watch');
}

//load all files in models dir
fs.readdirSync(__dirname + '/models').forEach(function(filename) {
  if (~filename.indexOf('.js')) require(__dirname + '/models/' + filename)
});


app.get('/team', function(req, res) {
  mongoose.model('TokenSchema').find(function(err, token) {
    res.send(token);
  });
});


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
