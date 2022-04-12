module.exports.listen = (server) => {
	const all_messages = require('../messages/messages');
	const all_users = require('../messages/users');
	const io = require('socket.io')(server);
	io.on('connection', (socket) => {
		socket.on('add_message_f', (data) => {
			data.id = all_messages.length;
			all_messages.push(data);
			io.emit('get_messages_b', all_messages);
		});

		socket.on('get_messages_f', () => {
			io.emit('get_messages_b', all_messages);
		});

		socket.on('new', (data) => {
			all_users.push({ id: socket.id, nick: data });
			console.log(`New ${socket.id} users: ${all_users.length}`);
		});

		socket.on('disconnect', (data) => {
			all_users.splice(all_users.findIndex((e) => e.nick === data), 1);
			console.log(`New ${socket.id} users: ${all_users.length}`);
		});
	});
};
