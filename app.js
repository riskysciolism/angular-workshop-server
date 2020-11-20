const 	express = require('express'),
		app = express(),
		http = require('http'),
		server = http.createServer(app),
		port = process.env.PORT || 3000,
		socketEvents = require('./socketEvents')

module.exports = app;
console.log('Node running..');

configureSocket();

server.listen(port);

function configureSocket() {
	const io = require('socket.io').listen(server);
	socketEvents.baseSocket(io);
}