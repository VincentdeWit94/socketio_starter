var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(80);

app.get('/', function (req, res) {

});

io.on('connection', function (socket) {
  socket.emit('alive', { hello: 'world' });
  socket.on('alive', function (data) {
    console.log(data);
  });
});