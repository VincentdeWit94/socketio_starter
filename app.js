/*
var express = require('express');
var app = express();
var server = require('http').createServer(app);
// var io = require('../..')(server);
// New:
var io = require('socket.io')(server);
*/
var port = process.env.PORT || 3000;

var app = require('express')()
  , server = require('http').createServer(app)
  , io = require('socket.io').listen(server, { origins: '*:*' });

server.listen(port);