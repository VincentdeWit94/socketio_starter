var port = process.env.PORT || 3000;

var app = require('express')()
  , server = require('http').createServer(app)
  , io = require('socket.io').listen(server, { origins: '*:*' });

server.listen(port);
