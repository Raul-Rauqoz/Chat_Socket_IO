module.exports.listen = (server) => {
	const io = require('socket.io')(server);
	io.on('connection', (socket) => {
		console.log(`new connection ${socket.id}`);
	});
};
