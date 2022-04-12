import socket_client from 'socket.io-client';
export const socket = socket_client('http://localhost:4000/', { transports: [ 'websocket' ] });

export const add_message_ = (data) => {
	socket.emit('add_message_f', data);
};

export const get_messages_ = () => {
	socket.emit('get_messages_f');
};
