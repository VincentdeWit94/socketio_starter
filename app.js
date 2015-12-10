"use strict";
/* ************************************************************************
 
    Licence : LGPLv3
    Version: 0.1
    Authors: Vincent de Wit
    Date: 2015-12-09
    Date of last modification: 2015-12-09
    Description: Digital Entrance Systems Server
 
************************************************************************ */

var ws = require("nodejs-websocket");

var server = ws.createServer(function (conn) {
	console.log("New connection")
	conn.on("text", function (str) {
		console.log("Received "+str)
		conn.sendText(str.toUpperCase()+"!!!")
	})
	conn.on("close", function (code, reason) {
		console.log("Connection closed")
	})
}).listen(8001)