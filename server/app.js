
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var dataRoute = require('./routes/data');
var http = require('http');
var path = require('path');
var cors = require('cors');
var serverUrl = require("../server-url");
var mongoose = require("mongoose");
var mongoDB = require("./database_config");

var app = express();

mongoose.connect(mongoDB, {useNewUrlParser: true});

mongoose.Promise = global.Promise;

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.json());
app.use(express.urlencoded());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors({origin: serverUrl + ':8081', }))

app.get('/', routes);
app.get('/data', dataRoute);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
