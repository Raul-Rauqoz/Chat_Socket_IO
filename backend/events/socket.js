module.exports.listen = (server) => {
	const all_messages = require('../messages/messages');
	const io = require('socket.io')(server);
	io.on('connection', (socket) => {
		console.log(`new connection ${socket.id}`);

		socket.on('add_message_f', (data) => {
			data.id = all_messages.length;
			all_messages.push(data);
			console.log(all_messages);
			socket.emit('get_messages_b', all_messages);
		});

		socket.on('get_messages_f', () => {
			console.log(all_messages);
			socket.emit('get_messages_b', all_messages);
		});
	});
};
