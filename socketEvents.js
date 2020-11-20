const itemController = require('./itemController');

/**
 * Kind of a middleware which contains no logic!
 * It just calls functions.
 */

function baseSocket(io) {
	io.on('connection', (socket) => {
		console.log('User ' + socket.id + ' connected to the lobby.');
        itemController.getAll(io, socket);

		socket.on('newItem', (itemTitle) => {
			itemController.createItem(itemTitle, io, socket);
		});

		socket.on('deleteItem', (id) => {
			itemController.deleteItem(id, io, socket);
		});

		socket.on('toggleTodoComplete', (id) => {
			itemController.toggleComplete(id, io, socket);
		});
	});
};

module.exports = {
	baseSocket
};